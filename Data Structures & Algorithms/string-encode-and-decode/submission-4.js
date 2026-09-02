class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let ans = ""
        for (let str of strs) {
            let temp = "";
            for (let c of str) {
                const idx = c.charCodeAt(0);
                temp = temp + "," + idx;

            }
            ans = ans + '#'+ temp.slice(1)
        }
        // console.log('ans:',ans)
        return ans
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        if(str==='') return [];
        const strs = str.slice(1).split('#');
        //  console.log('strs:',strs)
        const ans = [];

        for(let strEncoded of strs){
            if(strEncoded.length ===0 ) {
                ans.push("")
                continue;
            }
            // ascii to char
            const nums = strEncoded.split(',')
            let temp = ''
            for(let num of nums){
                const ch = String.fromCharCode(num);
                temp = temp + ch;
            }
            // const temp = String.fromCharCode(nums);
            ans.push(temp)
        }

        return ans;
    }
}
