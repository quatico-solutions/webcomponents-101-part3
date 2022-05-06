package com.quatico.workshops.webcomponents.message;

import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.assertEquals;

class HashFnTests {
    @Test
    @DisplayName("returns hash code w/ valid string")
    void testReturnWithValue() {
        String actual = HashFn.apply("foobar");

        assertEquals("190746428", actual);
    }
    
    @Test
    @DisplayName("returns 1 w/ empty string")
    void testReturnWithEmpty() {
        String actual = HashFn.apply("");

        assertEquals("1", actual);
    }

    @Test
    @DisplayName("returns 1 w/ null")
    void testReturnWithNull() {
        String actual = HashFn.apply(null);

        assertEquals("1", actual);
    }
}