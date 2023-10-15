import express from "express";
import { apiResponse } from "@/helpers/apiResponse";
import { BAD_REQUEST, OK } from "http-status/lib";

// check wether the user is signed in for the content
export const signInCheck = (
  req: express.Request,
  res: express.Response,
  next: NextFn,
) => {
  try {
    if (req.session.signed == true) {
      return next();
    } else {
      return res
        .status(OK)
        .json(apiResponse({ Unauthorized: "login to gain access" }));
    }
  } catch (error) {
    console.log(error);
    return res.status(BAD_REQUEST);
  }
};
