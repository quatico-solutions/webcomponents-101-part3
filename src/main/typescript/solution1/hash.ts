export const hash = (value: string): string => {
    let result = 1;

    if (value) {
        result = 0;
        for (let idx = value.length - 1; idx >= 0; idx--) {
            const unicode = value.charCodeAt(idx);
            result = ((result << 6) & 268435455) + unicode + (unicode << 14);
            const hashCode = result & 266338304;
            result = hashCode !== 0 ? result ^ (hashCode >> 21) : result;
        }
    }
    return String(result);
};
