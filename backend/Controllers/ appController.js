const nodemailer = require("nodemailer");
const Mailgen = require("mailgen");
const dotenv = require("dotenv");
dotenv.config();
const EMAIL = process.env.EMAIL; // your yahoo email address goes here
const PASSWORD = process.env.PASS; // recently generated password goes here
const MAIN_URL = "localhost:6000/";

const transporter = nodemailer.createTransport({
  service: "Gmail",
  port: 587,
  auth: {
    user: EMAIL,
    pass: PASSWORD,
  },
});

const MailGenerator = new Mailgen({
  theme: "default",
  product: {
    name: "HAKI",
    link: MAIN_URL,
  },
});

const getBill = (req, res) => {
  const { name, email } = req.body;

  //login control
  const response = {
    body: {
      name,
      intro: "Your INVOICE",
      table: {
        data: [
          {
            item: "GTA 5",
            description: "Open World RolePlay",
            price: "$5.00",
          },
        ],
      },

      outro: "Thanks for your purchase from HAKI Games",
    },
  };

  const mail = MailGenerator.generate(response);

  const message = {
    from: EMAIL,
    to: email,
    subject: "transaction",
    html: mail,
  };

  transporter
    .sendMail(message)
    .then(() => {
      return res.status(200).json({ msg: "you should receive an email from us" });
    })
    .catch((error) => console.error(error));
};

module.exports = { getBill };
