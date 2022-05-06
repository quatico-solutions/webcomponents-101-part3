import { renderPerson } from "./render-person";

describe("render-person", () => {
    it("returns name string w/ valid person", () => {
        const actual = renderPerson({ forename: "Jane", surname: "Doe" });

        expect(actual).toBe("Jane Doe");
    });

    it("returns empty string w/ empty names", () => {
        const actual = renderPerson({ forename: "", surname: "" });

        expect(actual).toBe(" ");
    });
});
