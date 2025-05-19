import Product from "~/server/models/product";

export default defineEventHandler(async (event) => {
    const query = getQuery(event);
    console.log(query);
    const { page = 1, limit = 10, category, price, title } = query as any;
    const skip = (Number(page) - 1) * Number(limit);
    // Build the filter object based on provided parameters
    
    const filter: any = {};

    if (category && category !== '') {
        filter.category = category;
    }

    if (title && title !== '') {
        filter.title = { $regex: new RegExp(title as string, 'i') };
    }

    try {
        const products = await Product.find(filter)
            .limit(Number(limit))
            .skip(skip)
            .exec();

        const total = await Product.countDocuments(filter);

        const modifiedProducts = products.map((item) => ({
            ...item.toJSON(),
            picture: `${useRuntimeConfig().HOST}/${decodeURIComponent(item?.picture as string)}`,
            files: Array.isArray(item.files) ? item.files.map(file => `${useRuntimeConfig().HOST}/${decodeURIComponent(file)}`) : []
        }));

        return {
            message: 'Product fetched successfully',
            data: modifiedProducts,
            page: Number(page),
            limit: Number(limit),
            total,
            totalPages: Math.ceil(total / Number(limit)),
        };
    } catch (error) {
        throw createError({
            statusCode: 500,
            message: 'Error fetching products',
            cause: error
        });
    }
});