import { service2 } from "../";

describe("@jmh/service2", () => {
  it("works", () => {
    expect(service2()).toMatchInlineSnapshot(`"service 2 real implementation"`);
  });
});
