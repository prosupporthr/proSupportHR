// services/product.service.ts
import axios from 'axios'
import type { IProduct } from '~/type/product'

import { ref } from 'vue'

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