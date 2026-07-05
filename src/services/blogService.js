import apiClient from './apiClient';
import { blogData } from '../data/mockData';

const blogService = {
  /**
   * Fetch all blog articles: GET /api/blogs/
   */
  getAll: async () => {
    try {
      const response = await apiClient.get('/blogs/');
      return response.data;
    } catch (error) {
      console.warn('API error in blogService.getAll, falling back to mock data:', error.message);
      return blogData;
    }
  },

  /**
   * Fetch details of a single article: GET /api/blogs/:id/
   */
  getById: async (id) => {
    try {
      const response = await apiClient.get(`/blogs/${id}/`);
      return response.data;
    } catch (error) {
      console.warn(`API error in blogService.getById(${id}), falling back to mock data:`, error.message);
      return blogData.find(post => post.id === Number(id)) || null;
    }
  },

  /**
   * Create an article (Admin): POST /api/blogs/
   */
  create: async (postData) => {
    const response = await apiClient.post('/blogs/', postData);
    return response.data;
  },

  /**
   * Update an article (Admin): PUT /api/blogs/:id/
   */
  update: async (id, postData) => {
    const response = await apiClient.put(`/blogs/${id}/`, postData);
    return response.data;
  },

  /**
   * Delete an article (Admin): DELETE /api/blogs/:id/
   */
  delete: async (id) => {
    const response = await apiClient.delete(`/blogs/${id}/`);
    return response.data;
  }
};

export default blogService;
