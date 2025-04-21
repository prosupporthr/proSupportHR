import User, { IUser } from "~/server/models/user";
import { z } from 'zod'
import { hash, genSalt } from 'bcryptjs';


export default defineEventHandler(async (event) => {
    try {
        const payloadValidationSchema = z.object({
            email: z.string().email(),
            password: z.string().min(8),
            fullname: z.string().min(3).max(40),
        });
        
        const body: Partial<IUser> = await readBody(event);
        const { success, error, data } = payloadValidationSchema.safeParse(body);

        // validate body
        if (!success) {
            console.error('Validation error:', error);
            throw createError({
                statusCode: 400,
                statusMessage: 'Validation error',
                data: error,
            });
        }

        // check if email is already in use
        const accountExist = await User.findOne({ email: body.email });
        if (accountExist) {
            throw createError({
                statusCode: 400,
                statusMessage: 'Email already in use',
            });
        }

        // hash the password
        const salt = await genSalt(10);
        const hashedPassword = await hash(body.password as string, salt);

        // create a new user
        const newUser = new User({
            email: body.email?.toLowerCase(),
            fullname: body.fullname?.toLowerCase(),
            password: hashedPassword,
        });
        await newUser.save();
        console.log('User created successfully:', newUser);
        // return success response
        return {
            message: 'User created successfully',
            data: {
                email: newUser.email,
                fullname: newUser.fullname,
                createdAt: newUser.createdAt,
                updatedAt: newUser.updatedAt,
            },
            success: true,
        };
        
    } catch (error) {
        console.error('Error in user authentication:', error);
        throw createError({
            statusCode: 500,
            statusMessage: 'Internal Server Error',
            data: error,
        });
        
    }
});