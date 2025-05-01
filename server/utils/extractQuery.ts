const extractQuery = (query?: { page?: string, limit?: string, category: string | undefined, price: string | undefined, title: string | undefined }) => {
    const obj: { page: number, limit: number, category: string | undefined, price: number | undefined, title: string | undefined } = {
        page: 1,
        limit: 10,
        category: undefined,
        price: undefined,
        title: undefined,
    };
    obj['page'] = query?.page ? parseInt(query?.page) : 1;
    obj['limit'] = query?.limit ? parseInt(query?.limit) : 10;
    obj['category'] = query?.category ? query?.category : undefined;
    obj['price'] = query?.price ? parseInt(query?.price) : undefined;
    obj['title'] = query?.title ? query?.title : undefined;

    return obj;
}

export default extractQuery;