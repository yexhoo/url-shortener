import Handler from "./index";
import HTTP from '../constants/http'
import { getMockReq } from '@jest-mock/express'
import { IData } from "../interfaces/shortcode";

describe('Controllers:Commons:Handlers:Error', () => {

  it('should return success response', () => {
    const req: any = getMockReq({
      status: (code: number) => { return { send: (data: JSON) => { return { ...data, code } } } }
    })
    const input = { url: 'http://localhost' };
    const data: JSON = <IData>input;
    const output = Handler.response(req, HTTP.OK, data);
    expect(output).toHaveProperty('url');
    expect(output).toHaveProperty('code');
    expect(output).toMatchObject({ url: 'http://localhost', code: 200 });
  });

  it('Should return error response', () => {
    const req: any = getMockReq({
      status: (code: number) => { return { json: (err: Error) => { return { ...err, code } } } }
    })
    const output = Handler.error(req, HTTP.BAD_REQUEST, new Error('unexpected error'));
    expect(output).toHaveProperty('code');
    expect(output).toMatchObject({ code: 400 });
  });
});