const { GoogleGenerativeAI } = require("@google/generative-ai");
import "dotenv/config";

// Access your API key as an environment variable (see "Set up your API key" above)
const genAI = new GoogleGenerativeAI(process.env.API_KEY);

const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

const prompt = `prompt: "Write a short, fun and humorous story in Vietnamese. Provide context by 'Tí Quậy', the most popular short and fun story in Vietnam"
temperature: 1.5`;

async function run() {
  const result = await model.generateContent(prompt);
  const response = await result.response;
  const text = response.text();
  console.log(text);
}

run();
