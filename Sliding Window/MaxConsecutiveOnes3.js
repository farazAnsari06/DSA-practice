var longestOnes = function(nums, k) {
    let n = nums.length;

    let zeros = 0;

    let max = 0;
    let r = 0, l = 0;
    while(r<n) {
        if(nums[r] === 0) {
            zeros++;
        }

        if(zeros > k) {
            if(nums[l] === 0) {
                zeros--;
            }
            l++;
        }

        max = Math.max(max, r - l + 1);
        r++;
    }

    return max;
};