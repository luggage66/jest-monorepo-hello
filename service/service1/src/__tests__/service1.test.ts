import { service1 } from "../";

describe('@jmh/service1', () => {
    it("works", () => {
        expect(service1()).toBe("service 1 real implementation");
    });
});
