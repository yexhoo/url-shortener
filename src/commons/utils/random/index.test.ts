import { build } from "./index";
import Utils from "../../constants/utils";

describe('Utils:Random', () => {
  it('should return a valid randome code', () => {
    const randomeCode = build();
    expect(randomeCode).toHaveLength(Utils.RANDOM_CODE_LENGTH)
  });
});