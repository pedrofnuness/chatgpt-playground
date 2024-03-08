import OpenAI from "openai";
import express from "express";

const openai = new OpenAI({
  organization: 'org-2G540qGtxrMq5HX1cOMBuN33',
  apiKey: process.env.OPENAI_API_KEY
});

const app = express();
const port = 4000;

app.listen(port, () => {
    console.log(`Server running in port ${port}`)
})

app.post('/', async (req, res) => {
    const completion = await openai.chat.completions.create({
        messages: [{ role: "system", content: "You are a great software developer assistant." }],
        model: "gpt-3.5-turbo",
    
        // temperature: 1,
        // max_tokens: 7
      });
    
    console.log(completion.choices[0]);
    res.json({ data: response.data })
})
