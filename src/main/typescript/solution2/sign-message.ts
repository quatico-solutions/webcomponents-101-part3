import { hash } from "./hash";
import { Message } from "./Message";
import { EncodeFn } from "./EncodeFn";

export const signMessage = (
    message: Message,
    encodeFn: EncodeFn = (secret: string, text: string) => hash(`!!!${secret}:::${text}!!!`),
    secret?: string
): Message => {
    return message.sign((text: string) => encodeFn(secret ?? "my-super-secret", text));
};
