import api from './api';

const postService = {
  getAllPosts: async () => {
    const response = await api.get('/blog/');
    return response.data;
  },

  getPost: async (id) => {
    const response = await api.get(`/blog/${id}`);
    return response.data;
  },

  createPost: async (postData) => {
    const response = await api.post('/blog/', postData, {
      headers: { 'Content-Type': 'multipart/form-data' },
    });
    return response.data;
  },

  updatePost: async (id, postData) => {
    const response = await api.put(`/blog/${id}`, postData, {
      headers: { 'Content-Type': 'multipart/form-data' },
    });
    return response.data;
  },

  deletePost: async (id) => {
    const response = await api.delete(`/blog/${id}`);
    return response.data;
  },
};

export default postService;
