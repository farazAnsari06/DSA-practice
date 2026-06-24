var topKFrequent = function(nums, k) {
    let mpp = new Map();

    for(let n of nums) {
        mpp.set(n, (mpp.get(n) || 0) + 1);
    }

    let bucket = Array(nums.length+1).fill().map(() => []);

    for(let [num, count] of mpp) {
        bucket[count].push(num);
    }

    let res = [];

    for(let i=bucket.length-1; i>=0 && res.length < k; i--) {
        for(let n of bucket[i]) {
            res.push(n);
        }
    }

    return res;
};