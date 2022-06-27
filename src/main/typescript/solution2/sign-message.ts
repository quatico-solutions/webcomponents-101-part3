import { Message } from "./Message";
import { SecretEncodeFn } from "./SecretEncodeFn";
import { encode } from "./secret-encode";

export const signMessage = (message: Message, encodeFn?: SecretEncodeFn): Message => message.sign(encodeFn ?? encode);
