import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const publicDir = path.join(__dirname, '../dist/client');

export default async function handler(req, res) {
  console.log('Request:', req.method, req.url);

  try {
    // Check if it's a static file request
    const filePath = path.join(publicDir, req.url);
    console.log('Checking file:', filePath);

    if (fs.existsSync(filePath) && fs.statSync(filePath).isFile()) {
      console.log('Serving static file');
      const content = fs.readFileSync(filePath);
      const ext = path.extname(filePath);
      const mimeTypes = {
        '.html': 'text/html; charset=utf-8',
        '.js': 'application/javascript',
        '.css': 'text/css',
        '.json': 'application/json',
        '.png': 'image/png',
        '.jpg': 'image/jpeg',
        '.jpeg': 'image/jpeg',
        '.gif': 'image/gif',
        '.svg': 'image/svg+xml',
        '.ico': 'image/x-icon',
      };
      res.setHeader('Content-Type', mimeTypes[ext] || 'application/octet-stream');
      res.end(content);
      return;
    }

    console.log('Handling as SSR');
    // Otherwise, handle as SSR
    const { default: server } = await import('../dist/server/server.js');

    const url = new URL(req.url, `http://${req.headers.host}`);
    const fetchReq = new Request(url, {
      method: req.method,
      headers: req.headers,
      body: ['GET', 'HEAD'].includes(req.method) ? null : req,
    });

    console.log('Calling server.fetch');
    const response = await server.fetch(fetchReq);

    res.statusCode = response.status;
    response.headers.forEach((value, key) => {
      res.setHeader(key, value);
    });

    const body = await response.text();
    res.end(body);
  } catch (error) {
    console.error('Error:', error);
    res.statusCode = 500;
    res.end('Internal Server Error: ' + error.message);
  }
}



