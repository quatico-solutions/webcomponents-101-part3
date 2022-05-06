import { hash } from "./hash";
import { Message } from "./Message";
import { EncodeFn } from "./EncodeFn";

export class MessageSigner {
    private readonly encodeFn: EncodeFn;
    private readonly secret: string;

    constructor(
        secret: string,
        encodeFn: EncodeFn = (secret: string, text: string) => hash(`!!!${secret}:::${text}!!!`)
    ) {
        this.encodeFn = encodeFn;
        this.secret = secret;
    }

    public sign(message: Message): Message {
        return message.sign(this.secret, this.encodeFn);
    }
}
