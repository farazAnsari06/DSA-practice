class Solution {
    longestSubarray(nums, k) {
       let n = nums.length;
       let mpp = new Map();

       let sum = 0;
       let maxLen = 0;

       for(let i=0; i<n; i++) {
          sum += nums[i];

          if(sum === k) {
            maxLen = Math.max(maxLen, i+1);
          }

          if(mpp.has(sum-k)) {
            maxLen = Math.max(maxLen, i - mpp.get(sum-k));
          }

          if(!mpp.has(sum)) {
            mpp.set(sum, i);
          }
       }

       return maxLen;
    }
}