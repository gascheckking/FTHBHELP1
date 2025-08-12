import { google } from "@ai-sdk/google";
import { generateText } from "ai";

export async function POST(req: Request) {
  const { prompt } = await req.json();
  const { text } = await generateText({
    model: google("gemini-1.5-pro"),
    prompt,
  });

  return new Response(JSON.stringify({ text }), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
}
