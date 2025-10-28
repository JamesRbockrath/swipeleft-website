'use client';

import { useEffect, useState } from 'react';
import {
  CurrencyDollarIcon,
  PlusIcon,
  PencilIcon,
  TrashIcon,
  XMarkIcon,
  CheckIcon,
  UserIcon,
  BriefcaseIcon
} from '@heroicons/react/24/outline';

interface Rate {
  id: number;
  contractor_name: string;
  project_code: string;
  contractor_rate: number;
  client_rate: number;
  markup_percentage: number;
  effective_date: string;
  active: boolean;
}

interface RateFormData {
  contractor_name: string;
  project_code: string;
  contractor_rate: string;
  client_rate: string;
}

export default function RatesPage() {
  const [rates, setRates] = useState<Rate[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [showAddForm, setShowAddForm] = useState(false);
  const [editingId, setEditingId] = useState<number | null>(null);
  const [formData, setFormData] = useState<RateFormData>({
    contractor_name: '',
    project_code: '',
    contractor_rate: '',
    client_rate: ''
  });
  const [saving, setSaving] = useState(false);

  const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000';

  useEffect(() => {
    fetchRates();
  }, []);

  const fetchRates = async () => {
    try {
      setLoading(true);
      const response = await fetch(`${API_URL}/api/rates?active_only=false`);
      const data = await response.json();

      if (data.success) {
        setRates(data.rates || []);
        setError('');
      } else {
        setError(data.error || 'Failed to fetch rates');
      }
    } catch (err) {
      setError('Failed to connect to API');
      console.error('Fetch error:', err);
    } finally {
      setLoading(false);
    }
  };

  const calculateMarkup = (contractorRate: number, clientRate: number): number => {
    if (contractorRate === 0) return 0;
    return ((clientRate - contractorRate) / contractorRate) * 100;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const contractorRate = parseFloat(formData.contractor_rate);
    const clientRate = parseFloat(formData.client_rate);

    if (isNaN(contractorRate) || isNaN(clientRate) || contractorRate <= 0 || clientRate <= 0) {
      setError('Please enter valid positive numbers for rates');
      return;
    }

    if (clientRate < contractorRate) {
      setError('Client rate must be greater than or equal to contractor rate');
      return;
    }

    setSaving(true);
    try {
      const payload = {
        contractor_name: formData.contractor_name.trim(),
        project_code: formData.project_code.trim(),
        contractor_rate: contractorRate,
        client_rate: clientRate
      };

      const url = editingId 
        ? `${API_URL}/api/rates/${editingId}`
        : `${API_URL}/api/rates`;
      
      const method = editingId ? 'PUT' : 'POST';

      const response = await fetch(url, {
        method,
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
      });

      const data = await response.json();

      if (data.success) {
        await fetchRates();
        resetForm();
        setError('');
      } else {
        setError(data.error || 'Failed to save rate');
      }
    } catch (err) {
      setError('Failed to save rate');
      console.error('Save error:', err);
    } finally {
      setSaving(false);
    }
  };

  const handleEdit = (rate: Rate) => {
    setEditingId(rate.id);
    setFormData({
      contractor_name: rate.contractor_name,
      project_code: rate.project_code,
      contractor_rate: rate.contractor_rate.toString(),
      client_rate: rate.client_rate.toString()
    });
    setShowAddForm(true);
  };

  const handleDelete = async (id: number) => {
    if (!confirm('Are you sure you want to delete this rate?')) return;

    try {
      const response = await fetch(`${API_URL}/api/rates/${id}`, {
        method: 'DELETE'
      });

      const data = await response.json();

      if (data.success) {
        await fetchRates();
        setError('');
      } else {
        setError(data.error || 'Failed to delete rate');
      }
    } catch (err) {
      setError('Failed to delete rate');
      console.error('Delete error:', err);
    }
  };

  const resetForm = () => {
    setFormData({
      contractor_name: '',
      project_code: '',
      contractor_rate: '',
      client_rate: ''
    });
    setShowAddForm(false);
    setEditingId(null);
  };

  const previewMarkup = formData.contractor_rate && formData.client_rate
    ? calculateMarkup(parseFloat(formData.contractor_rate), parseFloat(formData.client_rate))
    : 0;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Rate Management</h1>
            <p className="text-gray-600 mt-2">
              Manage contractor rates and client billing rates
            </p>
          </div>
          {!showAddForm && (
            <button
              onClick={() => setShowAddForm(true)}
              className="px-4 py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors flex items-center"
            >
              <PlusIcon className="h-5 w-5 mr-2" />
              Add Rate
            </button>
          )}
        </div>
      </div>

      {/* Error Alert */}
      {error && (
        <div className="mb-6 bg-red-50 border border-red-200 rounded-lg p-4">
          <div className="flex items-center justify-between">
            <p className="text-sm text-red-700">{error}</p>
            <button onClick={() => setError('')} className="text-red-400 hover:text-red-600">
              <XMarkIcon className="h-5 w-5" />
            </button>
          </div>
        </div>
      )}

      {/* Add/Edit Form */}
      {showAddForm && (
        <div className="bg-white rounded-lg shadow p-6 mb-6 border border-gray-200">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-semibold text-gray-900">
              {editingId ? 'Edit Rate' : 'Add New Rate'}
            </h2>
            <button
              onClick={resetForm}
              className="text-gray-400 hover:text-gray-600"
            >
              <XMarkIcon className="h-6 w-6" />
            </button>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Contractor Name
                </label>
                <input
                  type="text"
                  required
                  value={formData.contractor_name}
                  onChange={(e) => setFormData({...formData, contractor_name: e.target.value})}
                  placeholder="John Doe"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Project Code
                </label>
                <input
                  type="text"
                  required
                  value={formData.project_code}
                  onChange={(e) => setFormData({...formData, project_code: e.target.value})}
                  placeholder="PROJ-001"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Contractor Rate ($/hr)
                </label>
                <input
                  type="number"
                  step="0.01"
                  required
                  value={formData.contractor_rate}
                  onChange={(e) => setFormData({...formData, contractor_rate: e.target.value})}
                  placeholder="120.00"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Client Rate ($/hr)
                </label>
                <input
                  type="number"
                  step="0.01"
                  required
                  value={formData.client_rate}
                  onChange={(e) => setFormData({...formData, client_rate: e.target.value})}
                  placeholder="150.00"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                />
              </div>
            </div>

            {/* Markup Preview */}
            {previewMarkup > 0 && (
              <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-emerald-900">
                    Markup Percentage:
                  </span>
                  <span className="text-lg font-bold text-emerald-700">
                    {previewMarkup.toFixed(2)}%
                  </span>
                </div>
                <div className="mt-2 text-xs text-emerald-700">
                  Profit per hour: ${(parseFloat(formData.client_rate) - parseFloat(formData.contractor_rate)).toFixed(2)}
                </div>
              </div>
            )}

            <div className="flex gap-3 justify-end">
              <button
                type="button"
                onClick={resetForm}
                className="px-4 py-2 bg-white border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
              >
                Cancel
              </button>
              <button
                type="submit"
                disabled={saving}
                className="px-6 py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center"
              >
                {saving ? (
                  <>
                    <div className="h-4 w-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
                    Saving...
                  </>
                ) : (
                  <>
                    <CheckIcon className="h-5 w-5 mr-2" />
                    {editingId ? 'Update Rate' : 'Add Rate'}
                  </>
                )}
              </button>
            </div>
          </form>
        </div>
      )}

      {/* Rates List */}
      {loading ? (
        <div className="flex items-center justify-center py-12">
          <div className="h-8 w-8 border-4 border-emerald-500 border-t-transparent rounded-full animate-spin mr-3" />
          <span className="text-gray-600">Loading rates...</span>
        </div>
      ) : rates.length === 0 ? (
        <div className="bg-white rounded-lg shadow p-12 text-center border border-gray-200">
          <CurrencyDollarIcon className="h-16 w-16 text-gray-300 mx-auto mb-4" />
          <h3 className="text-lg font-medium text-gray-900 mb-2">No rates configured</h3>
          <p className="text-gray-600 mb-6">
            Add contractor and client rates to start managing your billing
          </p>
          <button
            onClick={() => setShowAddForm(true)}
            className="px-4 py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors"
          >
            Add First Rate
          </button>
        </div>
      ) : (
        <div className="bg-white rounded-lg shadow border border-gray-200 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Contractor
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Project
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Contractor Rate
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Client Rate
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Markup
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Status
                  </th>
                  <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {rates.map((rate) => (
                  <tr key={rate.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <UserIcon className="h-5 w-5 text-gray-400 mr-2" />
                        <span className="text-sm font-medium text-gray-900">
                          {rate.contractor_name}
                        </span>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <BriefcaseIcon className="h-5 w-5 text-gray-400 mr-2" />
                        <span className="text-sm text-gray-600">{rate.project_code}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="text-sm font-medium text-gray-900">
                        ${rate.contractor_rate.toFixed(2)}/hr
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="text-sm font-medium text-emerald-600">
                        ${rate.client_rate.toFixed(2)}/hr
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="text-sm font-semibold text-emerald-700">
                        {rate.markup_percentage.toFixed(1)}%
                      </span>
                      <div className="text-xs text-gray-500">
                        ${(rate.client_rate - rate.contractor_rate).toFixed(2)}/hr
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span
                        className={`px-2 py-1 text-xs font-medium rounded-full ${
                          rate.active
                            ? 'bg-emerald-100 text-emerald-800'
                            : 'bg-gray-100 text-gray-800'
                        }`}
                      >
                        {rate.active ? 'Active' : 'Inactive'}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      <button
                        onClick={() => handleEdit(rate)}
                        className="text-emerald-600 hover:text-emerald-900 mr-4"
                      >
                        <PencilIcon className="h-5 w-5" />
                      </button>
                      <button
                        onClick={() => handleDelete(rate.id)}
                        className="text-red-600 hover:text-red-900"
                      >
                        <TrashIcon className="h-5 w-5" />
                      </button>
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
