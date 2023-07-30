const nodemailer = require("nodemailer");

import { Ratelimit } from "@upstash/ratelimit";
import { Redis } from "@upstash/redis";
import { NextResponse } from "next/server";

const redis = new Redis({
  url: process.env.REDIS_URL,
  token: process.env.REDIS_TOKEN,
});

const ratelimit = new Ratelimit({
  redis: redis,
  limiter: Ratelimit.slidingWindow(1, "1 h"),
});

export async function POST(req) {
  try {
    const body = await req.json();

    const ip = request.ip ?? "127.0.0.1";
    const { success } = await ratelimit.limit(ip);

    if (!success) {
      return res
        .status(429)
        .json({ message: `Too many requests from this IP` });
    }
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
      replyTo: body.email,
      subject: body.name,
      text: body.message,
    };

    await transporter.sendMail(mailOptions);
    return NextResponse.json(
      { message: "Message sent successfully" },
      { status: 200 }
    );
  } catch (err) {
    return NextResponse.json({ message: `${err}` }, { status: 400 });
  }
}
