import Joi from "joi";
export const FNAME = Joi.string().min(5);
export const FNAME_REQ = FNAME.required();

export const LNAME = Joi.string().min(5);
export const LNAME_REQ = LNAME.required();

export const EMAIL = Joi.string().email({ minDomainSegments: 2 }).required();
export const EMAIL_REQ = EMAIL.required();

export const PASSWORD = Joi.string();
export const PASSWORD_REQ = PASSWORD.required();
export const PHONE = Joi.number();

export const PHONE_REQ = Joi.number();
export const SESSION = Joi.string().min(10).max(30);

export const SESSION_REQ = SESSION.required();

export const TOKEN = Joi.string().min(10);
export const TOKEN_REQ = TOKEN.required();

export const OTP = Joi.number().min(999).max(9999).required();

export const SHORT_STR = Joi.string().min(1).max(100);
export const SHORT_STR_REQ = SHORT_STR.required();

export const LONG_STR = Joi.string().min(1).max(5000);
export const LONG_STR_REQ = LONG_STR.required();

export const STR_ARRAY = Joi.array().items(Joi.string());
export const STR_ARRAY_REQ = Joi.array().items(Joi.string()).required();

export const YEAR = Joi.number()
  .integer()
  .min(1901)
  .max(new Date().getFullYear());

export const YEAR_REQ = YEAR.required();

export const _ID = Joi.string();
export const _ID_REQ = _ID.required();

export const STATUS = Joi.string().valid("active", "inactive");
export const STATUS_REQ = STATUS.required();

export const EXPECTEDAVAILABLE = Joi.date().allow(null, "");
export const EXPECTEDAVAILABLE_REQ = EXPECTEDAVAILABLE.required();

// export const ISBN = Joi.number().integer().min(1000000000).max(99999999999999);
export const ISBN = Joi.string()
  .pattern(/^\d{10}$|^\d{13}$/)
  .messages({
    "string.pattern.base": "ISBN is not in the valid formate.",
  });
export const ISBN_REQ = ISBN.required();
