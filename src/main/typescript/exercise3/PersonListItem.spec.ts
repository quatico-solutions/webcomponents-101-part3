import { PersonListItem } from "./PersonListItem";

describe("Ctor", () => {
    it("yields item w/ valid person", () => {
        const testObj = new PersonListItem({ forename: "Jane", surname: "Doe" });

        expect(testObj.item).toEqual({ forename: "Jane", surname: "Doe" });
    });
});

describe("render", () => {
    it("returns name string w/ valid person", () => {
        const testObj = new PersonListItem({ forename: "Jane", surname: "Doe" });

        const actual = testObj.render();

        expect(actual).toBe("Jane Doe");
    });
});
