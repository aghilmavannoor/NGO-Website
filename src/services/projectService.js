import apiClient from './apiClient';
import { projectsData } from '../data/mockData';

const projectService = {
  /**
   * Fetch all projects from Django endpoint: GET /api/projects/
   */
  getAll: async () => {
    try {
      const response = await apiClient.get('/projects/');
      return response.data;
    } catch (error) {
      console.warn('API error in projectService.getAll, falling back to mock data:', error.message);
      return projectsData;
    }
  },

  /**
   * Fetch details of a single project: GET /api/projects/:id/
   */
  getById: async (id) => {
    try {
      const response = await apiClient.get(`/projects/${id}/`);
      return response.data;
    } catch (error) {
      console.warn(`API error in projectService.getById(${id}), falling back to mock data:`, error.message);
      return projectsData.find(p => p.id === Number(id)) || null;
    }
  },

  /**
   * Create a new project (Admin Role): POST /api/projects/
   */
  create: async (projectData) => {
    // Form data would be sent if image upload is required
    const response = await apiClient.post('/projects/', projectData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      }
    });
    return response.data;
  },

  /**
   * Update an existing project (Admin Role): PUT /api/projects/:id/
   */
  update: async (id, projectData) => {
    const response = await apiClient.put(`/projects/${id}/`, projectData);
    return response.data;
  },

  /**
   * Delete a project (Admin Role): DELETE /api/projects/:id/
   */
  delete: async (id) => {
    const response = await apiClient.delete(`/projects/${id}/`);
    return response.data;
  }
};

export default projectService;
