export interface EncodeFn {
    (secret: string, text: string): string;
}
