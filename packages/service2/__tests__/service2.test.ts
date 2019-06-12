import { service2 } from "../src";

describe('@jmh/service2', () => {
    it("works", () => {
        expect(service2()).toMatchInlineSnapshot();
    });
});