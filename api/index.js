export const config = {
  runtime: 'edge',
};

export default async function handler(request) {
  try {
    const { default: server } = await import('../dist/server/server.js');

    const response = await server.fetch(request);
    return response;
  } catch (error) {
    console.error('Error:', error);
    return new Response('Internal Server Error', { status: 500 });
  }
}
