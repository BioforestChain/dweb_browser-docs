import { z } from "zod";

export const google = async () => {
  const { google, createGoogleGenerativeAI } = await import("@ai-sdk/google");
  return createGoogleGenerativeAI({
    apiKey: z
      .string({ required_error: "required env.GOOGLE_API_KEY" })
      .parse(process.env.GOOGLE_API_KEY),
  })("gemini-1.5-pro");
};

export const deepseek = async () => {
  const { createDeepSeek } = await import("@ai-sdk/deepseek");
  return createDeepSeek({
    apiKey: z
      .string({ required_error: "required env.OPENAI_API_KEY" })
      .parse(process.env.OPENAI_API_KEY),
  })("deepseek-chat");
};
