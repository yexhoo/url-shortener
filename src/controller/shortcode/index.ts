import Handler from "../handler";
import HTTP from '../../constants/http';
import { IData } from "../../interface/shortcode";
import * as ShortCode from "../../service/shortcode"
import { Application, Request, Response } from "express";

export const handlers = (app: Application) => {
  app.post('/shortcode', async function (req: Request, res: Response) {
    ShortCode.create(<IData> req.body)
      .then(data => Handler.response(res, HTTP.OK, data) )
      .catch(err => Handler.error(res, HTTP.BAD_REQUEST, err) );
  });
}