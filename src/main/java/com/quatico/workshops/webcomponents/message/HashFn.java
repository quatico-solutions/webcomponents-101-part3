package com.quatico.workshops.webcomponents.message;

public class HashFn {
    public static String apply(String s) {
        var a = 1;
        var c = 0;
        int h;
        int o;
        if (s != null && s.length() > 0) {
            a = 0;
            for (h = s.length() - 1; h >= 0; h--) {
                o = Character.codePointAt(s, h);
                a = ((a << 6) & 268435455) + o + (o << 14);
                c = a & 266338304;
                a = c != 0 ? a ^ (c >> 21) : a;
            }
        }
        return String.valueOf(a);
    }
}

