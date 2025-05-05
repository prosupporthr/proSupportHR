import Product from "~/server/models/product";

export default defineEventHandler(async (event) => {
    const { id } = event.context.params || {};
    if (!id) {
        throw createError({
            statusCode: 400,
            statusMessage: 'Product ID is required',
        });
    }
    const product = await Product.findById(id).exec();
    if (!product) {
        throw createError({
            statusCode: 404,
            statusMessage: 'Product not found',
        });
    }
    return {
        message: 'Product fetched successfully',
        data: {
            ...product.toJSON(),
            files: Array.isArray(product.files) ? product.files.map(file => `${useRuntimeConfig().HOST}/${file}`) : [],
            picture: `${useRuntimeConfig().HOST}/${product?.picture}`,
        },
    };
});