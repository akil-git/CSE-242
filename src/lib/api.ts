const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:5000/api';

export const apiCall = async (endpoint: string, options?: RequestInit) => {
  const url = `${API_BASE_URL}${endpoint}`;
  try {
    const response = await fetch(url, {
      headers: {
        'Content-Type': 'application/json',
        ...options?.headers,
      },
      ...options,
    });

    if (!response.ok) {
      throw new Error(`API Error: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error(`API call failed for ${endpoint}:`, error);
    throw error;
  }
};

// Categories API
export const fetchCategories = async () => {
  return apiCall('/categories');
};

// Products API
export const fetchProducts = async (filters?: {
  categoryId?: string;
  search?: string;
}) => {
  const params = new URLSearchParams();
  if (filters?.categoryId) params.append('categoryId', filters.categoryId);
  if (filters?.search) params.append('search', filters.search);

  const query = params.toString();
  return apiCall(`/products${query ? '?' + query : ''}`);
};

export const fetchProductById = async (id: string) => {
  return apiCall(`/products/${id}`);
};

// Images API
export const fetchImages = async () => {
  return apiCall('/images');
};
