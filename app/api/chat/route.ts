import { GoogleGenerativeAI } from "@ai-sdk/google";
import { generateText } from "ai";

const genAI = new GoogleGenerativeAI({
  apiKey: process.env.GOOGLE_AI_API_KEY,
});

export async function POST(req: Request) {
  const { prompt } = await req.json();
  const { text } = await generateText({
    model: genAI.getGenerativeModel({ model: "gemini-1.5-pro" }),
    prompt,
  });

  return new Response(JSON.stringify({ text }), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
}
