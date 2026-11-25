export const config = { matcher: "/secret" };

export default function middleware(request) {
  const key = new URL(request.url).searchParams.get("key");
  if (key === "mimi") {
    return new Response("Welcome, Boss", { status: 200 });
  }
  return new Response("Mimi says no 😼", { status: 403 });
}

