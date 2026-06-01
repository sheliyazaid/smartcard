export default async function handler(req, res) {
  try {
    const { default: server } = await import('../dist/server/server.js');

    const url = new URL(req.url, `http://${req.headers.host}`);
    const fetchReq = new Request(url, {
      method: req.method,
      headers: req.headers,
      body: ['GET', 'HEAD'].includes(req.method) ? null : req,
    });

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
    res.end('Internal Server Error');
  }
}

