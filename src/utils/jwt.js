import jwt from "jsonwebtoken";
import { createNewSession } from "../models/session/SessionModel.js";
import { updateUser } from "../models/user/userModel.js";

// generate accessJWT
export const createAccessJWT = async (email) => {
  //create
  const token = jwt.sign({ email }, process.env.ACCESSJWT_SECRET, {
    expiresIn: "1d",
  });
  //store
  const obj = {
    token,
    association: email,
    expire: new Date(Date.now() + 15 * 60 * 1000 * 240), // 15m
  };

  const newSessions = await createNewSession(obj);
  return newSessions?._id ? token : null;
};

// decode accessJWT
export const verifyAccessJWT = (token) => {
  try {
    return jwt.verify(token, process.env.ACCESSJWT_SECRET);
  } catch (error) {
    return error.message;
  }
};

// generate refreshJWT
export const createRefresJWT = async (email) => {
  //create
  const refreshJWT = jwt.sign({ email }, process.env.REFRESHJWT_SECRET, {
    expiresIn: "30d",
  });
  //store

  const user = await updateUser({ email }, { refreshJWT });

  return user?._id ? refreshJWT : null;
};

// decode refreshJWT
export const verifyRefresJWT = (token) => {
  try {
    return jwt.verify(token, process.env.REFRESHJWT_SECRET);
  } catch (error) {
    return error.message;
  }
};

export const getJwts = async (email) => {
  return {
    accessJWT: await createAccessJWT(email),
    refreshJWT: await createRefresJWT(email),
  };
};
