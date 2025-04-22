import jwt from "jsonwebtoken";
import User, { IUser } from "~/server/models/user";
import { compare } from "bcryptjs";

export default defineEventHandler(async (event) => {
try {
        const body = await readBody(event);
    const { email, password } = body;
    const user = await User.findOne({ email });
    if (!user) {
        throw createError({
            statusCode: 401,
            statusMessage: 'Invalid email or password',
        });
    }
    const isPasswordValid = await compare(password, user.password);
    if (!isPasswordValid) {
        throw createError({
            statusCode: 401,
            statusMessage: 'Invalid email or password',
        });
    }
    const token = jwt.sign({ id: user._id }, useRuntimeConfig().JWT_SECRET, {
        expiresIn: '1h',
    });
    return {
        message: 'Login successful',
        data: {
            token,
            user: {
                email: user.email,
                fullname: user.fullname,
                createdAt: user.createdAt,
                updatedAt: user.updatedAt,
            },
        },
        success: true,
    }
    }catch (error) {
        console.error('Error in user authentication:', error);
        throw createError({
            statusCode: 500,
            statusMessage: 'Internal Server Error',
            data: error,
        });
    }
});