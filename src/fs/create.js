import fs from 'fs';
import path from 'path';

// Костыль для решения ошибки
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

console.log(__dirname);

const create = async () => {
    fs.writeFile(
        path.join(__dirname, 'files', 'fresh.txt'),
        "I am fresh and young",
        (err) => {
            if (err) {
                throw 'FS operation failed';
            }
        }
    );
};

await create();