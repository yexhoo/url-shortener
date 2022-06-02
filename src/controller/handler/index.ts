import { Response } from "express";

export default class Handler {

  public static error (res: Response, code: number, err: Error) {
    return res.status(code).json(err);
  }

  public static response (res: Response, code: number , data: JSON | JSON[]) {
    return res.status(code).send(data);
  }
}