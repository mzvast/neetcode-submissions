class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        s = s.toLocaleLowerCase()
        const ca = "a".charCodeAt(0),
            cz = "z".charCodeAt(0),
            c0 = "0".charCodeAt(0),
            c9 = "9".charCodeAt(0);

        let l = 0, r = s.length-1;

        while(l<r){
            if(!isValid(s[l])  ) {
                l+=1;
                continue;
            }

             if(!isValid(s[r])) {
                r-=1;
                continue;
            }

            if(s[l]!==s[r]) return false;
            l+=1;
            r-=1;
        }

        return true

        function isValid(char) {
            let code = char.charCodeAt(0);
            if (
                (code >= ca && code <= cz) ||
                (code >= c0 && code <= c9)
            ) {
                return true;
            }
        }
    }
}
