import { PersonListItem } from "./PersonListItem";
import { ViewList } from "./ViewList";

describe("Ctor", () => {
    it("yields items with empty list", () => {
        const testObj = new ViewList([]);

        expect(testObj.items).toEqual([]);
    });

    it("yields items with non empty list", () => {
        const testObj = new ViewList([new PersonListItem({ forename: "Jane", surname: "Doe" })]);

        expect(testObj.items.map(it => it.item)).toEqual([{ forename: "Jane", surname: "Doe" }]);
    });
});

describe("render", () => {
    it("returns names with valid list items", () => {
        const testObj = new ViewList([
            new PersonListItem({ forename: "Jane", surname: "Doe" }),
            new PersonListItem({ forename: "Joe", surname: "Average" }),
        ]);

        const actual = testObj.render();

        expect(actual).toBe("Jane Doe, Joe Average");
    });
});
