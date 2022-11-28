import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const read = async () => {
    fs.readFile(
        path.join(__dirname, 'files', 'fileToRead.txt'),
        (err, data) => {
            if (err) {
                throw 'FS operation failed';
            }
            console.log(Buffer.from(data).toString());
        });
};

await read();