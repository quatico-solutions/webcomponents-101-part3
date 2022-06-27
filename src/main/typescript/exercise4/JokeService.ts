import { fetchCategories, fetchJoke, JokeData } from "./joke-service";

type JokeProperty = "categories" | "created_at" | "icon_url" | "id" | "updated_at" | "url" | "value";
export type JokeProperties = JokeProperty[];

export class JokeService {
    public getJokeData(joke: JokeData, props?: JokeProperties): Partial<JokeData> {
        const result: Partial<JokeData> = {};
        for (const key in joke) {
            const name = key as JokeProperty;
            if (!props || (props.includes(name) && Object.prototype.hasOwnProperty.call(joke, name))) {
                // @ts-ignore - type is not indexable
                result[key] = joke[key];
            }
        }
        return result;
    }

    public getRandomJoke(category?: string): Promise<JokeData> {
        return fetchJoke(category);
    }

    public async getRandomJokes(num = 3, categories?: string[]): Promise<JokeData[]> {
        if (!categories) {
            categories = [await this.getRandomCategory()];
        }
        const result = [];
        for (; num > 0; num--) {
            const randCat = categories[Math.floor(Math.random() * categories.length)];
            result.push(await fetchJoke(randCat));
        }
        return result;
    }

    public getCategories(): Promise<string[]> {
        return fetchCategories();
    }

    public async getRandomCategory(): Promise<string> {
        const values = await fetchCategories();
        return values[Math.floor(Math.random() * values.length)];
    }
}
