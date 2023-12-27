import cactos from './static.json';

export async function GET() {
  return Response.json(cactos);
}
