import { hash } from "./hash";
import { Message } from "./Message";

describe("Ctor", () => {
    it("yields defaults with no parameters", () => {
        const testObj = new Message();

        expect(testObj.getSignature()).toBeUndefined();
        expect(testObj.text).toBe("Message");
    });

    it("yields argument values with text parameter", () => {
        const testObj = new Message("expected");

        expect(testObj.text).toBe("expected");
        expect(testObj.getSignature()).toBeUndefined();
    });
});

describe("sign", () => {
    it("calls sign function with secret and text", () => {
        const target = jest.fn();

        new Message().sign("expected-secret", target);

        expect(target).toHaveBeenCalledWith("expected-secret", "Message");
    });

    it("yields signed signature with secret, text and encode function", () => {
        const target = (secret: string, text: string) => hash(`!!!${secret}:::${text}!!!`);

        const testObj = new Message().sign("expected-secret", target);

        expect(testObj.getSignature()).toBe("21271659");
    });
});
