var majorityElement = function(nums) {
    let n = nums.length;
    
    let count = 1;
    let curEl = nums[0];

    for(let i=1; i<n; i++) {
        if(nums[i] === curEl) {
            count++;
        } else {
            count--;
        }

        if(count === 0) {
            count = 1;
            curEl = nums[i];
        }
    }

    return curEl;
};