import { resourceLimits } from "worker_threads";
import User from "~/server/models/user";
import extractQuery from "~/server/utils/extractQuery";

export default defineEventHandler(async (event) => {
    // get the query from the header
    const query = getQuery(event);
    const {page ,limit} = extractQuery(query);

    // get a paginated list of users
    const skip = (page - 1) * limit;
    const users = await User.find({}).limit(limit).skip(skip).exec();
    const total = await User.countDocuments();

    return {
        message: 'User fetched successfully',
        data: users,
        page,
        limit,
        total,
        totalPages: Math.ceil(total / limit),
    }
});