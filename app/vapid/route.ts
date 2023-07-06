export async function GET() {
  return new Response(process.env.VAPID_PUBLIC_KEY)
}