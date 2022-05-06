package com.quatico.workshops.webcomponents.message;

@FunctionalInterface
public interface EncodeFn {
    String apply(String secret, String text);
}
