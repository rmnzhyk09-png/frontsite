const DEFAULT_BASE_URL = '/api'

class AvantiApiClient {
  constructor(baseURL) {
    this.baseURL = baseURL || DEFAULT_BASE_URL
  }

  async request(path, { method = 'GET', body } = {}) {
    const response = await fetch(`${this.baseURL}${path}`, {
      method,
      headers: body ? { 'Content-Type': 'application/json' } : undefined,
      body: body ? JSON.stringify(body) : undefined,
    })

    if (!response.ok) {
      const message = await this.extractError(response)
      throw new Error(message)
    }

    return response.status === 204 ? null : response.json()
  }

  async extractError(response) {
    try {
      const data = await response.json()
      return data.message || data.error || `Request failed (${response.status})`
    } catch (error) {
      return `Request failed (${response.status})`
    }
  }

  get(path) {
    return this.request(path)
  }

  post(path, body) {
    return this.request(path, { method: 'POST', body })
  }

  patch(path, body) {
    return this.request(path, { method: 'PATCH', body })
  }
}

export const apiClient = new AvantiApiClient(import.meta.env.VITE_API_BASE_URL)