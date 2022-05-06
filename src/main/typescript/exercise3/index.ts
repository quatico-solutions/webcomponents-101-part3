/* eslint-disable no-console */
import { PersonList } from "./PersonList";
import { PersonListItem } from "./PersonListItem";

const personList = new PersonList([
    new PersonListItem({ forename: "Jane", surname: "Doe" }),
    new PersonListItem({ forename: "Joe", surname: "Average" }),
]);

const people = personList.render();
console.log("People:", people);
