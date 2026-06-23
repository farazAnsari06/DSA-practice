var subarraySum = function(nums, k) {
    let mpp = new Map();
    mpp.set(0, 1);

    let count = 0;
    let sum = 0;
    for(let i=0; i<nums.length; i++) {
        sum += nums[i];

        if(mpp.has(sum-k)) {
            count += mpp.get(sum-k);
        }

        mpp.set(sum, (mpp.get(sum) || 0) + 1);
    }

    return count;
};