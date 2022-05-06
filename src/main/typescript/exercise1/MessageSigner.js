import { hash } from "./hash";

export class MessageSigner {
    constructor(secret, encodeFn = (secret, text) => hash(`!!!${secret}:::${text}!!!`)) {
        this.encodeFn = encodeFn;
        this.secret = secret;
    }

    sign(message) {
        return message.sign(this.secret, this.encodeFn);
    }
}
