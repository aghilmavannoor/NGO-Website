import apiClient from './apiClient';
import { galleryData } from '../data/mockData';

const galleryService = {
  /**
   * Fetch all gallery assets (images/videos): GET /api/gallery/
   */
  getAll: async () => {
    try {
      const response = await apiClient.get('/gallery/');
      return response.data;
    } catch (error) {
      console.warn('API error in galleryService.getAll, falling back to mock data:', error.message);
      return galleryData;
    }
  },

  /**
   * Upload asset (Admin): POST /api/gallery/
   */
  upload: async (assetData) => {
    const response = await apiClient.post('/gallery/', assetData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      }
    });
    return response.data;
  },

  /**
   * Delete asset (Admin): DELETE /api/gallery/:id/
   */
  delete: async (id) => {
    const response = await apiClient.delete(`/gallery/${id}/`);
    return response.data;
  }
};

export default galleryService;
