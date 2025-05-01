import { ServerFile } from "nuxt-file-storage";
import path from 'path'
import fs from 'fs';

export default defineEventHandler(async (event) => {
    const files = await readMultipartFormData(event);
    console.log(files);
    const names = [];
    for (const file of (files as any[])) {
        const filePath = path.join(process.cwd(), 'public', 'uploads', file.filename as string);
        fs.writeFileSync(filePath, file.data);
        names.push(`${file.filename}`);
    }

    return {
        message: 'upload successful',
        data: names,
    }

})