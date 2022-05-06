import { EncodeFn } from "./EncodeFn";

export class Message {
    public readonly text: string;
    private signature?: string;

    constructor(text?: string) {
        this.text = text ?? "Message";
    }

    public sign(secret: string, encodeFn: EncodeFn): Message {
        this.signature = encodeFn(secret, this.text);
        return this;
    }

    public getSignature(): string | undefined {
        return this.signature;
    }
}
