import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const publicDir = path.join(__dirname, '../dist/client');

export default function handler(req, res) {
  // Try to serve a file
  let filePath = path.join(publicDir, req.url === '/' ? 'index.html' : req.url);

  // If it's a directory or doesn't exist, try index.html (for SPA routing)
  if (!fs.existsSync(filePath) || fs.statSync(filePath).isDirectory()) {
    filePath = path.join(publicDir, 'index.html');
  }

  if (fs.existsSync(filePath)) {
    const content = fs.readFileSync(filePath);
    const ext = path.extname(filePath);
    const mimeTypes = {
      '.html': 'text/html',
      '.js': 'application/javascript',
      '.css': 'text/css',
      '.json': 'application/json',
      '.png': 'image/png',
      '.jpg': 'image/jpeg',
      '.gif': 'image/gif',
      '.svg': 'image/svg+xml',
    };
    res.setHeader('Content-Type', mimeTypes[ext] || 'application/octet-stream');
    res.end(content);
  } else {
    res.statusCode = 404;
    res.end('Not found');
  }
}
