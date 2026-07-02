var threeSum = function(nums) {
    nums = nums.sort((a,b) => a-b);

    let res = [];

    for(let i=0; i<nums.length; i++) {
        if(i > 0 && nums[i] === nums[i-1]) continue;
        let j = i+1, k = nums.length-1;
        while(j<k) {
            let sum = nums[i] + nums[j] + nums[k];

            if(sum > 0) {
                k--
                while(j<k && nums[k] === nums[k+1]) k--;
            } else if(sum < 0) {
                j++;
                while(j<k && nums[j] === nums[j-1]) j++;
            } else {
                res.push([nums[i], nums[j], nums[k]]);
                j++;
                k--;
                while(j<k && nums[k] === nums[k+1]) k--;
                while(j<k && nums[j] === nums[j-1]) j++;
            }
        }
    }

    return res;
};