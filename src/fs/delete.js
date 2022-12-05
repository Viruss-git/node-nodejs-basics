import fs from 'fs';
import path from 'path';

import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const remove = async () => {
    const filePath = path.join(__dirname, 'files', 'fileToRemove.txt');
    if (fs.existsSync(filePath)) {
        fs.unlink(
            filePath,
            (err) => {
                if (err) throw err
                console.log('File remove');
            });
    } else {
        console.error('FS operation failed');
    };
};

await remove();