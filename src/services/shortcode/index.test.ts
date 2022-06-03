import { create } from "./index";
import { IData } from "../../commons/interfaces/business";

describe('Services:Shortcode', () => {
  it('should return same data when does not exist validation errors', async () => {
    const input = <IData>{ url: 'https://www.google.com'}
    const output = await create(input);
    console.log(output);
  });
});