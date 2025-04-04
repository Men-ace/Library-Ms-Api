import Joi from "joi";
import { responseClient } from "../responseClient.js";
import { deleteUploadedFiles } from "../../utils/fileUtil.js";

export const validateData = ({ req, res, next, obj }) => {
  //create schema or rules

  const schema = Joi.object(obj);

  // pass your data, req.body, to the schema
  const { error } = schema.validate(req.body);

  if (error) {
    if (req.file || Array.isArray(req.files)) {
      deleteUploadedFiles(req);
    }

    return responseClient({
      req,
      res,
      message: error.message,
      statusCode: 400,
    });
  }
  next();
  // if Pass go next() or response error from here
};
