class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        // len#str
        let ans = '';

        for(let str of strs){
            ans += `${str.length}#${str}`
        }

        return ans;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        // len#XXlen#YYY

        let ans = []

        let pre = 0;
        for(let i=0;i<str.length;){
            if(str[i] ==='#'){
                ans.push(str.slice(i+1,i+1+pre))
                i+=1+pre;
                pre = 0;
            }else {
                pre = pre*10 + +str[i];
                i+=1;
            }
        }
        return ans;
    }
}
