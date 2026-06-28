var maxSlidingWindow = function(nums, k) {
    let n = nums.length;

    let queue = [];
    let ans = [];

    for(let i=0; i<n; i++) {
        while(queue.length > 0 && nums[queue[queue.length-1]] <= nums[i]) {
            queue.pop();
        }

        queue.push(i);

        if(queue[0] <= i-k) {
            queue.shift();
        }

        if(i >= k-1) {
            ans.push(nums[queue[0]]);
        }
    }

    return ans;
};