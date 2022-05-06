import { hash } from "./hash";

describe("hash", () => {
    it("returns hash code w/ valid string", () => {
        expect(hash("foobar")).toBe("190746428");
    });

    it("returns 1 w/ empty string", () => {
        expect(hash("")).toBe("1");
    });

    it("returns 1 w/ undefined", () => {
        expect(hash(undefined as any)).toBe("1");
    });
});
