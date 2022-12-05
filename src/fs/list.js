import path from 'path';
import { readdir } from 'fs';

import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const list = async () => {
    const fileList = path.join(__dirname, 'files');
    readdir(fileList, "utf-8", (err, nameList) => {
        if (err) {
            console.error('FS operation failed');
        } else console.log(nameList);
    });

};

await list();