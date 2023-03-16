// This Lambda function fetches data of published stories for de market with slugs cc from storyblok
import { storyblokInit, apiPlugin } from "@storyblok/js";

export async function handler(request: any, context: any): Promise<any> {
  const { storyblokApi: Storyblok } = storyblokInit({
    accessToken: process.env.STORYBLOK_PREVIEW_TOKEN,
    use: [apiPlugin],
    apiOptions: {
      cache: {
        clear: "auto",
        type: "memory",
      },
    },
  });
  const version = 1678806921;
  try {
    if (Storyblok) {
      const storiesPromise = await Storyblok.getAll(`cdn/stories`, {
        cv: version || Date.now(),
        language: "de",
        by_slugs: "cc/*",
      });
      return {
        statusCode: 200,
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(storiesPromise),
      };
    } else throw new Error("Market not found");
  } catch (e) {
    return {
      status: 502,
      json: {
        name: e.name,
        message: e.message,
        stack: e.stack,
      },
    };
  }
}
