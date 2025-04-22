import mongoose from 'mongoose';

export interface IUser {
    email: string;
    fullname: string;
    password: string;
    createdAt: Date;
    updatedAt: Date;
}

const userSchema = new mongoose.Schema({
    fullname: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
    updatedAt: {
        type: Date,
        default: Date.now,
    }
});
const User = mongoose.model('User', userSchema);
export default User;


// export default defineEventHandler(async (event) => {
//     const body = await readBody(event);
//     const user = new User(body);
//     await user.save();
//     return {
//         message: 'User created successfully',
//         user,
//     };
// });
// export default defineEventHandler(async (event) => {
//     const users = await User.find();
//     return {
//         message: 'Users fetched successfully',
//         users,
//     };
//     };
// export default defineEventHandler(async (event) => {
//     const { id } = event.context.params;
//     const user = await User.findById(id);
//     if (!user) {
//         throw createError({
//             statusCode: 404,
//             statusMessage: 'User not found',
//         });
//     }
//     return {
//         message: 'User fetched successfully',
//         user,
//     };
// });
// export default defineEventHandler(async (event) => {
//     const { id } = event.context.params;
//     const body = await readBody(event);
//     const user = await User.findByIdAndUpdate(id, body, {
//         new: true,
//         runValidators: true,
//     });
//     if (!user) {
//         throw createError({
//             statusCode: 404,
//             statusMessage: 'User not found',
//         });
//     }
//     return {
//         message: 'User updated successfully',
//         user,
//     };
// });
// export default defineEventHandler(async (event) => {
//     const { id } = event.context.params;
//     const user = await User.findByIdAndDelete(id);
    // if (!user) {
    //     throw createError({
    //         statusCode: 404,
    //         statusMessage: 'User not found',
    //     });
    // }
    // return {
    //     message: 'User deleted successfully',
    //     user,
    // };
// });
// });
// export default defineEventHandler(async (event) => {
//     const { id } = event.context.params;
//     const user = await User.findById(id);
//     if (!user) {
//         throw createError({
//             statusCode: 404,
//             statusMessage: 'User not found',
//         });
//     }
//     return {
//         message: 'User fetched successfully',
//         user,
//     };
// });
// });
   