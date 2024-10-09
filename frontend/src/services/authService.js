import api from './api';

const authService = {
  signup: async (userData) => {
    const formData = new FormData();
    for (const key in userData) {
      formData.append(key, userData[key]);
    }
    try {
      const response = await api.post('/auth/signup', formData, {
        headers: { 'Content-Type': 'multipart/form-data' }
      });
      return response.data;
    } catch (error) {
      console.error('Signup error details:', error);
      console.error('Response data:', error.response?.data);
      throw error;
    }
  },

  signin: async (credentials) => {
    const response = await api.post('/auth/signin', credentials);
    if (response.data.token) {
      localStorage.setItem('user', JSON.stringify(response.data));
    }
    return response.data;
  },

  logout: () => {
    localStorage.removeItem('user');
  },

  getCurrentUser: () => {
    return JSON.parse(localStorage.getItem('user'));
  },
};

export default authService;
