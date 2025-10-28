'use client';

import { useEffect, useState, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import {
  DocumentTextIcon,
  ClockIcon,
  CheckCircleIcon,
  XCircleIcon,
  ExclamationCircleIcon,
  MagnifyingGlassIcon,
  FunnelIcon,
  CalendarIcon,
  UserIcon,
  BriefcaseIcon,
  ChevronDownIcon,
  ChevronUpIcon
} from '@heroicons/react/24/outline';

interface Timesheet {
  id: number;
  employee_name: string;
  project_code: string;
  period_start: string;
  period_end: string;
  total_hours: number;
  comparison_result: string;
  processed_at: string;
  file_path?: string;
}

interface TimesheetEntry {
  date: string;
  hours: number;
  project_code: string;
  notes?: string;
}

function TimesheetsPage() {
  const searchParams = useSearchParams();
  const statusFilter = searchParams?.get('status');

  const [timesheets, setTimesheets] = useState<Timesheet[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState(statusFilter || 'all');
  const [expandedId, setExpandedId] = useState<number | null>(null);
  const [timesheetDetails, setTimesheetDetails] = useState<Record<number, TimesheetEntry[]>>({});

  const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000';

  useEffect(() => {
    fetchTimesheets();
  }, []);

  const fetchTimesheets = async () => {
    try {
      setLoading(true);
      const response = await fetch(`${API_URL}/api/timesheets?limit=100`);
      const data = await response.json();

      if (data.success) {
        setTimesheets(data.timesheets || []);
        setError('');
      } else {
        setError(data.error || 'Failed to fetch timesheets');
      }
    } catch (err) {
      setError('Failed to connect to API');
      console.error('Fetch error:', err);
    } finally {
      setLoading(false);
    }
  };

  const fetchTimesheetDetails = async (timesheetId: number) => {
    try {
      const response = await fetch(`${API_URL}/api/timesheets/${timesheetId}/entries`);
      const data = await response.json();

      if (data.success) {
        setTimesheetDetails(prev => ({
          ...prev,
          [timesheetId]: data.entries || []
        }));
      }
    } catch (err) {
      console.error('Failed to fetch timesheet details:', err);
    }
  };

  const toggleExpand = (timesheetId: number) => {
    if (expandedId === timesheetId) {
      setExpandedId(null);
    } else {
      setExpandedId(timesheetId);
      if (!timesheetDetails[timesheetId]) {
        fetchTimesheetDetails(timesheetId);
      }
    }
  };

  const getStatusBadge = (status: string) => {
    switch (status.toLowerCase()) {
      case 'passed':
        return {
          icon: CheckCircleIcon,
          text: 'Approved',
          className: 'bg-emerald-100 text-emerald-800'
        };
      case 'failed':
        return {
          icon: XCircleIcon,
          text: 'Failed',
          className: 'bg-red-100 text-red-800'
        };
      case 'pending':
        return {
          icon: ExclamationCircleIcon,
          text: 'Pending',
          className: 'bg-yellow-100 text-yellow-800'
        };
      default:
        return {
          icon: ClockIcon,
          text: status,
          className: 'bg-gray-100 text-gray-800'
        };
    }
  };

  // Filter timesheets
  const filteredTimesheets = timesheets.filter(timesheet => {
    const matchesSearch =
      searchTerm === '' ||
      timesheet.employee_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      timesheet.project_code.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesStatus =
      filterStatus === 'all' ||
      (filterStatus === 'approved' && timesheet.comparison_result === 'passed') ||
      (filterStatus === 'pending' && 
        (timesheet.comparison_result === 'pending' || timesheet.comparison_result === 'failed'));

    return matchesSearch && matchesStatus;
  });

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
        <h1 className="text-3xl font-bold text-gray-900">Timesheets</h1>
        <p className="text-gray-600 mt-2">View and manage all submitted timesheets</p>
      </div>

      {/* Filters and Search */}
      <div className="bg-white rounded-lg shadow p-4 mb-6 border border-gray-200">
        <div className="flex flex-col md:flex-row gap-4">
          {/* Search */}
          <div className="flex-1 relative">
            <MagnifyingGlassIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search by employee or project..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
            />
          </div>

          {/* Status Filter */}
          <div className="flex items-center gap-2">
            <FunnelIcon className="h-5 w-5 text-gray-400" />
            <select
              value={filterStatus}
              onChange={(e) => setFilterStatus(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
            >
              <option value="all">All Status</option>
              <option value="approved">Approved</option>
              <option value="pending">Pending/Failed</option>
            </select>
          </div>
        </div>

        {/* Stats */}
        <div className="mt-4 flex gap-4 text-sm text-gray-600">
          <span>
            Total: <strong className="text-gray-900">{filteredTimesheets.length}</strong>
          </span>
          <span>
            Approved:{' '}
            <strong className="text-emerald-600">
              {timesheets.filter(t => t.comparison_result === 'passed').length}
            </strong>
          </span>
          <span>
            Pending:{' '}
            <strong className="text-yellow-600">
              {timesheets.filter(t => 
                t.comparison_result === 'pending' || t.comparison_result === 'failed'
              ).length}
            </strong>
          </span>
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

      {/* Timesheets List */}
      <div className="space-y-4">
        {filteredTimesheets.length === 0 ? (
          <div className="bg-white rounded-lg shadow p-12 text-center border border-gray-200">
            <DocumentTextIcon className="h-16 w-16 text-gray-300 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-gray-900 mb-2">No timesheets found</h3>
            <p className="text-gray-600">
              {searchTerm || filterStatus !== 'all'
                ? 'Try adjusting your filters'
                : 'No timesheets have been processed yet'}
            </p>
          </div>
        ) : (
          filteredTimesheets.map((timesheet) => {
            const statusBadge = getStatusBadge(timesheet.comparison_result);
            const isExpanded = expandedId === timesheet.id;
            const entries = timesheetDetails[timesheet.id];

            return (
              <div
                key={timesheet.id}
                className="bg-white rounded-lg shadow border border-gray-200 overflow-hidden"
              >
                {/* Main Content */}
                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="text-lg font-semibold text-gray-900">
                          {timesheet.employee_name}
                        </h3>
                        <div
                          className={`flex items-center gap-1 px-3 py-1 rounded-full text-xs font-medium ${statusBadge.className}`}
                        >
                          <statusBadge.icon className="h-4 w-4" />
                          {statusBadge.text}
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                        <div className="flex items-center text-gray-600">
                          <BriefcaseIcon className="h-4 w-4 mr-2" />
                          <span>Project: {timesheet.project_code}</span>
                        </div>
                        <div className="flex items-center text-gray-600">
                          <CalendarIcon className="h-4 w-4 mr-2" />
                          <span>
                            {new Date(timesheet.period_start).toLocaleDateString()} -{' '}
                            {new Date(timesheet.period_end).toLocaleDateString()}
                          </span>
                        </div>
                        <div className="flex items-center text-gray-600">
                          <ClockIcon className="h-4 w-4 mr-2" />
                          <span className="font-semibold text-gray-900">
                            {timesheet.total_hours} hours
                          </span>
                        </div>
                      </div>

                      <p className="text-xs text-gray-500 mt-2">
                        Processed: {new Date(timesheet.processed_at).toLocaleString()}
                      </p>
                    </div>

                    <button
                      onClick={() => toggleExpand(timesheet.id)}
                      className="ml-4 p-2 text-gray-400 hover:text-gray-600 transition-colors"
                    >
                      {isExpanded ? (
                        <ChevronUpIcon className="h-6 w-6" />
                      ) : (
                        <ChevronDownIcon className="h-6 w-6" />
                      )}
                    </button>
                  </div>
                </div>

                {/* Expanded Details */}
                {isExpanded && (
                  <div className="border-t border-gray-200 bg-gray-50 p-6">
                    <h4 className="text-sm font-semibold text-gray-900 mb-3">Daily Breakdown</h4>
                    {entries ? (
                      <div className="space-y-2">
                        {entries.map((entry, index) => (
                          <div
                            key={index}
                            className="flex items-center justify-between p-3 bg-white rounded border border-gray-200"
                          >
                            <div className="flex items-center gap-4">
                              <CalendarIcon className="h-4 w-4 text-gray-400" />
                              <span className="text-sm font-medium text-gray-900">
                                {new Date(entry.date).toLocaleDateString('en-US', {
                                  weekday: 'short',
                                  month: 'short',
                                  day: 'numeric'
                                })}
                              </span>
                              {entry.notes && (
                                <span className="text-xs text-gray-500">{entry.notes}</span>
                              )}
                            </div>
                            <span className="text-sm font-semibold text-gray-900">
                              {entry.hours}h
                            </span>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <div className="flex items-center justify-center py-8">
                        <ClockIcon className="h-5 w-5 text-gray-400 animate-spin mr-2" />
                        <span className="text-sm text-gray-600">Loading details...</span>
                      </div>
                    )}
                  </div>
                )}
              </div>
            );
          })
        )}
      </div>
    </div>
  );
}
export default function TimesheetsPageWrapper() {
  return (
    <Suspense fallback={<div className="p-8">Loading...</div>}>
      <TimesheetsPage />
    </Suspense>
  );
}
