const nodemailer = require("nodemailer")

export default function handler(req, res) {
  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
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

    transporter.sendMail(mailOptions, function (error, info) {
      if (error) {
        console.log(error);
      } else {
        console.log("Email sent");
      }
    });
    res.status(200).json({ message: "Message sent successfully" });
  } catch (err) {
    res.status(400).json({ message: `${err}` });
  }
}
