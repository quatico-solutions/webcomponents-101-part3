import { JokeData } from "./joke-service";
import { JokeProperties, JokeService } from "./JokeService";

export class JokeDataProvider {
    constructor(private service = new JokeService()) {}

    public async getRandomJoke(categories?: string[]): Promise<JokeData> {
        return (await this.service.getRandomJokes(1, categories))[0];
    }

    public getRandomJokes(num = 3, categories?: string[]): Promise<JokeData[]> {
        return this.service.getRandomJokes(num, categories);
    }

    public getRandomJokesData(jokes: JokeData[], props?: JokeProperties): Partial<JokeData>[] {
        return jokes.map(joke => this.service.getJokeData(joke, props));
    }

    public getCategories(): Promise<string[]> {
        return this.service.getCategories();
    }

    public getRandomCategory(): Promise<string> {
        return this.service.getRandomCategory();
    }
}
