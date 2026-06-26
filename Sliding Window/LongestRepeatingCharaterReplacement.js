class Solution {
    characterReplacement(s, k) {
        let n = s.length;

        let mpp = new Map();

        let maxFeq = 0;
        let maxLen = 0;

        let r = 0, l = 0;
        while(r<n) {
            mpp.set(s[r], (mpp.get(s[r]) || 0) + 1);
            maxFeq = Math.max(maxFeq, mpp.get(s[r]));

            if((r-l+1) - maxFeq > k) {
                mpp.set(s[l], mpp.get(s[l])-1);
                if(mpp.get(s[l]) === 0) {
                    mpp.delete(s[l]);
                }

                l++;
            }

            if((r-l+1) - maxFeq <= k) {
                maxLen = Math.max(maxLen, r-l+1);
            }

            r++;
        }

        return maxLen;
    }
}