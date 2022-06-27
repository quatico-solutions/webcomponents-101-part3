import { JokeData } from "./joke-service";
import { JokeProperties, JokeService } from "./JokeService";

export class JokeDataProvider {
    constructor(private service = new JokeService()) {}

    public async getRandomJoke(categories?: string[]): Promise<JokeData | undefined> {
        const jokes = await this.service.getRandomJokes(1, categories);
        if (jokes) {
            return jokes[0];
        }
        return undefined;
    }

    public getRandomJokes(num = 3, categories?: string[]): Promise<JokeData[]> {
        return this.service.getRandomJokes(num, categories);
    }

    public getRandomJokesData(jokes: JokeData[], props?: JokeProperties): Partial<JokeData>[] {
        const result: Partial<JokeData>[] = [];
        for (const joke of jokes) {
            result.push(this.service.getJokeData(joke, props));
        }
        return result;
    }

    public getCategories(): Promise<string[]> {
        return this.service.getCategories();
    }

    public getRandomCategory(): Promise<string> {
        return this.service.getRandomCategory();
    }
}
