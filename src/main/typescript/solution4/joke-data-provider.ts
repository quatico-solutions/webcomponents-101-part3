import { fetchCategories, fetchJoke, JokeData } from "./joke-service";

type JokeProperty = "categories" | "created_at" | "icon_url" | "id" | "updated_at" | "url" | "value";
export type JokeProperties = JokeProperty[];

type JokeFn = (categories?: string[]) => Promise<JokeData>;
type JokesFn = (num?: number, categories?: string[]) => Promise<JokeData[]>;

export const getJokeData = async (jokeFn: JokeFn, props?: JokeProperties): Promise<Partial<JokeData>> => {
    return Object.entries(await jokeFn()).reduce((acc: Partial<JokeData>, [key, value]) => {
        if (!props || props.includes(key as JokeProperty)) {
            // @ts-ignore - type is not indexable
            acc[key] = value;
        }
        return acc;
    }, {} as JokeData);
};

export const getRandomJokesData = (jokeFns: JokeFn[], props?: JokeProperties): Promise<Partial<JokeData>>[] => {
    return jokeFns.map(jokeFn => getJokeData(jokeFn, props));
};

export const getRandomJoke: JokeFn = async (categories = undefined) => await fetchJoke(getCategory(categories));

export const getRandomJokes: JokesFn = async (num = 3, categories?) => {
    const result = [];
    for (; num > 0; num--) {
        let randCat;
        if (categories) {
            randCat = categories[Math.floor(Math.random() * categories.length)];
        }
        result.push(await fetchJoke(randCat));
    }
    return result;
};

export const getAvailableCategories = (): Promise<string[]> => fetchCategories();

export const getRandomCategory = async (): Promise<string> => {
    const values = await fetchCategories();
    return values[Math.floor(Math.random() * values.length)];
};

const getCategory = (categories?: string[]) => categories && categories[Math.floor(Math.random() * categories.length)];
