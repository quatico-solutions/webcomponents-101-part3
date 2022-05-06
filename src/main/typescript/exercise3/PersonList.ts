import { Person } from "./Person";
import { PersonListItem } from "./PersonListItem";
import { ViewList } from "./ViewList";

export class PersonList extends ViewList<Person, PersonListItem> {}
