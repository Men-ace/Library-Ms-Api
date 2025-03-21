import StreamTransport from "nodemailer/lib/stream-transport/index.js";
import { userActivationUrlEmailTemplate } from "./emailTemplate.js";
import { emailTransporter } from "./transport.js";

export const userActivationUrlEmail = async(obj) =>{
    
    const transport = emailTransporter()
    const info = await transport.sendMail(userActivationUrlEmailTemplate(obj))
    return info.messageId
}