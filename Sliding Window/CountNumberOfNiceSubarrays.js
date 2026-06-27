var numberOfSubarrays = function(nums, k) {
    let mpp = new Map();
    mpp.set(0,1);

    let sum = 0;
    let subArr = 0;
    for(let i=0; i<nums.length; i++) {
        if(nums[i] % 2 === 1) {
            sum++;
        }

        if(mpp.has(sum - k)) {
            subArr += mpp.get(sum-k);
        }

        mpp.set(sum, (mpp.get(sum) || 0) + 1);
    }

    return subArr;
};