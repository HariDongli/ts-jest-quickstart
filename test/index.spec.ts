import { hello } from "../src/greet";
import { expect, test} from '@jest/globals';

test("hello", () => {
  expect(hello("foo")).toEqual("Hello foo");
});