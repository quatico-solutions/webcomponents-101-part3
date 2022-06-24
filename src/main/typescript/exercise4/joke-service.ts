import fetch from "node-fetch";

export type JokeData = {
    categories?: string[];
    created_at?: string;
    icon_url?: string;
    id?: string;
    updated_at?: string;
    url?: string;
    value: string;
};

/**
 * Retrieve a random chuck joke in JSON format. Optionally provide a category
 * to retrieve a random joke from a given category.
 *
 * @param category Optional category to retrieve a random joke from.
 * @returns A promise that resolves to the JSON data of the joke.
 */
export const fetchJoke = async (category?: string): Promise<JokeData> => {
    const res = await fetch(`https://api.chucknorris.io/jokes/random` + (category ? `?category=${category}` : ``));
    return await res.json();
};

/**
 * Retrieve a list of available categories.
 *
 * @returns A promise that resolves to an array of strings
 */
export const fetchCategories = async (): Promise<string[]> => {
    const res = await fetch("https://api.chucknorris.io/jokes/categories");
    return await res.json();
};
