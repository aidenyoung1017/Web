import Mailgun from "mailgun-js";

const mailGunClient = new Mailgun({
    apiKey: process.env.MAILGUN_API_KEY || "",
    domain: process.env.MAILGUN_DOMAIN || "",
});

const sendEmail = (subject:string, html:string) => {
    const emailDate = {
        from: "thomas.jy.lee@gmail.com",
        to: "thomas.jy.lee@gmail.com",
        subject,
        html
    }
    return mailGunClient.messages().send(emailDate);
}

export const sendVerificationEmail = (fullName: string, key: string) => {
    const emailSubject = `Hello! ${fullName}, please verify your email`;
    const emailBody = `Verify your eamil by clicking <a href="http://nuber.com/verification/${key}/">here</a>`;
    return sendEmail(emailSubject, emailBody);
}