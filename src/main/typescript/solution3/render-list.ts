import { RenderFn } from "./RenderFn";

export const renderList: <T>(renderFn: RenderFn<T>) => (items: T[]) => string =
    <T>(renderFn: RenderFn<T>) =>
    (items: T[]) =>
        items.reduce((prev, current) => `${prev ? prev + ", " : ""}${renderFn(current)}`, "");
