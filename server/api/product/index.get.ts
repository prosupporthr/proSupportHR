import Product from "~/server/models/product";

export default defineEventHandler(async (event) => {
    const query = getQuery(event);
    const { page, limit } = extractQuery(query);
    const skip = (page - 1) * limit;
    const products = await Product.find({}, { _id: 0, __v: 0 }).limit(limit).skip(skip).exec();
    const total = await Product.countDocuments();

    const modifiedProducts = products.map((item) => ({
        ...item.toJSON(),
        files: Array.isArray(item.files) ? item.files.map(file => `${useRuntimeConfig().HOST}/${file}`) : []
    }))
    return {
        message: 'Product fetched successfully',
        data: modifiedProducts,
        page,
        limit,
        total,
        totalPages: Math.ceil(total / limit),
    };
});