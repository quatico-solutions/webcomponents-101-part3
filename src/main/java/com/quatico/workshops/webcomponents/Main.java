package com.quatico.workshops.webcomponents;

import com.quatico.workshops.webcomponents.message.Message;
import com.quatico.workshops.webcomponents.message.MessageSigner;

public class Main {
    public static void main(String[] args) {
        var message = new Message("The Top Secret Area is a hidden area filled with power-ups that Mario and Luigi can use. But, don't tell mom.");
        var signature = new MessageSigner("my-super-secret").sign(message).getSignature();
        System.out.println(String.format("Signature is: %s", signature));
    }
}

