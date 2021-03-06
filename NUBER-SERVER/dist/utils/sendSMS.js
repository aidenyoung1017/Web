"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var twilio_1 = __importDefault(require("twilio"));
var twilioClient = twilio_1.default(process.env.TWILIO_SID, process.env.TWILIO_TOKEN);
exports.sendSMS = function (to, body) {
    return twilioClient.messages.create({
        body: body,
        to: to,
        from: process.env.TWILIO_PHONE
    });
};
exports.sendVerificationSMS = function (to, key) {
    return exports.sendSMS(to, "Your verification key is: " + key);
};
/*
const sendSMS = (to: string, body: string) : Promise<any> => {
    return twilioClient.messages.create({
        body,
        to,
        from: process.env.TWILIO_PHONE
    });
};
*/
//# sourceMappingURL=sendSMS.js.map