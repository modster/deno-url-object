import { serve } from "https://deno.land/std/http/mod.ts";
async function reqHandler(req: Request) {
  const reqPath = new URL(req.url).pathname;
  return await fetch("https://datadash.cloud" + reqPath, {
    headers: req.headers,
  });
}
serve(reqHandler, { port: 8000 });
