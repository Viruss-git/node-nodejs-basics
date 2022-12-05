import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const read = async () => {
    const filePath = path.join(__dirname, 'files', 'fileToRead.txt');
    if (fs.existsSync(filePath)) {
        fs.readFile(
            filePath,
            (err, data) => {
                if (err) throw err
                console.log(Buffer.from(data).toString());
            });
    } else {
        console.error('FS operation failed');
    };
};

await read();