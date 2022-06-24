import { fetchJoke, fetchCategories, JokeData } from "./joke-service";
import fetch from "node-fetch";
jest.mock("node-fetch");

describe("fetchJoke", () => {
    it("calls fetch passing API url", async () => {
        (fetch as any) = jest.fn().mockReturnValue({ json: jest.fn() });

        await fetchJoke();

        expect(fetch).toHaveBeenCalledWith("https://api.chucknorris.io/jokes/random");
        expect(fetch).toHaveBeenCalledTimes(1);
    });

    it("calls fetch passing API url with category", async () => {
        (fetch as any) = jest.fn().mockReturnValue({ json: jest.fn() });

        await fetchJoke("expected");

        expect(fetch).toHaveBeenCalledWith("https://api.chucknorris.io/jokes/random?category=expected");
        expect(fetch).toHaveBeenCalledTimes(1);
    });

    it("returns promise with JokeData", async () => {
        (fetch as any) = jest.fn().mockReturnValue({
            json: jest.fn(() => ({
                value: "expected",
            })),
        });

        const actual: JokeData = await fetchJoke();

        expect(actual).toEqual({
            value: "expected",
        });
    });

    it("throws error with error in execution", async () => {
        (fetch as any) = jest.fn(() => ({
            json: jest.fn().mockImplementation(() => {
                throw new Error("expected");
            }),
        }));

        const actual = fetchJoke();

        await expect(actual).rejects.toThrow("expected");
    });
});

describe("fetchCategories", () => {
    it("calls fetch passing API url", async () => {
        (fetch as any) = jest.fn().mockReturnValue({ json: jest.fn() });

        await fetchCategories();

        expect(fetch).toHaveBeenCalledWith("https://api.chucknorris.io/jokes/categories");
        expect(fetch).toHaveBeenCalledTimes(1);
    });

    it("returns promise with string array", async () => {
        (fetch as any) = jest.fn().mockReturnValue({ json: jest.fn(() => ["expected"]) });

        const actual: string[] = await fetchCategories();

        expect(actual).toEqual(["expected"]);
    });

    it("throws error with error in execution", async () => {
        (fetch as any) = jest.fn(() => ({
            json: jest.fn().mockImplementation(() => {
                throw new Error("expected");
            }),
        }));

        const actual = fetchCategories();

        await expect(actual).rejects.toThrow("expected");
    });
});
