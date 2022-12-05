import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const rename = async () => {
    const fileName = path.join(__dirname, 'files', 'wrongFilename.txt');
    const fileNewName = path.join(__dirname, 'files', 'properFilename.md');
    if (!fs.existsSync(fileName) || fs.existsSync(fileNewName)) {
        console.error('FS operation failed');
    } else {
        fs.rename(
            fileName,
            fileNewName,
            err => {
                if (err) throw err
                console.log('File rename');
            });
    };
};

await rename();