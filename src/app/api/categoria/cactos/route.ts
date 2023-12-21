import category from './static.json';

export async function GET() {
  return Response.json(category);
}
