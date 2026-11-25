export const config = { matcher: "/secret" };

export default function middleware(request) {
  return new Response("Mimi says no 😼", { status: 403 });
}

