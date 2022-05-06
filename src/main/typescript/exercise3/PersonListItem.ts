import { Person } from "./Person";
import { ViewListItem } from "./ViewListItem";

export class PersonListItem implements ViewListItem<Person> {
    public readonly item: Person;

    public constructor(person: Person) {
        this.item = person;
    }

    public render(): string {
        return `${this.item.forename} ${this.item.surname}`;
    }
}
