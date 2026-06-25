var findDuplicates = function(nums) {
    let n = nums.length;
    let res = [];

    for(let i=0; i<n; i++) {
        let idx = Math.abs(nums[i]) - 1;

        if(nums[idx] < 0) {
            res.push(idx+1);
        } else {
            nums[idx] *= -1;
        }
    }

    return res;
};