class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        const cA = "A".charCodeAt(0),
            cZ = "Z".charCodeAt(0),
            ca = "a".charCodeAt(0),
            cz = "z".charCodeAt(0),
            c0 = "0".charCodeAt(0),
            c9 = "9".charCodeAt(0);

        let l = 0,
            r = s.length - 1;

        while (l < r) {
            let lCode = getCode(s[l]);
            if (lCode === -1) {
                l += 1;
                continue;
            }
            let rCode = getCode(s[r]);

            if (rCode === -1) {
                r -= 1;
                continue;
            }

            if (lCode !== rCode) return false;
            l += 1;
            r -= 1;
        }

        return true;

        function getCode(char) {
            let code = char.charCodeAt(0);
            if (ca <= code && code <= cz) return code - 32;
            if (cA <= code && code <= cZ) return code;
            if (c0 <= code && code <= c9) return code;
            return -1;
        }
    }
}
