import { signMessage } from "./sign-message";
import { Message } from "./Message";
import { hash } from "./hash";

describe("sign", () => {
    it("calls sign function with secret and message", () => {
        const target = jest.fn();

        signMessage(new Message(), target, "expected-secret");

        expect(target).toHaveBeenCalledWith("expected-secret", "Message");
    });

    it("yields signature with message", () => {
        const target = new Message();

        signMessage(target, (secret: string, text: string) => hash(`!!!${secret}:::${text}!!!`));

        expect(target.getSignature()).toBe("3955296");
    });

    it("yields signature with secret and message", () => {
        const target = new Message();

        signMessage(target, (secret: string, text: string) => hash(`!!!${secret}:::${text}!!!`), "expected-secret");

        expect(target.getSignature()).toBe("21271659");
    });
});
