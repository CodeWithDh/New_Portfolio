require("dotenv").config();
const express    = require("express");
const cors       = require("cors");
const nodemailer = require("nodemailer");
const path       = require("path");

const app  = express();
const PORT = process.env.PORT || 5001;

// ── Serve React build (dist/) ──────────────────────────────
// The dist/ folder sits one level up from the server/ folder
const distPath = path.join(__dirname, "..", "dist");
app.use(express.static(distPath));

app.use(cors());
app.use(express.json());

// ── Nodemailer transporter ─────────────────────────────────
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_APP_PASSWORD,
  },
});

// ── POST /api/contact ──────────────────────────────────────
app.post("/api/contact", async (req, res) => {
  const { from_name, from_email, message } = req.body;

  if (!from_name || !from_email || !message) {
    return res.status(400).json({ error: "All fields are required." });
  }

  try {
    await transporter.sendMail({
      from:    `"${from_name}" <${process.env.GMAIL_USER}>`,
      to:      process.env.GMAIL_USER,
      replyTo: from_email,
      subject: `Portfolio Contact from ${from_name}`,
      html: `
        <div style="font-family:sans-serif;max-width:600px;margin:auto;padding:24px;border:1px solid #eee;border-radius:8px;">
          <h2 style="color:#fb2c36;margin-bottom:4px;">New message from your portfolio</h2>
          <hr style="border:none;border-top:1px solid #eee;margin:16px 0"/>
          <p><strong>Name:</strong> ${from_name}</p>
          <p><strong>Email:</strong> <a href="mailto:${from_email}">${from_email}</a></p>
          <p><strong>Message:</strong></p>
          <p style="background:#f4f4f4;padding:16px;border-radius:6px;white-space:pre-wrap;">${message}</p>
        </div>
      `,
    });
    res.json({ success: true });
  } catch (err) {
    console.error("Email send error:", err.message);
    res.status(500).json({ error: "Failed to send email." });
  }
});

// ── Catch-all: send React's index.html for any other route ─
app.get("*", (req, res) => {
  res.sendFile(path.join(distPath, "index.html"));
});

app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
