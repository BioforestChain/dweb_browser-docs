import { OpenAI } from "openai";
import { z } from "zod";
import fs from "node:fs";
import path from "node:path";
const system_prompt = fs.readFileSync(
  path.resolve(import.meta.dirname, "system-prompt.en.md"),
  "utf-8"
);
export const getOpenaiOutput = async <T>(
  user_content: string,
  schema: z.ZodType<T>
) => {
  const openai = new OpenAI({
    baseURL: z
      .string({ required_error: "required env.AI_GATEWAY_ENDPOINT" })
      .parse(process.env.AI_GATEWAY_ENDPOINT),
    apiKey: z
      .string({ required_error: "required env.OPENAI_API_KEY" })
      .parse(process.env.OPENAI_API_KEY),
  });

  const stream = await openai.chat.completions.create({
    messages: [
      {
        role: "system",
        content: system_prompt,
      },
      {
        role: "user",
        content: user_content,
      },
    ],
    model: "deepseek-chat",
    response_format: {
      type: "json_object",
    },
    stream: true,
  });

  let res = "";
  const verbose =
    process.argv.includes("--verbose") || process.argv.includes("-V");
  for await (const chunk of stream) {
    const part = chunk.choices[0].delta.content ?? "";
    res += part;
    if (verbose) {
      process.stdout.write(part);
    }
  }
  return schema.parse(JSON.parse(res));
};
import { type LanguageModelV1, streamObject } from "ai";

export const getAiOutput = async <T>(
  model: LanguageModelV1,
  schema: z.ZodType<T>,
  user_content: string
) => {
  const stream = streamObject({
    model,
    schema,
    system: system_prompt,
    prompt: user_content,
  });
  for await (const partialObject of stream.partialObjectStream) {
    console.clear();
    console.log(partialObject);
  }

  return await stream.object;
};
