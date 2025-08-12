import { createGoogleGenerativeAI } from '@ai-sdk/google'
import { generateText } from 'ai'

export async function POST(req: Request) {
  const { prompt } = await req.json()
  const google = createGoogleGenerativeAI({
    apiKey: process.env.GOOGLE_GENERATIVE_AI_API_KEY,
  })
  const { text } = await generateText({
    model: google('gemini-pro'),
    prompt,
  })
  return Response.json({ text })
}
