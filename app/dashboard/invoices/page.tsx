'use client';

import { useEffect, useState } from 'react';
import {
  DocumentCheckIcon,
  PlusCircleIcon,
  CheckCircleIcon,
  ClockIcon,
  XCircleIcon,
  CurrencyDollarIcon,
  CalendarIcon,
  UserIcon,
  BriefcaseIcon
} from '@heroicons/react/24/outline';

interface UninvoicedTimesheet {
  id: number;
  employee_name: string;
  project_code: string;
  period_start: string;
  period_end: string;
  total_hours: number;
  contractor_rate: number;
  client_rate: number;
  contractor_amount: number;
  client_amount: number;
  profit: number;
}

interface InvoiceResult {
  success: boolean;
  message: string;
  invoice_id?: string;
  invoice_number?: string;
  details?: any;
}

export default function InvoicesPage() {
  const [timesheets, setTimesheets] = useState<UninvoicedTimesheet[]>([]);
  const [selectedIds, setSelectedIds] = useState<Set<number>>(new Set());
  const [loading, setLoading] = useState(true);
  const [generating, setGenerating] = useState(false);
  const [error, setError] = useState('');
  const [result, setResult] = useState<InvoiceResult | null>(null);

  const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000';

  useEffect(() => {
    fetchUninvoiced();
  }, []);

  const fetchUninvoiced = async () => {
    try {
      setLoading(true);
      const response = await fetch(`${API_URL}/api/invoices/uninvoiced`);
      const data = await response.json();

      if (data.success) {
        setTimesheets(data.timesheets || []);
        setError('');
      } else {
        setError(data.error || 'Failed to fetch uninvoiced timesheets');
      }
    } catch (err) {
      setError('Failed to connect to API');
      console.error('Fetch error:', err);
    } finally {
      setLoading(false);
    }
  };

  const toggleSelection = (id: number) => {
    const newSelected = new Set(selectedIds);
    if (newSelected.has(id)) {
      newSelected.delete(id);
    } else {
      newSelected.add(id);
    }
    setSelectedIds(newSelected);
  };

  const selectAll = () => {
    if (selectedIds.size === timesheets.length) {
      setSelectedIds(new Set());
    } else {
      setSelectedIds(new Set(timesheets.map(t => t.id)));
    }
  };

  const generateInvoice = async () => {
    if (selectedIds.size === 0) {
      setError('Please select at least one timesheet');
      return;
    }

    setGenerating(true);
    setResult(null);

    try {
      const response = await fetch(`${API_URL}/api/invoices/generate`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          timesheet_ids: Array.from(selectedIds)
        })
      });

      const data = await response.json();
      setResult(data);

      if (data.success) {
        // Refresh the list
        setTimeout(() => {
          fetchUninvoiced();
          setSelectedIds(new Set());
        }, 2000);
      }
    } catch (err) {
      setResult({
        success: false,
        message: 'Failed to generate invoice. Please check your API configuration.'
      });
      console.error('Generation error:', err);
    } finally {
      setGenerating(false);
    }
  };

  const selectedTimesheets = timesheets.filter(t => selectedIds.has(t.id));
  const totals = selectedTimesheets.reduce(
    (acc, t) => ({
      hours: acc.hours + t.total_hours,
      contractorAmount: acc.contractorAmount + t.contractor_amount,
      clientAmount: acc.clientAmount + t.client_amount,
      profit: acc.profit + t.profit
    }),
    { hours: 0, contractorAmount: 0, clientAmount: 0, profit: 0 }
  );

  if (loading) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex items-center justify-center py-12">
          <ClockIcon className="h-8 w-8 text-emerald-500 animate-spin mr-3" />
          <span className="text-gray-600">Loading timesheets...</span>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Invoice Generation</h1>
            <p className="text-gray-600 mt-2">
              Generate invoices from approved timesheets
            </p>
          </div>
          {selectedIds.size > 0 && (
            <button
              onClick={generateInvoice}
              disabled={generating}
              className="px-6 py-3 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center text-lg font-medium shadow-lg"
            >
              {generating ? (
                <>
                  <div className="h-5 w-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
                  Generating...
                </>
              ) : (
                <>
                  <PlusCircleIcon className="h-6 w-6 mr-2" />
                  Generate Invoice ({selectedIds.size})
                </>
              )}
            </button>
          )}
        </div>
      </div>

      {/* Error Alert */}
      {error && (
        <div className="mb-6 bg-red-50 border border-red-200 rounded-lg p-4">
          <div className="flex items-center">
            <XCircleIcon className="h-5 w-5 text-red-400 mr-2" />
            <p className="text-sm text-red-700">{error}</p>
          </div>
        </div>
      )}

      {/* Success Result */}
      {result && (
        <div
          className={`mb-6 rounded-lg p-6 border-2 ${
            result.success
              ? 'bg-emerald-50 border-emerald-300'
              : 'bg-red-50 border-red-300'
          }`}
        >
          <div className="flex items-start">
            {result.success ? (
              <CheckCircleIcon className="h-6 w-6 text-emerald-600 mr-3 mt-1" />
            ) : (
              <XCircleIcon className="h-6 w-6 text-red-600 mr-3 mt-1" />
            )}
            <div className="flex-1">
              <h3
                className={`text-lg font-semibold mb-2 ${
                  result.success ? 'text-emerald-900' : 'text-red-900'
                }`}
              >
                {result.success ? 'Invoice Generated Successfully!' : 'Generation Failed'}
              </h3>
              <p
                className={`text-sm mb-3 ${
                  result.success ? 'text-emerald-800' : 'text-red-800'
                }`}
              >
                {result.message}
              </p>
              {result.invoice_number && (
                <div className="bg-white rounded p-3 text-sm">
                  <p className="font-medium text-gray-900">
                    Invoice Number: {result.invoice_number}
                  </p>
                  {result.invoice_id && (
                    <p className="text-gray-600 text-xs mt-1">
                      ID: {result.invoice_id}
                    </p>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Selection Summary */}
      {selectedIds.size > 0 && (
        <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-6 mb-6">
          <h3 className="text-lg font-semibold text-emerald-900 mb-4">
            Invoice Summary
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div>
              <p className="text-sm text-emerald-700">Total Hours</p>
              <p className="text-2xl font-bold text-emerald-900">
                {totals.hours.toFixed(2)}
              </p>
            </div>
            <div>
              <p className="text-sm text-emerald-700">Contractor Cost</p>
              <p className="text-2xl font-bold text-emerald-900">
                ${totals.contractorAmount.toFixed(2)}
              </p>
            </div>
            <div>
              <p className="text-sm text-emerald-700">Client Invoice</p>
              <p className="text-2xl font-bold text-emerald-900">
                ${totals.clientAmount.toFixed(2)}
              </p>
            </div>
            <div>
              <p className="text-sm text-emerald-700">Profit</p>
              <p className="text-2xl font-bold text-emerald-900">
                ${totals.profit.toFixed(2)}
              </p>
              <p className="text-xs text-emerald-600 mt-1">
                {((totals.profit / totals.contractorAmount) * 100).toFixed(1)}% margin
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Timesheets Table */}
      {timesheets.length === 0 ? (
        <div className="bg-white rounded-lg shadow p-12 text-center border border-gray-200">
          <DocumentCheckIcon className="h-16 w-16 text-gray-300 mx-auto mb-4" />
          <h3 className="text-lg font-medium text-gray-900 mb-2">
            No uninvoiced timesheets
          </h3>
          <p className="text-gray-600">
            All approved timesheets have been invoiced. New timesheets will appear here after
            processing.
          </p>
        </div>
      ) : (
        <div className="bg-white rounded-lg shadow border border-gray-200 overflow-hidden">
          <div className="p-4 border-b border-gray-200 bg-gray-50">
            <label className="flex items-center cursor-pointer">
              <input
                type="checkbox"
                checked={selectedIds.size === timesheets.length}
                onChange={selectAll}
                className="h-5 w-5 text-emerald-600 rounded border-gray-300 focus:ring-emerald-500"
              />
              <span className="ml-3 text-sm font-medium text-gray-700">
                Select All ({timesheets.length} timesheets)
              </span>
            </label>
          </div>

          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="w-12 px-6 py-3"></th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Employee
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Project
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Period
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Hours
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Cost
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Bill
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Profit
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {timesheets.map((timesheet) => (
                  <tr
                    key={timesheet.id}
                    className={`hover:bg-gray-50 ${
                      selectedIds.has(timesheet.id) ? 'bg-emerald-50' : ''
                    }`}
                  >
                    <td className="px-6 py-4">
                      <input
                        type="checkbox"
                        checked={selectedIds.has(timesheet.id)}
                        onChange={() => toggleSelection(timesheet.id)}
                        className="h-5 w-5 text-emerald-600 rounded border-gray-300 focus:ring-emerald-500"
                      />
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <UserIcon className="h-5 w-5 text-gray-400 mr-2" />
                        <span className="text-sm font-medium text-gray-900">
                          {timesheet.employee_name}
                        </span>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <BriefcaseIcon className="h-5 w-5 text-gray-400 mr-2" />
                        <span className="text-sm text-gray-600">
                          {timesheet.project_code}
                        </span>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center text-sm text-gray-600">
                        <CalendarIcon className="h-4 w-4 mr-2" />
                        <span>
                          {new Date(timesheet.period_start).toLocaleDateString('en-US', {
                            month: 'short',
                            day: 'numeric'
                          })}{' '}
                          -{' '}
                          {new Date(timesheet.period_end).toLocaleDateString('en-US', {
                            month: 'short',
                            day: 'numeric'
                          })}
                        </span>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="text-sm font-semibold text-gray-900">
                        {timesheet.total_hours}h
                      </span>
                      <div className="text-xs text-gray-500">
                        ${timesheet.contractor_rate}/hr
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="text-sm font-medium text-gray-900">
                        ${timesheet.contractor_amount.toFixed(2)}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="text-sm font-medium text-emerald-600">
                        ${timesheet.client_amount.toFixed(2)}
                      </span>
                      <div className="text-xs text-gray-500">
                        ${timesheet.client_rate}/hr
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="text-sm font-semibold text-emerald-700">
                        ${timesheet.profit.toFixed(2)}
                      </span>
                      <div className="text-xs text-emerald-600">
                        {((timesheet.profit / timesheet.contractor_amount) * 100).toFixed(1)}%
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
}
