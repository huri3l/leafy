import plantas_decorativas from './static.json';

export async function GET() {
  return Response.json(plantas_decorativas);
}
