import { encode } from "./encode";
import { hash } from "./hash";

describe("encode", () => {
    it("returns hash encoding with default credentials", () => {
        const actual = encode("Message");

        expect(actual).toBe(hash("!!!public1234:::Message!!!"));
    });

    it("returns hash encoding with credentials from global variable", () => {
        process.env.ENCODING_SECRET = "some-secret";
        const actual = encode("Message");

        expect(actual).toBe(hash("!!!some-secret:::Message!!!"));
    });
});
