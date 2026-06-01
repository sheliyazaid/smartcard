export default async function handler(req, res) {
  try {
    // Import the server handler dynamically
    const { default: server } = await import('../dist/server/server.js');

    // Create a Fetch-compatible request
    const url = new URL(req.url, `http://${req.headers.host}`);
    const fetchRequest = new Request(url.toString(), {
      method: req.method,
      headers: new Headers(req.headers),
      body: ['GET', 'HEAD'].includes(req.method) ? null : req,
    });

    // Call the server's fetch handler
    const response = await server.fetch(fetchRequest, {}, {});

    // Send response headers
    res.statusCode = response.status;
    response.headers.forEach((value, key) => {
      res.setHeader(key, value);
    });

    // Send response body
    const body = await response.text();
    res.end(body);
  } catch (error) {
    console.error('Error:', error);
    res.statusCode = 500;
    res.end('Internal Server Error');
  }
}

