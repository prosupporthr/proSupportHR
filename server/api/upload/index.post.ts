import { ServerFile } from "nuxt-file-storage";
import path from 'path'
import fs from 'fs';

export default defineEventHandler(async (event) => {
    const files = await readMultipartFormData(event);
    console.log(files);
    const names = [];
    for ( const file of (files as any[]) ) {
        const filePath = path.join(process.cwd(), 'public', 'uploads', file.filename as string);
        fs.writeFileSync(filePath, file.data);
        names.push(`${useRuntimeConfig().HOST}/${file.filename}`);
    }

    return {
        message: 'upload successful',
        data: names,
    }

    // Deleting Files
    // await deleteFile('requiredFile.txt', '/userFiles')

    // // Get file path
    // await getFileLocally('requiredFile.txt', '/userFiles')
    // // returns: {AbsolutePath}/userFiles/requiredFile.txt

    // // Get all files in a folder
    // await getFilesLocally('/userFiles')
})