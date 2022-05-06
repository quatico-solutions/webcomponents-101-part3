package com.quatico.workshops.webcomponents.message;

public class Message {
    private String text;
    private String signature;

    public Message() {
        this("Message");
    }

    public Message(String text) {
        this.text = text;
    }


    public Message sign(String secret, EncodeFn encodeFn) {
        this.signature = encodeFn.apply(secret, this.text);
        return this;
    }

    public String getSignature() {
        return this.signature;
    }

    public String getText() {
        return this.text;
    }
}
