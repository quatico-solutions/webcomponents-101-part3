import { renderList } from "./render-list";

describe("render-list", () => {
    it("calls renderFn w/ single value", () => {
        const target = jest.fn();

        renderList<string>(target)(["a"]);

        expect(target).toHaveBeenCalledWith("a");
    });

    it("does not call renderFn w/ no value", () => {
        const target = jest.fn();

        renderList<string>(target)([]);

        expect(target).not.toHaveBeenCalled();
    });

    it("returns comma-separated strings w/ simple render function", () => {
        const target = jest.fn().mockImplementation(s => s);

        const actual = renderList<string>(target)(["a", "b", "c"]);

        expect(actual).toBe("a, b, c");
    });
});
