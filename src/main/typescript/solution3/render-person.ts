import { Person } from "./Person";
import { RenderFn } from "./RenderFn";

export const renderPerson: RenderFn<Person> = (obj: Person) => `${obj.forename} ${obj.surname}`;
