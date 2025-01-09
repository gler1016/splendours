import { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";
import connectToDatabase from "@/lib/mongodb";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method Not Allowed" });
  }


  try {

    const email = req.body.email;

    // if (!name || !email || !phone) {
    //   return res.status(400).json({ error: "Missing required fields" });
    // }

    // Save to MongoDB
    const db = await connectToDatabase();
    const collection = db.collection("formSubmissions");
    await collection.insertOne({
      email,
      role: "6",
      createdAt: new Date(),
    });

    const transporter = nodemailer.createTransport({
      host: "smtp.hostinger.com",
      port: 465,
      secure: true,
      auth: {
        user: "mailer@splendourinstone.com.au",
        pass: "K~ZxuQYw]8p",
      },
    });

    const mailOptions = {
      from: "mailer@splendourinstone.com.au",
      // to: "sherehiyandriy@gmail.com",
      to: "info@splendourinstone.com",
      replyTo: email,
      subject: "New Gmail Submission",
      text: `Email: ${email}`,
    };
    
    await transporter.sendMail(mailOptions);

    res.status(200).json({ message: "Form submitted successfully!" });
  } catch (error) {
    console.error("Error handling form submission:", error);
    res
      .status(500)
      .json({ error: "An error occurred while processing the request." });
  }
}
