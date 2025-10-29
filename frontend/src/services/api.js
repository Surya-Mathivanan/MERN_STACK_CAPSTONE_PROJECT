const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || '/api';

class ApiService {
  constructor() {
    this.token = localStorage.getItem('auth_token');
  }

  setToken(token) {
    this.token = token;
    if (token) {
      localStorage.setItem('auth_token', token);
    } else {
      localStorage.removeItem('auth_token');
    }
  }

  getToken() {
    return this.token;
  }

  async fetch(url, options = {}) {
    const headers = {
      'Content-Type': 'application/json',
      ...options.headers,
    };

    if (this.token) {
      headers['Authorization'] = `Bearer ${this.token}`;
    }

    const response = await fetch(`${API_BASE_URL}${url}`, {
      ...options,
      headers,
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    return response.json();
  }

  async getCurrentUser() {
    return this.fetch('/user/profile');
  }

  async saveAssessment(assessment) {
    return this.fetch('/user/assessment', {
      method: 'POST',
      body: JSON.stringify(assessment),
    });
  }

  async googleSignIn() {
    // Redirect to backend Google OAuth endpoint
    window.location.href = `${window.location.origin}/auth/google`;
  }

  async logout() {
    try {
      await this.fetch('/auth/logout', { method: 'POST' });
    } finally {
      this.setToken(null);
      window.location.href = '/';
    }
  }
}

export const apiService = new ApiService();
