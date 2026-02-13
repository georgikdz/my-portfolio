import { Configuration, OpenAIApi } from "openai";
import { NextApiRequest, NextApiResponse } from "next";

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "POST") {
    const { messages } = req.body;

    try {
      const response = await openai.createChatCompletion({
        model: "gpt-3.5-turbo",
        messages,
      });

      res.status(200).json(response.data);
    } catch (error) {
      res.status(500).json({ error: "Error occurred while contacting OpenAI" });
    }
  } else {
    res.setHeader("Allow", ["POST"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}