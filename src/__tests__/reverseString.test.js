import { reverseString } from "../reverseString.js";

describe("tests for reverseString function", () => {
  it("should reverse string", () => expect(reverseString("abc")).toBe("cba"));
});