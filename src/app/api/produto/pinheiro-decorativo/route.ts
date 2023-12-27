import product from './static.json';

export async function GET() {
  return Response.json(product);
}
