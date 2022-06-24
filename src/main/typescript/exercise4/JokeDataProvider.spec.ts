import { JokeDataProvider } from "./JokeDataProvider";

describe("getCategories", () => {
    it("returns available categories", async () => {
        const actual = await new JokeDataProvider().getCategories();

        expect(actual).toEqual([
            "animal",
            "career",
            "celebrity",
            "dev",
            "explicit",
            "fashion",
            "food",
            "history",
            "money",
            "movie",
            "music",
            "political",
            "religion",
            "science",
            "sport",
            "travel",
        ]);
    });
});

describe("getRandomJokes", () => {
    it("returns 3 jokes with value text by default", async () => {
        const actual = await new JokeDataProvider().getRandomJokes();

        expect(actual).toHaveLength(3);
        expect(actual.filter(it => it.value.length > 0)).toHaveLength(3);
    });

    it("returns 10 jokes with limiting number parameter", async () => {
        const actual = await new JokeDataProvider().getRandomJokes(10);

        expect(actual).toHaveLength(10);
        expect(actual.filter(it => it.value.length > 0)).toHaveLength(10);
    });

    it("returns jokes from category with provided category", async () => {
        const actual = await new JokeDataProvider().getRandomJokes(3, ["animal"]);

        expect(actual.filter(it => it.categories && it.categories.includes("animal"))).toHaveLength(3);
    });

    it("returns jokes from categories starting with 'm' with provided category", async () => {
        const testObj = new JokeDataProvider();
        const actual = await testObj.getRandomJokes(
            3,
            (await testObj.getCategories()).filter(it => it.startsWith("m"))
        );

        expect(actual.filter(it => it.categories && it.categories.some(it => it.startsWith("m")))).toHaveLength(3);
    });
});

describe("getRandomJokesData", () => {
    const target = [
        {
            categories: [],
            created_at: "2020-01-05 13:42:25.099703",
            icon_url: "https://assets.chucknorris.host/img/avatar/chuck-norris.png",
            id: "Svzqw_7RR1iUGGk36UnJ-g",
            updated_at: "2020-01-05 13:42:25.099703",
            url: "https://api.chucknorris.io/jokes/Svzqw_7RR1iUGGk36UnJ-g",
            value: 'Ricky Bobby said, \\"If your not first your last.\\" Chuck Norris said, \\"If your not Chuck Norris, You\'re dead.',
        },
        {
            categories: [],
            created_at: "2020-01-05 13:42:26.766831",
            icon_url: "https://assets.chucknorris.host/img/avatar/chuck-norris.png",
            id: "FoXKNmT5Qpes5LD_xuViaA",
            updated_at: "2020-01-05 13:42:26.766831",
            url: "https://api.chucknorris.io/jokes/FoXKNmT5Qpes5LD_xuViaA",
            value: 'WHERE DID THE TERMINATEOR GO WHEN HE SAID HIS FAMOUS WORDS \\"I BE BACK\\"? HE WENT TO FETCH CHUCK NORRIS',
        },
        {
            categories: [],
            created_at: "2020-01-05 13:42:25.905626",
            icon_url: "https://assets.chucknorris.host/img/avatar/chuck-norris.png",
            id: "b1fFv0arQBi-lYnW3VNuvQ",
            updated_at: "2020-01-05 13:42:25.905626",
            url: "https://api.chucknorris.io/jokes/b1fFv0arQBi-lYnW3VNuvQ",
            value: "Chuck Norris can login without signing up, on any website.",
        },
    ];

    it("returns jokes with all properties by default", () => {
        const actual = new JokeDataProvider().getRandomJokesData(target);

        expect(actual).toEqual(target);
    });

    it("returns jokes with matching properties with prop names", () => {
        const actual = new JokeDataProvider().getRandomJokesData(target, ["categories", "value"]);

        expect(actual).toEqual(target.map(it => ({ categories: it.categories, value: it.value })));
    });
});
