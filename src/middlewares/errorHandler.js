import { responseClient } from "./responseClient.js";

export const erroHandler = (error, req, res, next) => {
  const statusCode = error.statusCode || 500;
  const message = error.message;
  responseClient({ req, res, statusCode, message });
};
