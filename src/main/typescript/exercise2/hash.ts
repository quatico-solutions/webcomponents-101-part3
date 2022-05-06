export const hash = (value: string): string => {
    let result = 1;

    if (value) {
        result = 0;
        for (let idx = value.length - 1; idx >= 0; idx--) {
            const code = value.charCodeAt(idx);
            result = ((result << 6) & 268435455) + code + (code << 14);
            const temp = result & 266338304;
            result = temp !== 0 ? result ^ (temp >> 21) : result;
        }
    }
    return String(result);
};
