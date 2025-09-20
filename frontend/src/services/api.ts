const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:5000';

class ApiService {
  private token: string | null = null;

  setToken(token: string) {
    this.token = token;
    localStorage.setItem('token', token);
  }

  getToken(): string | null {
    return this.token || localStorage.getItem('token');
  }

  private async request(endpoint: string, options: RequestInit = {}): Promise<any> {
    const url = `${API_BASE_URL}${endpoint}`;
    const token = this.getToken();

    const config: RequestInit = {
      headers: {
        'Content-Type': 'application/json',
        ...(token && { Authorization: `Bearer ${token}` }),
        ...options.headers,
      },
      ...options,
    };

    const response = await fetch(url, config);

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    return response.json();
  }

  // Auth methods
  async googleSignIn() {
    window.location.href = `${API_BASE_URL}/auth/google`;
  }

  async getCurrentUser() {
    return this.request('/auth/me');
  }

  async saveAssessment(assessment: any) {
    return this.request('/auth/assessment', {
      method: 'POST',
      body: JSON.stringify(assessment),
    });
  }

  async getAssessment() {
    return this.request('/auth/assessment');
  }

  async getStats() {
    return this.request('/auth/stats');
  }

  async logout() {
    localStorage.removeItem('token');
    return this.request('/auth/logout', { method: 'POST' });
  }

  // Questions methods
  async getQuestions() {
    return this.request('/api/questions');
  }

  async getQuestionsByLevel(level: string) {
    return this.request(`/api/questions/level/${level}`);
  }

  async getQuestion(id: string) {
    return this.request(`/api/questions/${id}`);
  }

  async createQuestion(question: any) {
    return this.request('/api/questions', {
      method: 'POST',
      body: JSON.stringify(question),
    });
  }

  async updateQuestion(id: string, question: any) {
    return this.request(`/api/questions/${id}`, {
      method: 'PUT',
      body: JSON.stringify(question),
    });
  }

  async deleteQuestion(id: string) {
    return this.request(`/api/questions/${id}`, {
      method: 'DELETE',
    });
  }
}

export const apiService = new ApiService();