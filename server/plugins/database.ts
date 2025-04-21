import mongoose from 'mongoose';

export default defineNitroPlugin(async (nitroApp) => {
    mongoose.connect(useRuntimeConfig().MONGO_URI, {

    }).then(() => {
        console.log('MongoDB connected');
    }).catch((err) => {
        console.error('MongoDB connection error:', err);
    });
    nitroApp.hooks.hook('close', () => {
        mongoose.connection.close();
        console.log('MongoDB connection closed');
    });
});