var longestConsecutive = function(nums) {
    let set = new Set();
    let maxCount = 0;
    for(let n of nums) {
        set.add(n);
    }

    for(let n of set) {
        if(!set.has(n-1)) {
            let num = n;
            let count = 0;

            while(set.has(num)) {
                count++;
                num++;
            }

            maxCount = Math.max(maxCount, count);
        }
    }

    return maxCount;
};