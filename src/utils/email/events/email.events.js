import {EventEmitter} from "node:events"
import { emailTemplete } from "../template/email.template.js"
import { sendEmail } from "../send.email.js"
import { generataToken } from "../../security/Token/token.js"
export const emailEmit = new EventEmitter()
emailEmit.on("confirmationEmail",async({email}= {})=>{
   const emailToken = generataToken({payload:{email}}) //
      const emailLink = `${process.env.FE_URL}/confirm-email/${emailToken}`
      const html = emailTemplete({code:emailLink})
      await sendEmail({to:email , subject:"ConfirmEamil" , html})
})