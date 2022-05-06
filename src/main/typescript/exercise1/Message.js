export class Message {
    constructor(text) {
        this.text = text ?? "Message";
    }

    sign(secret, encodeFn) {
        this.signature = encodeFn(secret, this.text);
        return this;
    }
}
