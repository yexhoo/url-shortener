import { Response } from "express";

export default class Handler {

  public static error (res: Response, code: number, err: Error) {
    const {message} = err;
    return res.status(code).json({ message});
  }

  public static response (res: Response, code: number , data: JSON | JSON[]) {
    return res.status(code).send(data);
  }
}