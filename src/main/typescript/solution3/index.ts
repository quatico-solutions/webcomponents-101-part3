/* eslint-disable no-console */
import { renderPerson } from "./render-person";
import { renderList } from "./render-list";

const people = renderList(renderPerson)([
    { forename: "Jane", surname: "Doe" },
    { forename: "Joe", surname: "Average" },
]);

console.log("People:", people);
