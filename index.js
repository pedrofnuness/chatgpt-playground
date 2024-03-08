import OpenAI from "openai";

const openai = new OpenAI({
  organization: 'org-2G540qGtxrMq5HX1cOMBuN33',
  apiKey: process.env.OPENAI_API_KEY
});

async function main() {
  const completion = await openai.chat.completions.create({
    messages: [{ role: "system", content: "You are a great software developer assistant." }],
    model: "gpt-3.5-turbo",

    // temperature: 1,
    // max_tokens: 7
  });

  console.log(completion.choices[0]);
}

main();