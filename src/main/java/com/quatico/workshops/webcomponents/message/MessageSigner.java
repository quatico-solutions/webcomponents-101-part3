package com.quatico.workshops.webcomponents.message;

public class MessageSigner {
    private final EncodeFn encodeFn;
    private final String secret;

    public MessageSigner(String secret) {
        this(secret, (String sec, String text) -> HashFn.apply(sec + text + sec));
    }

    public MessageSigner(String secret, EncodeFn encodeFn) {
        this.encodeFn = encodeFn;
        this.secret = secret;
    }

    public Message sign(Message message) {
        return message.sign(this.secret, this.encodeFn);
    }
}
