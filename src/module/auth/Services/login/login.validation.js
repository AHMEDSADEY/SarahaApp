import joi from "joi";

export const signUp = joi.object().keys({
    userName:joi.string().min(3).max(10).trim().required(),
    email:joi.string().email({minDomainSegments:1 , maxDomainSegments:3}).required(),
    password:joi.string().pattern(new RegExp(/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/)).required(),
    confirmationPassword:joi.string().valid(joi.ref("password")).required(),
    phone:joi.string().pattern(new RegExp(/^(002|\+2)?01[0125][0-9]{8}/))
})