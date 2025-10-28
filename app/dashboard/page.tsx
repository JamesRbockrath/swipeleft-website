'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { 
  EnvelopeIcon, 
  DocumentTextIcon, 
  CurrencyDollarIcon, 
  DocumentCheckIcon,
  ClockIcon,
  CheckCircleIcon,
  ExclamationCircleIcon
} from '@heroicons/react/24/outline';

interface DashboardStats {
  unprocessedEmails: number;
  pendingTimesheets: number;
  approvedTimesheets: number;
  uninvoicedTimesheets: number;
  lastProcessed?: string;
}

export default function DashboardPage() {
  const [stats, setStats] = useState<DashboardStats>({
    unprocessedEmails: 0,
    pendingTimesheets: 0,
    approvedTimesheets: 0,
    uninvoicedTimesheets: 0
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000';

  useEffect(() => {
    fetchDashboardStats();
  }, []);

  const fetchDashboardStats = async () => {
    try {
      setLoading(true);
      
      // Fetch data from all endpoints
      const [emailsRes, timesheetsRes, uninvoicedRes] = await Promise.all([
        fetch(`${API_URL}/api/emails/unprocessed`),
        fetch(`${API_URL}/api/timesheets?limit=100`),
        fetch(`${API_URL}/api/invoices/uninvoiced`)
      ]);

      const emailsData = await emailsRes.json();
      const timesheetsData = await timesheetsRes.json();
      const uninvoicedData = await uninvoicedRes.json();

      // Calculate stats
      const pending = timesheetsData.timesheets?.filter((t: any) => 
        t.comparison_result === 'pending' || t.comparison_result === 'failed'
      ).length || 0;

      const approved = timesheetsData.timesheets?.filter((t: any) => 
        t.comparison_result === 'passed'
      ).length || 0;

      setStats({
        unprocessedEmails: emailsData.count || 0,
        pendingTimesheets: pending,
        approvedTimesheets: approved,
        uninvoicedTimesheets: uninvoicedData.count || 0,
        lastProcessed: timesheetsData.timesheets?.[0]?.processed_at
      });
      
      setError('');
    } catch (err) {
      setError('Failed to load dashboard data. Make sure the API is running.');
      console.error('Dashboard error:', err);
    } finally {
      setLoading(false);
    }
  };

  const statCards = [
    {
      title: 'Unprocessed Emails',
      value: stats.unprocessedEmails,
      icon: EnvelopeIcon,
      color: 'bg-blue-500',
      link: '/dashboard/inbox',
      description: 'New timesheet emails to process'
    },
    {
      title: 'Pending Timesheets',
      value: stats.pendingTimesheets,
      icon: ExclamationCircleIcon,
      color: 'bg-yellow-500',
      link: '/dashboard/timesheets?status=pending',
      description: 'Timesheets needing review'
    },
    {
      title: 'Approved Timesheets',
      value: stats.approvedTimesheets,
      icon: CheckCircleIcon,
      color: 'bg-emerald-500',
      link: '/dashboard/timesheets?status=approved',
      description: 'Ready for invoicing'
    },
    {
      title: 'Uninvoiced Work',
      value: stats.uninvoicedTimesheets,
      icon: DocumentCheckIcon,
      color: 'bg-purple-500',
      link: '/dashboard/invoices',
      description: 'Approved work not yet invoiced'
    }
  ];

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <ClockIcon className="h-12 w-12 text-emerald-500 animate-spin mx-auto mb-4" />
          <p className="text-gray-600">Loading dashboard...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Operations Dashboard</h1>
        <p className="text-gray-600 mt-2">
          Automated timesheet processing and invoice management
        </p>
        {stats.lastProcessed && (
          <p className="text-sm text-gray-500 mt-1">
            Last processed: {new Date(stats.lastProcessed).toLocaleString()}
          </p>
        )}
      </div>

      {/* Error Alert */}
      {error && (
        <div className="mb-6 bg-red-50 border border-red-200 rounded-lg p-4">
          <div className="flex">
            <ExclamationCircleIcon className="h-5 w-5 text-red-400 mr-2" />
            <div>
              <h3 className="text-sm font-medium text-red-800">Connection Error</h3>
              <p className="text-sm text-red-700 mt-1">{error}</p>
              <button
                onClick={fetchDashboardStats}
                className="mt-2 text-sm text-red-600 hover:text-red-800 underline"
              >
                Try again
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {statCards.map((card) => (
          <Link
            key={card.title}
            href={card.link}
            className="bg-white rounded-lg shadow hover:shadow-lg transition-shadow p-6 border border-gray-200"
          >
            <div className="flex items-center justify-between mb-4">
              <div className={`${card.color} rounded-lg p-3`}>
                <card.icon className="h-6 w-6 text-white" />
              </div>
              <span className="text-3xl font-bold text-gray-900">{card.value}</span>
            </div>
            <h3 className="text-sm font-medium text-gray-600 mb-1">{card.title}</h3>
            <p className="text-xs text-gray-500">{card.description}</p>
          </Link>
        ))}
      </div>

      {/* Quick Actions */}
      <div className="bg-white rounded-lg shadow p-6 border border-gray-200 mb-8">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">Quick Actions</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <Link
            href="/dashboard/inbox"
            className="flex items-center p-4 bg-emerald-50 hover:bg-emerald-100 rounded-lg transition-colors"
          >
            <EnvelopeIcon className="h-8 w-8 text-emerald-600 mr-3" />
            <div>
              <div className="font-medium text-gray-900">Process Emails</div>
              <div className="text-sm text-gray-600">Review new timesheets</div>
            </div>
          </Link>

          <Link
            href="/dashboard/timesheets"
            className="flex items-center p-4 bg-blue-50 hover:bg-blue-100 rounded-lg transition-colors"
          >
            <DocumentTextIcon className="h-8 w-8 text-blue-600 mr-3" />
            <div>
              <div className="font-medium text-gray-900">View Timesheets</div>
              <div className="text-sm text-gray-600">Browse all timesheets</div>
            </div>
          </Link>

          <Link
            href="/dashboard/rates"
            className="flex items-center p-4 bg-purple-50 hover:bg-purple-100 rounded-lg transition-colors"
          >
            <CurrencyDollarIcon className="h-8 w-8 text-purple-600 mr-3" />
            <div>
              <div className="font-medium text-gray-900">Manage Rates</div>
              <div className="text-sm text-gray-600">Update contractor rates</div>
            </div>
          </Link>

          <Link
            href="/dashboard/invoices"
            className="flex items-center p-4 bg-yellow-50 hover:bg-yellow-100 rounded-lg transition-colors"
          >
            <DocumentCheckIcon className="h-8 w-8 text-yellow-600 mr-3" />
            <div>
              <div className="font-medium text-gray-900">Generate Invoice</div>
              <div className="text-sm text-gray-600">Create client invoices</div>
            </div>
          </Link>
        </div>
      </div>

      {/* Recent Activity */}
      <div className="bg-white rounded-lg shadow p-6 border border-gray-200">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">System Status</h2>
        <div className="space-y-3">
          <div className="flex items-center justify-between p-3 bg-gray-50 rounded">
            <span className="text-sm text-gray-700">API Connection</span>
            <span className={`px-3 py-1 rounded-full text-xs font-medium ${
              error ? 'bg-red-100 text-red-800' : 'bg-emerald-100 text-emerald-800'
            }`}>
              {error ? 'Disconnected' : 'Connected'}
            </span>
          </div>
          <div className="flex items-center justify-between p-3 bg-gray-50 rounded">
            <span className="text-sm text-gray-700">Total Active Timesheets</span>
            <span className="text-sm font-semibold text-gray-900">
              {stats.approvedTimesheets + stats.pendingTimesheets}
            </span>
          </div>
          <div className="flex items-center justify-between p-3 bg-gray-50 rounded">
            <span className="text-sm text-gray-700">Pending Actions</span>
            <span className="text-sm font-semibold text-gray-900">
              {stats.unprocessedEmails + stats.pendingTimesheets}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
