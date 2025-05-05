import Product from "~/server/models/product";

export default defineEventHandler(async (event) => {
    const query = getQuery(event);
    console.log(query);
    const { page, limit, category, price, title } = extractQuery(query as any);
    console.log(price);
    const skip = (page - 1) * limit;

    if (category && !price && !title) {
        const products = await Product.find({ $and: [{ category: { $eq: category } }] }, { __v: 0 }).limit(limit).skip(skip).exec();
        const total = await Product.countDocuments({ $and: [{ category: { $eq: category } }] });

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
    }

    if (!category && price && !title) {
        const products = await Product.find({ $and: [{ price: { $eq: price } }] }, { _v: 0 }).limit(limit).skip(skip).exec();
        const total = await Product.countDocuments({ price: { $eq: price } });

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
    }

    if (!category && !price && title) {
        const regex = new RegExp(title, 'i'); // 'i' for case-insensitive matching
        const products = await Product.find({ $and: [{ title: { $regex: regex } }] }, { __v: 0 }).limit(limit).skip(skip).exec();
        const total = await Product.countDocuments({ $and: [{ title: { $regex: regex } }] });

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
    }

    const regex = new RegExp(title as string, 'i'); // 'i' for case-insensitive matching
    const products = await Product.find({ $or: [{ category }, { price }, { title: { $regex: regex } }] }, { __v: 0 }).limit(limit).skip(skip).exec();
    const total = await Product.countDocuments({ $or: [{ category }, { price }, { title: { $regex: regex } }] });

    const modifiedProducts = products.map((item) => ({
        ...item.toJSON(),
        picture: `${useRuntimeConfig().HOST}/${item?.picture}`,
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