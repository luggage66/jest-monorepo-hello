import { service1 } from "../";

describe("@jmh/service1", () => {
  it("works", () => {
    expect(service1()).toMatchInlineSnapshot(
      `"service 1 real implementation: library 1 mock implementation"`
    );
  });
});
