class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        // str => len#str
        let ans = '';

        for(let str of strs){
            const len = str.length;
            ans += `${len}#${str}`
        }

        return ans
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        console.log('str:',str)
        let ans = [];
        let pre = ''
        for(let i=0; i<str.length;){
            if(str[i] === '#') {
                const len = Number(pre)
                pre = '';
                const curStr = str.slice(i+1,i + 1 + len);
                ans.push(curStr)
                i+=len+1;
            }else {
                pre = pre + str[i];
                i+=1;
            }
        }

        return ans;
    }
}
