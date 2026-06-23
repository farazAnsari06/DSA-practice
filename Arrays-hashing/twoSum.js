var twoSum = function(nums, target) {
    let mpp = new Map();

    for(let i=0; i<nums.length; i++) {
        if(mpp.has(target - nums[i])) {
            return [mpp.get(target-nums[i]), i];
        }

        mpp.set(nums[i], i);
    }

    return [-1,-1];
};