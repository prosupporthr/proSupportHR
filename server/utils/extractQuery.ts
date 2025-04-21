const extractQuery = (query?: { page?: string, limit?: string}) => {
    const obj: { page: number, limit: number } = {
        page: 1,
        limit: 10,
    };
    obj['page'] = query?.page ? parseInt(query?.page) : 1;
    obj['limit'] = query?.limit ? parseInt(query?.limit) : 10;

    return obj;
}

export default extractQuery;