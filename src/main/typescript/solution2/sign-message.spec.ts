import { Message } from "./Message";
import { signMessage } from "./sign-message";

describe("sign", () => {
    it("calls sign function with secret and message", () => {
        const target = jest.fn();

        signMessage(new Message(), target);

        expect(target).toHaveBeenCalledWith("Message");
    });

    it("yields signature with message", () => {
        const target = new Message();

        signMessage(target);

        expect(target.getSignature()).toBe("215062215");
    });

    it("yields signature with message and custom encode function", () => {
        const target = new Message();

        signMessage(target, (text: string) => `expected:::${text}`);

        expect(target.getSignature()).toBe("expected:::Message");
    });
});
