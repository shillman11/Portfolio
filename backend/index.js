const express = require("express");
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");
const cors = require("cors");
const {
  smtpHost,
  smtpUsername,
  smtpPassword,
  toEmail,
  fromEmail,
} = require("./Security");

const app = express();
const PORT = process.env.PORT || 5000; // Define the port your server will listen on

console.log("smtpHost:", smtpHost);
console.log("toEmail:", toEmail);
console.log("fromEmail:", fromEmail);

// Middleware
app.use(bodyParser.json());
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));

// Define a route to handle the contact form submission
app.post("/api/contact", (req, res) => {
  const { name, email, message } = req.body; //extract form data from request body

  // console.log(req.body, "reqbody------------------------");
  // console.log(
  //   name,
  //   "name",
  //   email,
  //   "email",
  //   message,
  //   "message---------------------------"
  // );

  // Create a nodemailer transporter
  const transporter = nodemailer.createTransport({
    host: smtpHost,
    port: 465,
    secure: true, // upgrade later with STARTTLS
    auth: {
      user: smtpUsername,
      pass: smtpPassword,
    },
  });

  // Configure email data
  const mailOptions = {
    from: fromEmail,
    to: toEmail,
    subject: "Contact",
    text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`, // Included form data in email body,
  };

  //verify connection configuration
  transporter.verify(function (error, success) {
    if (error) {
      console.log(error);
    } else {
      console.log("Server is ready to take our messages");
    }
  });

  // Send email
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error(error);
      res.status(500).send("Failed to send email");
    } else {
      console.log("Email sent: " + info.response);
      res.status(200).send("Message sent successfully");
    }
  });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
