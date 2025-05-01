import { ProductCategories } from "~/server/models/product"

export default defineEventHandler(async (event) => {
    return {
        messages: 'Categories',
        data: ProductCategories,
    }
})