import { ViewListItem } from "./ViewListItem";

export class ViewList<T, TListItem extends ViewListItem<T>> {
    public readonly items: TListItem[];

    public constructor(items: TListItem[]) {
        this.items = items;
    }

    public render(): string {
        return this.items.reduce((prev, current) => `${prev ? prev + ", " : ""}${current.render()}`, "");
    }
}
