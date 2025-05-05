import { z } from 'zod';
import Product, { ProductCategories } from '~/server/models/product';

export default defineEventHandler(async (event) => {
    const { category } = event.context.params || {};
    const decodedCategory = decodeURIComponent(category);
    const body: { picture: string } = await readBody(event);

    const schema = z.object({
        picture: z.string().nonempty('The image is required'),
    });

    const { success, data } = schema.safeParse(body);

    if (!success) {
        throw createError({
            statusCode: 400,
            message: 'The picture is required and can not be empty',
        });
    }

    if (!ProductCategories.includes(decodedCategory)) {
        throw createError({
            statusCode: 400,
            message: `Invalid category - ${decodedCategory}`,
        });
    }

    // updated that picture
    const updated = await Product.updateMany(
        {
            category: decodedCategory,
        },
        {
            picture: body?.picture,
        }
    );

    return {
        message: 'pictures updated',
        data: updated,
    }
});