// API Client utility for SwipeLeft Operations Dashboard
// Centralized API configuration and helper functions

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000';

interface ApiResponse<T = any> {
  success: boolean;
  data?: T;
  error?: string;
  message?: string;
}

class ApiClient {
  private baseUrl: string;

  constructor(baseUrl: string = API_BASE_URL) {
    this.baseUrl = baseUrl;
  }

  private async request<T>(
    endpoint: string,
    options: RequestInit = {}
  ): Promise<ApiResponse<T>> {
    try {
      const url = `${this.baseUrl}${endpoint}`;
      const response = await fetch(url, {
        ...options,
        headers: {
          'Content-Type': 'application/json',
          ...options.headers,
        },
      });

      const data = await response.json();

      if (!response.ok) {
        return {
          success: false,
          error: data.error || `Request failed with status ${response.status}`,
        };
      }

      return {
        success: true,
        data: data,
      };
    } catch (error) {
      console.error('API request error:', error);
      return {
        success: false,
        error: error instanceof Error ? error.message : 'Network error',
      };
    }
  }

  // Health Check
  async checkHealth() {
    return this.request('/api/health');
  }

  // Email Operations
  async getUnprocessedEmails(subjectFilter: string = 'timesheet') {
    return this.request(`/api/emails/unprocessed?subject=${encodeURIComponent(subjectFilter)}`);
  }

  async processEmail(emailId: string) {
    return this.request(`/api/emails/${emailId}/process`, {
      method: 'POST',
    });
  }

  // Timesheet Operations
  async getTimesheets(params?: {
    employee?: string;
    project?: string;
    limit?: number;
    offset?: number;
  }) {
    const queryParams = new URLSearchParams();
    if (params?.employee) queryParams.append('employee', params.employee);
    if (params?.project) queryParams.append('project', params.project);
    if (params?.limit) queryParams.append('limit', params.limit.toString());
    if (params?.offset) queryParams.append('offset', params.offset.toString());

    const query = queryParams.toString();
    return this.request(`/api/timesheets${query ? `?${query}` : ''}`);
  }

  async getTimesheetDetails(timesheetId: number) {
    return this.request(`/api/timesheets/${timesheetId}`);
  }

  async getTimesheetEntries(timesheetId: number) {
    return this.request(`/api/timesheets/${timesheetId}/entries`);
  }

  // Comparison Operations
  async getComparisons(params?: {
    timesheetId?: number;
    passed?: boolean;
  }) {
    const queryParams = new URLSearchParams();
    if (params?.timesheetId) queryParams.append('timesheet_id', params.timesheetId.toString());
    if (params?.passed !== undefined) queryParams.append('passed', params.passed.toString());

    const query = queryParams.toString();
    return this.request(`/api/comparisons${query ? `?${query}` : ''}`);
  }

  // Rate Operations
  async getRates(params?: {
    contractor?: string;
    project?: string;
    activeOnly?: boolean;
  }) {
    const queryParams = new URLSearchParams();
    if (params?.contractor) queryParams.append('contractor', params.contractor);
    if (params?.project) queryParams.append('project', params.project);
    if (params?.activeOnly !== undefined) queryParams.append('active_only', params.activeOnly.toString());

    const query = queryParams.toString();
    return this.request(`/api/rates${query ? `?${query}` : ''}`);
  }

  async addRate(data: {
    contractor_name: string;
    project_code: string;
    contractor_rate: number;
    client_rate: number;
  }) {
    return this.request('/api/rates', {
      method: 'POST',
      body: JSON.stringify(data),
    });
  }

  async updateRate(rateId: number, data: {
    contractor_name?: string;
    project_code?: string;
    contractor_rate?: number;
    client_rate?: number;
    active?: boolean;
  }) {
    return this.request(`/api/rates/${rateId}`, {
      method: 'PUT',
      body: JSON.stringify(data),
    });
  }

  async deleteRate(rateId: number) {
    return this.request(`/api/rates/${rateId}`, {
      method: 'DELETE',
    });
  }

  // Invoice Operations
  async generateInvoice(timesheetIds: number[]) {
    return this.request('/api/invoices/generate', {
      method: 'POST',
      body: JSON.stringify({ timesheet_ids: timesheetIds }),
    });
  }

  async validateInvoice(invoiceId: string, timesheetIds: number[]) {
    return this.request(`/api/invoices/${invoiceId}/validate`, {
      method: 'POST',
      body: JSON.stringify({ timesheet_ids: timesheetIds }),
    });
  }

  async getUninvoicedTimesheets(params?: {
    employee?: string;
    project?: string;
  }) {
    const queryParams = new URLSearchParams();
    if (params?.employee) queryParams.append('employee', params.employee);
    if (params?.project) queryParams.append('project', params.project);

    const query = queryParams.toString();
    return this.request(`/api/invoices/uninvoiced${query ? `?${query}` : ''}`);
  }
}

// Export singleton instance
export const apiClient = new ApiClient();

// Export types
export type { ApiResponse };
