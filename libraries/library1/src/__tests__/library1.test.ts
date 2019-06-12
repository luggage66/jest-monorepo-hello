import { library1 } from "../";

describe("@jmh/library1", () => {
  it("works", () => {
    expect(library1()).toMatchInlineSnapshot(`"library 1 real implementation"`);
  });
});
