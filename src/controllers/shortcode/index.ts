import Handler from "../../commons/handlers";
import HTTP from '../../commons/constants/http';
import * as ShortCode from "../../services/shortcode"
import { Application, Request, Response } from "express";
import { IData } from "../../commons/interfaces/shortcode";

import { check  } from '../../commons/utils/rule'
import { validate } from '../../rules/shortcode/validator'

export const handlers = (app: Application) => {
  app.post('/shortcode', async function (req: Request, res: Response) {
    ShortCode.create(<IData> req.body)
      .then(d => { return check(d, validate) })
      .then(data => Handler.response(res, HTTP.OK, data) )
      .catch(err => Handler.error(res, HTTP.BAD_REQUEST, err) );
  });
}