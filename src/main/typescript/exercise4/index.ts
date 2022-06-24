/* eslint-disable no-console */
import { JokeData } from "./joke-service";
import { JokeDataProvider } from "./JokeDataProvider";

const provider = new JokeDataProvider();

provider.getRandomJokes(1).then(randJokes => {
    console.log(
        "Random fun fact:",
        randJokes.map(it => `"${it.value}"`)
    );
});

provider.getRandomCategory().then(category => {
    provider.getRandomJokes(1, [category]).then(randJokes => {
        console.log(
            `Fun fact about "${category}":`,
            randJokes.map(it => `"${it.value}"`)
        );
    });
});

provider.getCategories().then(categories => {
    provider
        .getRandomJokes(
            10,
            categories.filter(it => it.startsWith("m"))
        )
        .then(jokesFromCategories => {
            console.log(
                "By categories:",
                jokesFromCategories.sort(sortByCategory).map(it => `About ${it.categories}: "${it.value}"`)
            );
        });
});

const sortByCategory = (joke1: JokeData, joke2: JokeData) => {
    const category1 = joke1.categories ? joke1.categories[0] : "";
    const category2 = joke2.categories ? joke2.categories[0] : "";
    return category1.localeCompare(category2);
};
