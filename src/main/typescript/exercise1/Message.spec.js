import { hash } from "./hash";
import { Message } from "./Message";

describe("Ctor", () => {
    it("yields defaults with no parameters", () => {
        const testObj = new Message();

        expect(testObj.signature).toBeUndefined();
        expect(testObj.text).toBe("Message");
    });
});

describe("sign", () => {
    it("calls sign function with secret and text", () => {
        const target = jest.fn();

        new Message().sign("expected-secret", target);

        expect(target).toHaveBeenCalledWith("expected-secret", "Message");
    });

    it("yields signed signature with secret, text and encode function", () => {
        const target = (secret, text) => hash(`!!!${secret}:::${text}!!!`);

        const testObj = new Message().sign("expected-secret", target);

        expect(testObj.signature).toBe("21271659");
    });
});
