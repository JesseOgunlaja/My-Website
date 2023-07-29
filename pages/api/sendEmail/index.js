const nodemailer = require("nodemailer")

import { Ratelimit } from "@upstash/ratelimit";
import { Redis } from "@upstash/redis";

const redis = new Redis({
  url: process.env.REDIS_URL || "",
  token: process.env.REDIS_TOKEN || "",
});

const ratelimit = new Ratelimit({
  redis: redis,
  limiter: Ratelimit.slidingWindow(1, "1 h"),
});

export default async function handler(req, res) {
  const ip = request.ip ?? "127.0.0.1";
      const { success } =
        await ratelimit.limit(ip);

      if (!success) {
        return res.status(429).json({ message: `Too many requests from this IP` });
      }
  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      secure: true,
      auth: {
        user: "noreply4313@gmail.com",
        pass: process.env.GMAIL_PASSWORD,
      },
    });

    const mailOptions = {
      from: "noreply4313@gmail.com",
      to: "jesseogunlaja@gmail.com",
      replyTo: req.body.email,
      subject: req.body.name,
      text: req.body.message,
    };

    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: "Message sent successfully" });
  } catch (err) {
    res.status(400).json({ message: `${err}` });
  }
}
