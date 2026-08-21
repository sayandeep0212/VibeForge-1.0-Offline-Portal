import { readFileSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';
import { extractText } from 'unpdf';

const __dirname = dirname(fileURLToPath(import.meta.url));
const filePath = join(__dirname, '..', 'public', 'VibeForge_1.0_Offline_Problem_Statements.pdf');
const buffer = readFileSync(filePath);
const uint8 = new Uint8Array(buffer);

const { totalPages, text } = await extractText(uint8);
console.log(`Total pages: ${totalPages}`);
console.log(text);
