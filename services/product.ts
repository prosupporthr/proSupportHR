// services/product.service.ts
import axios, { AxiosError, type AxiosResponse } from 'axios'
import type { IProduct } from '~/type/product'

import { ref } from 'vue'


interface ApiResponse<T = any> {
    data?: T;
    error?: string;
    status: number;
}

export function useProducts() {
    const products = ref(<IProduct[]>[])
    const loading = ref(false)
    const error = ref('')

    const fetchProducts = async ({category, price, title} : {category?: string, title?: string, price?: string}) => {
        loading.value = true
        error.value = ''

        try {
            let response: any = await axios.get(`/api/product`, {
                params: {
                    category: category,
                    title: title,
                    price: price
                }
            }) 
            products.value = response?.data?.data

        } catch (err) {
            error.value = 'Failed to load products'
        } finally {
            loading.value = false
        }
    }

    return {
        products,
        loading,
        error,
        fetchProducts
    }
}



export function useProductsById() {
    const singleProduct = ref(<IProduct>{})
    const loading = ref(false)
    const error = ref('')


    const fetchProducts = async (searchTerm: string) => {
        loading.value = true
        error.value = ''

        try {
            let response: any = await axios.get(`/api/product/${searchTerm}`) 
            singleProduct.value = response?.data?.data

        } catch (err) {
            error.value = 'Failed to load products'
        } finally {
            loading.value = false
        }
    }

    return {
        singleProduct,
        loading,
        error,
        fetchProducts
    }
}

export function useCategory() {
    const categories = ref(<any[]>[])
    const loading = ref(false)
    const error = ref('')

    const fetchProducts = async (item?: string) => {
        loading.value = true
        error.value = ''

        try {
            let response: any = await axios.get(`/api/product/categories`) 
            categories.value = response?.data?.data

        } catch (err) {
            error.value = 'Failed to load products'
        } finally {
            loading.value = false
        }
    }

    return {
        categories,
        loading,
        error,
        fetchProducts
    }
}

// API Service methods
export const ApiService = {
    
  async createOrder(postData: any): Promise<ApiResponse<any>> {
    try {
      const response: AxiosResponse<any> = await axios.post('/api/order', postData);
      return {
        data: response.data,
        status: response.status
      };
    } catch (error) {
      const axiosError = error as AxiosError;
      return {
        error: axiosError.message,
        status: axiosError.response?.status || 500
      };
    }
  },

  async createFreeOrder(postData: {
        productId: string
        email: string,
        phone: string
    }): Promise<ApiResponse<any>> {
        try {
        const response: AxiosResponse<any> = await axios.post('/api/order/free', postData);
            return {
                data: response.data,
                status: response.status
            };
        } catch (error) {
            const axiosError = error as AxiosError;
            return {
                error: axiosError.message,
                status: axiosError.response?.status || 500
            };
        }
  },
}