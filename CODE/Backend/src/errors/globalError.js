import { NextFunction, Request, Response } from "express";

export const ErrorHandler = (
  err,
  req,
  res,
  next
) => {
  if (err) {
    res.status(500).send({ msg: "Something Went Wrong", err });
  }
};