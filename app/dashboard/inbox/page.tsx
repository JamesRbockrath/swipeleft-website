'use client';

import { useEffect, useState } from 'react';
import {
  EnvelopeIcon,
  EnvelopeOpenIcon,
  ClockIcon,
  CheckCircleIcon,
  XCircleIcon,
  ArrowPathIcon,
  PaperClipIcon
} from '@heroicons/react/24/outline';

interface Email {
  id: string;
  subject: string;
  from: string;
  date: string;
  has_attachments: boolean;
  attachment_count: number;
}

interface ProcessingResult {
  success: boolean;
  message: string;
  details?: any;
}

export default function InboxPage() {
  const [emails, setEmails] = useState<Email[]>([]);
  const [loading, setLoading] = useState(true);
  const [processing, setProcessing] = useState<string | null>(null);
  const [error, setError] = useState('');
  const [results, setResults] = useState<Record<string, ProcessingResult>>({});

  const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000';

  useEffect(() => {
    fetchEmails();
  }, []);

  const fetchEmails = async () => {
    try {
      setLoading(true);
      const response = await fetch(`${API_URL}/api/emails/unprocessed`);
      const data = await response.json();

      if (data.success) {
        setEmails(data.emails || []);
        setError('');
      } else {
        setError(data.error || 'Failed to fetch emails');
      }
    } catch (err) {
      setError('Failed to connect to API. Make sure the backend is running.');
      console.error('Fetch error:', err);
    } finally {
      setLoading(false);
    }
  };

  const processEmail = async (emailId: string) => {
    try {
      setProcessing(emailId);
      setResults(prev => ({
        ...prev,
        [emailId]: { success: false, message: 'Processing...' }
      }));

      const response = await fetch(`${API_URL}/api/emails/${emailId}/process`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        }
      });

      const data = await response.json();
      
      setResults(prev => ({
        ...prev,
        [emailId]: {
          success: data.success,
          message: data.message || (data.success ? 'Processed successfully' : 'Processing failed'),
          details: data
        }
      }));

      if (data.success) {
        // Remove processed email from list after a delay
        setTimeout(() => {
          setEmails(prev => prev.filter(e => e.id !== emailId));
        }, 3000);
      }
    } catch (err) {
      setResults(prev => ({
        ...prev,
        [emailId]: {
          success: false,
          message: 'Failed to process email'
        }
      }));
      console.error('Process error:', err);
    } finally {
      setProcessing(null);
    }
  };

  const processAll = async () => {
    for (const email of emails) {
      await processEmail(email.id);
      // Small delay between processing
      await new Promise(resolve => setTimeout(resolve, 1000));
    }
  };

  if (loading) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex items-center justify-center py-12">
          <ClockIcon className="h-8 w-8 text-emerald-500 animate-spin mr-3" />
          <span className="text-gray-600">Loading emails...</span>
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
            <h1 className="text-3xl font-bold text-gray-900">Email Inbox</h1>
            <p className="text-gray-600 mt-2">
              Process timesheet emails and attachments
            </p>
          </div>
          <div className="flex gap-3">
            <button
              onClick={fetchEmails}
              disabled={loading}
              className="px-4 py-2 bg-white border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors flex items-center"
            >
              <ArrowPathIcon className={`h-5 w-5 mr-2 ${loading ? 'animate-spin' : ''}`} />
              Refresh
            </button>
            {emails.length > 0 && (
              <button
                onClick={processAll}
                disabled={processing !== null}
                className="px-4 py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Process All ({emails.length})
              </button>
            )}
          </div>
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

      {/* Empty State */}
      {!loading && emails.length === 0 && !error && (
        <div className="bg-white rounded-lg shadow p-12 text-center border border-gray-200">
          <EnvelopeOpenIcon className="h-16 w-16 text-gray-300 mx-auto mb-4" />
          <h3 className="text-lg font-medium text-gray-900 mb-2">No unprocessed emails</h3>
          <p className="text-gray-600 mb-6">
            All timesheet emails have been processed. Check back later for new submissions.
          </p>
          <button
            onClick={fetchEmails}
            className="px-4 py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors"
          >
            Refresh Inbox
          </button>
        </div>
      )}

      {/* Email List */}
      {emails.length > 0 && (
        <div className="space-y-4">
          {emails.map((email) => {
            const result = results[email.id];
            const isProcessing = processing === email.id;

            return (
              <div
                key={email.id}
                className="bg-white rounded-lg shadow p-6 border border-gray-200 hover:shadow-md transition-shadow"
              >
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center mb-2">
                      <EnvelopeIcon className="h-5 w-5 text-gray-400 mr-2" />
                      <h3 className="text-lg font-semibold text-gray-900">
                        {email.subject}
                      </h3>
                    </div>
                    
                    <div className="space-y-1 text-sm text-gray-600">
                      <p>
                        <span className="font-medium">From:</span> {email.from}
                      </p>
                      <p>
                        <span className="font-medium">Date:</span>{' '}
                        {new Date(email.date).toLocaleString()}
                      </p>
                      {email.has_attachments && (
                        <p className="flex items-center text-emerald-600">
                          <PaperClipIcon className="h-4 w-4 mr-1" />
                          {email.attachment_count} attachment{email.attachment_count !== 1 ? 's' : ''}
                        </p>
                      )}
                    </div>

                    {/* Processing Result */}
                    {result && (
                      <div
                        className={`mt-4 p-3 rounded-lg ${
                          result.success
                            ? 'bg-emerald-50 border border-emerald-200'
                            : 'bg-red-50 border border-red-200'
                        }`}
                      >
                        <div className="flex items-center">
                          {result.success ? (
                            <CheckCircleIcon className="h-5 w-5 text-emerald-600 mr-2" />
                          ) : (
                            <XCircleIcon className="h-5 w-5 text-red-600 mr-2" />
                          )}
                          <span
                            className={`text-sm font-medium ${
                              result.success ? 'text-emerald-800' : 'text-red-800'
                            }`}
                          >
                            {result.message}
                          </span>
                        </div>
                        {result.details?.comparison_result && (
                          <div className="mt-2 text-xs text-gray-700">
                            Status: {result.details.comparison_result}
                            {result.details.discrepancies && (
                              <div className="mt-1 text-red-700">
                                {result.details.discrepancies.length} discrepancy(ies) found
                              </div>
                            )}
                          </div>
                        )}
                      </div>
                    )}
                  </div>

                  <div className="ml-4">
                    <button
                      onClick={() => processEmail(email.id)}
                      disabled={isProcessing || result?.success}
                      className={`px-6 py-2 rounded-lg font-medium transition-colors ${
                        result?.success
                          ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                          : isProcessing
                          ? 'bg-emerald-100 text-emerald-700 cursor-wait'
                          : 'bg-emerald-600 text-white hover:bg-emerald-700'
                      }`}
                    >
                      {result?.success ? (
                        'Processed'
                      ) : isProcessing ? (
                        <span className="flex items-center">
                          <ClockIcon className="h-4 w-4 mr-2 animate-spin" />
                          Processing...
                        </span>
                      ) : (
                        'Process'
                      )}
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
