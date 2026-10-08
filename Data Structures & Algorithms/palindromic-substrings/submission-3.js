class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    countSubstrings(s) {
        // two pointers

        const n = s.length;
        let cnt = 0;

        function count(l,r){
            // l<--->r
            while(l>=0&&r<n){
                if(s[l]!==s[r]) break;
                cnt+=1;
                l-=1;
                r+=1;
            }
        }

        for(let i=0;i<n;i++){
            count(i,i);
            count(i,i+1);
        }

        return cnt;
    }
}
