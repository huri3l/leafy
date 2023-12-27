import plantas_naturais from './static.json';

export async function GET() {
  return Response.json(plantas_naturais);
}
