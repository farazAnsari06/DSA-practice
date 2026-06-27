var numSubarraysWithSum = function(nums, goal) {
    let n = nums.length;

    let mpp = new Map();
    mpp.set(0,1);

    let sum = 0;
    let subarrays = 0;
    for(let i=0; i<n; i++) {
        sum += nums[i];

        if(mpp.has(sum - goal)) {
            subarrays += mpp.get(sum - goal);
        };

        mpp.set(sum, (mpp.get(sum) || 0) + 1);
    }

    return subarrays;
};