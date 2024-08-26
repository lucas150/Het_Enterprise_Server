const express = require("express");
const router = new express.Router();
const nodemailer = require("nodemailer");

router.post("/register", (req, res) => {
  const { email, name, products, number, message } = req.body;

  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL,
        pass: process.env.PASSWORD,
      },
    });

    const mailOptions = {
      from: email,
      to: process.env.EMAIL,
      subject: "Enquiry",
      html: `
        <h2>New Enquiry</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone Number:</strong> ${number}</p>
        <p><strong>Products Interested:</strong> ${products}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    };

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.log("Error: " + error);
        res.status(500).json({ status: 500, error: "Failed to send email" });
      } else {
        console.log("Email sent: " + info.response);
        res
          .status(201)
          .json({ status: 201, message: "Email sent successfully", info });
      }
    });
  } catch (error) {
    console.log("Error: " + error);
    res.status(500).json({ status: 500, error: "Server error" });
  }
});

module.exports = router;
