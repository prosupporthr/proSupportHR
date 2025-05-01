import { z } from 'zod';
import Product, { ProductCategories } from '~/server/models/product';

export default defineEventHandler(async (event) => {

    const body = await readBody(event);

    const productValidationSchema = z.object({
        title: z.string().min(1, 'Title is required'),
        description: z.string().min(1, 'Description is required'),
        price: z.number().min(0, 'Price must be a positive number'),
        picture: z.string().url('Picture must be a valid URL'),
        label: z.string().min(5, 'The label is required'),
        tags: z.array(z.string()),
        tagline: z.string(),
        published: z.boolean().optional(),
        category: z.string().min(1, 'Category is required'),
        files: z.array(z.string()).nonempty('You have to submit atleast one file'),
    });

    const { success, error, data } = productValidationSchema.safeParse(body);
    if (!success) {
        console.error('Validation error:', error);
        throw createError({
            statusCode: 400,
            statusMessage: 'Validation error',
            data: error,
        });
    }
    // validate category
    if (!ProductCategories.includes(body?.category)) {
        throw createError({
            statusCode: 400,
            statusMessage: `Invalid categories ${body?.categories}`,
            data: error,
        });
    }
    // Create a new product
    const newProduct = new Product({
        title: body.title,
        description: body.description,
        price: body.price,
        picture: body?.picture,
        published: body.published || false,
        category: body.category,
        files: body.files,
        label: body.label,
        tagline: body?.tagline,
        tags: body?.tags,
    });
    const newProductsCreated = await newProduct.save();

    return {
        message: 'Product created successfully',
        data: newProductsCreated,
        success: true,
    }
});