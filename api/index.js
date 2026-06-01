import { createServer } from 'http';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __dirname = dirname(fileURLToPath(import.meta.url));

let handler;

async function getHandler() {
  if (!handler) {
    const { default: serverModule } = await import(
      join(__dirname, '../dist/server/server.js')
    );
    handler = serverModule;
  }
  return handler;
}

export default async function handler(req, res) {
  try {
    const server = await getHandler();

    // Convert Node.js request to Fetch API Request
    const url = new URL(req.url, `http://${req.headers.host}`);
    const fetchReq = new Request(url, {
      method: req.method,
      headers: req.headers,
      body: req.method !== 'GET' && req.method !== 'HEAD' ? req : undefined,
    });

    const fetchRes = await server.fetch(fetchReq);

    // Convert Fetch API Response to Node.js response
    res.statusCode = fetchRes.status;
    fetchRes.headers.forEach((value, key) => {
      res.setHeader(key, value);
    });

    const body = await fetchRes.text();
    res.end(body);
  } catch (error) {
    console.error('Server error:', error);
    res.statusCode = 500;
    res.end('Internal Server Error');
  }
}
