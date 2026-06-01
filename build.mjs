import fs from 'fs';
import path from 'path';

const indexHtml = fs.readFileSync('index.html', 'utf-8');
fs.writeFileSync(path.join('dist/client', 'index.html'), indexHtml);
console.log('Copied index.html to dist/client/');
