// pages/api/chat.js

const fallbackResponses = [
    "I'm currently seeking job opportunities!",
    "I recently worked at Meta and I'm excited to explore new possibilities.",
    "Feel free to ask me about my experience or what I'm looking for in my next role!",
];

const promptContext = "I'm a former Meta employee (Oct 2025 - Mar 2026) now interviewing for new opportunities. Please provide job-seeking relevant assistance.";

export default async function chatHandler(req, res) {
    const userMessage = req.body.message;
    // Logic to process userMessage and generate a response...

    if (!userMessage) {
        return res.status(400).json({error: 'No message provided.'});
    }

    // Your chatbot logic here...
    // Example response logic
    const botResponse = fallbackResponses[Math.floor(Math.random() * fallbackResponses.length)];

    return res.status(200).json({response: botResponse, context: promptContext});
}