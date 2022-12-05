import fs from 'fs';
import path from 'path';

import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const create = async () => {
    const filePath = path.join(__dirname, 'files', 'fresh.txt');
    if (fs.existsSync(filePath)) {
        console.error("FS operation failed");
    } else {
        fs.writeFile(
            filePath,
            "I am fresh and young",
            (err) => {
                if (err) throw err
                console.error("File create");
            }
        );
    }
};

await create();