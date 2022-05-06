import { hash } from "./hash";
import { Message } from "./Message";

describe("Ctor", () => {
    it("yields defaults with no parameters", () => {
        const testObj = new Message();

        expect(testObj.getSignature()).toBeUndefined();
        expect(testObj.text).toBe("Message");
    });
});

describe("sign", () => {
    it("calls sign function with secret and text", () => {
        const target = jest.fn();

        new Message().sign(target);

        expect(target).toHaveBeenCalledWith("Message");
    });

    it("yields signed signature with text and encode function", () => {
        const target = (text: string) => hash(`!!!${text}!!!`);

        const testObj = new Message().sign(target);

        expect(testObj.getSignature()).toBe("243201490");
    });
});
