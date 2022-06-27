import { SecretEncodeFn } from "../SecretEncodeFn";
import { hash } from "./hash";

export const encode: SecretEncodeFn = text => {
    const defaultSecret = "public1234";
    return hash(`!!!${process.env.ENCODING_SECRET ?? defaultSecret}:::${text}!!!`);
};
