/* eslint-disable no-console */
import { Message } from "./Message";
import { signMessage } from "./sign-message";

const message = new Message(
    "The Top Secret Area is a hidden area filled with power-ups that Mario and Luigi can use. But, don't tell mom."
);
const signature = signMessage(message).getSignature();
console.log(`Signature is:`, signature);
