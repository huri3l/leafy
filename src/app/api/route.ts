import home from './static.json';

export async function GET() {
  return Response.json({ home });
}
