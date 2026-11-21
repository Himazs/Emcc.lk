// Vercel serverless endpoint for Emmy.
// Configure OPENAI_API_KEY in Vercel Project Settings > Environment Variables.
// Optional: set OPENAI_MODEL (default: gpt-4o-mini).
export default async function handler(req, res) {
  if (req.method !== "POST") return res.status(405).json({ error: "Method not allowed" });
  const message = typeof req.body?.message === "string" ? req.body.message.trim().slice(0, 1200) : "";
  if (!message) return res.status(400).json({ error: "A message is required." });
  if (!process.env.OPENAI_API_KEY) return res.status(503).json({ error: "AI is not configured yet." });
  try {
    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: { "Authorization": `Bearer ${process.env.OPENAI_API_KEY}`, "Content-Type": "application/json" },
      body: JSON.stringify({
        model: process.env.OPENAI_MODEL || "gpt-4o-mini",
        temperature: 0.4,
        max_tokens: 350,
        messages: [
          { role: "system", content: "You are Emmy, the friendly virtual assistant for Ethungahakotuwa Muslim Central College (EMCC), Sri Lanka. Answer politely and concisely using only these verified facts: the school is on Main Street, Ethungahakotuwa, Kurunegala District; it is in the Kuliyapitiya Education Zone and Udubaddawa Division; school profile says established 1 December 1949; vision: To nurture empowered students through quality education; mission: Quality education for a prosperous life; supplied contact number +94 77 493 3113; email info@emcc.lk; supplied profile lists 700+ students and 30+ qualified teachers (ask users to confirm current figures). AURA 2027 is planned for 14–18 January 2027. Do not invent admission procedures, fees, staff names, timetables, results, or event schedules. If unsure, direct the user to the school office. Do not request sensitive personal information about students." },
          { role: "user", content: message }
        ]
      })
    });
    if (!response.ok) return res.status(502).json({ error: "AI service temporarily unavailable." });
    const data = await response.json();
    return res.status(200).json({ reply: data.choices?.[0]?.message?.content || "Please contact the school office for help." });
  } catch (error) {
    return res.status(500).json({ error: "Unable to reach Emmy right now." });
  }
}
