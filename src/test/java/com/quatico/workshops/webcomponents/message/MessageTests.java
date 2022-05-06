package com.quatico.workshops.webcomponents.message;

import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNull;
import static org.mockito.Mockito.mock;
import static org.mockito.Mockito.verify;
import static org.mockito.internal.verification.VerificationModeFactory.times;

class MessageTests {
    @Test
    @DisplayName("ctor yields default values with no parameters")
    void testCtorWithDefaults() {
        var testObj = new Message();

        assertNull(testObj.getSignature());
        assertEquals("Message", testObj.getText());
    }
    
    @Test
    @DisplayName("calls sign function with secret and text")
    void testCallsSignFunction() {
        var target = mock(EncodeFn.class);

        new Message().sign("expected-secret", target);

        verify(target, times(1)).apply("expected-secret", "Message");
    }
}
