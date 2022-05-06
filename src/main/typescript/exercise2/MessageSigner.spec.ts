import { MessageSigner } from "./MessageSigner";
import { Message } from "./Message";

describe("sign", () => {
    it("calls sign function with secret and message", () => {
        const target = jest.fn();
        const testObj = new MessageSigner("expected-secret", target);

        testObj.sign(new Message("expected"));

        expect(target).toHaveBeenCalledWith("expected-secret", "expected");
    });

    it("yields signature with secret and message", () => {
        const target = new Message();
        const testObj = new MessageSigner("expected-secret");

        testObj.sign(target);

        expect(target.getSignature()).toBe("21271659");
    });
});
