import User from "~/server/models/user";

export default defineEventHandler(async (event) => {
    const { id } = event.context.params || {};
    if (!id) {
        throw createError({
            statusCode: 400,
            statusMessage: 'Invalid request: Missing user ID',
        });
    }
    const user = await User.findById(id);
    if (!user) {
        throw createError({
            statusCode: 404,
            statusMessage: 'User not found',
        });
    }
    return {
        message: 'User fetched successfully',
        data: user,
    };
});