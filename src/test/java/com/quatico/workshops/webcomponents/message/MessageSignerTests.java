package com.quatico.workshops.webcomponents.message;

import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.ArgumentMatchers.anyString;
import static org.mockito.Mockito.*;


class MessageSignerTests {
    @Test
    @DisplayName("calls sign function with secret and message")
    void testCallsSignFunction() {
        var target = mock(EncodeFn.class);

        var testObj = new MessageSigner("expected-secret", target);

        testObj.sign(new Message());

        verify(target, times(1)).apply(anyString(), anyString());
    }
    
    @Test
    @DisplayName("yields signature with secret and message")
    void testYieldsSignature() {
        var target = new Message();
        var testObj = new MessageSigner("expected-secret");

        testObj.sign(target);

        assertEquals("208461894", target.getSignature());
    }
}