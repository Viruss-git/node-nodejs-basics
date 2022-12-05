import { readdir, mkdir, copyFile } from 'fs';
import path from 'path';
import { join } from 'path';

import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const copy = async () => {
    const dirCreate = path.join(__dirname);
    const dirPath = path.join(__dirname, 'files');
    readdir(dirPath, "utf-8", (err, request) => {
        if (err) throw err;
        const files = request;
        mkdir(join(dirCreate, 'files_copy'), (err) => {
            if (err) return console.error("FS operation failed");
            files.forEach((item) => {
                copyFile(join(dirPath, item), join(dirCreate, 'files_copy', item), (err) => {
                    if (err) console.error(err);
                    console.log(`File ${item} copyed`);
                });

            });
        });
    });
};

copy();