import axios from 'axios'

// Base API URL
const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000'

// Create axios instance
export const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: 10000, // 10 seconds
})

// Response interceptor for error handling
api.interceptors.response.use(
  (response) => response,
  (error) => {
    console.error('API Error:', error.response?.data || error.message)
    return Promise.reject(error)
  }
)

// API endpoints
export const articlesApi = {
  getAll: (skip = 0, limit = 10) => 
    api.get(`/api/articles/?skip=${skip}&limit=${limit}`),
  
  getById: (id: string) => 
    api.get(`/api/articles/${id}`),
  
  getBySlug: (slug: string) => 
    api.get(`/api/articles/slug/${slug}`),
  
  create: (data: any) => 
    api.post('/api/articles/', data),
  
  update: (id: string, data: any) => 
    api.put(`/api/articles/${id}`, data),
  
  delete: (id: string) => 
    api.delete(`/api/articles/${id}`),
}

export const authorsApi = {
  getAll: () => api.get('/api/authors/'),
  getById: (id: string) => api.get(`/api/authors/${id}`),
}

export const categoriesApi = {
  getAll: () => api.get('/api/categories/'),
  getById: (id: string) => api.get(`/api/categories/${id}`),
}

export default api