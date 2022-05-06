/* eslint-disable no-console */
import { Message } from "./Message";
import { MessageSigner } from "./MessageSigner";

const message = new Message(
    "The Top Secret Area is a hidden area filled with power-ups that Mario and Luigi can use. But, don't tell mom."
);
const signature = new MessageSigner("my-super-secret").sign(message).signature;
console.log(`Signature is:`, signature);
