import { SecretEncodeFn } from "./SecretEncodeFn";

export class Message {
    public text: string;
    private signature?: string;

    constructor(text?: string) {
        this.text = text ?? "Message";
    }

    public sign(encodeFn: SecretEncodeFn): Message {
        this.signature = encodeFn(this.text);
        return this;
    }

    public getSignature(): string | undefined {
        return this.signature;
    }
}
