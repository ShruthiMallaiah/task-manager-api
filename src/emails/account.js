const sgMail = require("@sendgrid/mail");
const sendGridAPIKey = process.env.SENDGRID_API_KEY;

sgMail.setApiKey(sendGridAPIKey);

const sendWelcomeEmail = (email, name) => {
  sgMail.send({
    to: email,
    from: "m.shruthi@globaledgesoft.com",
    subject: "Welcome to you!!",
    text: `Hi ${name}, Welcome aboard. Hope you enjoys this journey!!`,
  });
};

const sendGoodbyeEmail = (email, name) => {
  sgMail.send({
    to: email,
    from: "m.shruthi@globaledgesoft.com",
    subject: `Goodbye ${name}`,
    text: "We really miss you!! Please visit again",
  });
};

module.exports = {
  sendWelcomeEmail,
  sendGoodbyeEmail,
};
