import Product from "~/server/models/product";

export default defineEventHandler(async (event) => {
    const query = getQuery(event);
    const { page, limit } = extractQuery(query);
    const skip = (page - 1) * limit;
    const products = await Product.find({}).limit(limit).skip(skip).exec();
    const total = await Product.countDocuments();
    return {
        message: 'Product fetched successfully',
        data: products,
        page,
        limit,
        total,
        totalPages: Math.ceil(total / limit),
    };
});