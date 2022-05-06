export interface ViewListItem<T> {
    readonly item: T;

    render(): string;
}
