
import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: "AIzaSyCHmtdumTxX4fL5BaflOPptv37hj2wRQ44" });

const safetySettings = [
  {
    category: "HARM_CATEGORY_HARASSMENT",
    threshold: "BLOCK_LOW_AND_ABOVE",
  },
  {
    category: "HARM_CATEGORY_HATE_SPEECH",
    threshold: "BLOCK_LOW_AND_ABOVE",
  },
];

async function main(prompt) {
  const response = await ai.models.generateContent({
    model: "gemini-2.0-flash",
    contents:prompt,
    config: {
      safetySettings: safetySettings,
    },
  });
  console.log(response.text);
  return response.text;
}

export default main;