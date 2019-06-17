"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var mailgun_js_1 = __importDefault(require("mailgun-js"));
var mailGunClient = new mailgun_js_1.default({
    apiKey: process.env.MAILGUN_API_KEY || "",
    domain: process.env.MAILGUN_DOMAIN || "",
});
var sendEmail = function (subject, html) {
    var emailDate = {
        from: "thomas.jy.lee@gmail.com",
        to: "thomas.jy.lee@gmail.com",
        subject: subject,
        html: html
    };
    return mailGunClient.messages().send(emailDate);
};
exports.sendVerificationEmail = function (fullName, key) {
    var emailSubject = "Hello! " + fullName + ", please verify your email";
    var emailBody = "Verify your eamil by clicking <a href=\"http://nuber.com/verification/" + key + "/\">here</a>";
    return sendEmail(emailSubject, emailBody);
};
//# sourceMappingURL=sendEmail.js.map