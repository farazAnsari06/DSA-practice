var totalFruit = function(fruits) {
    let n = fruits.length;
    let mpp = new Map();

    let maxLen = 0;

    let r = 0, l = 0;
    while(r<n) {
        mpp.set(fruits[r], (mpp.get(fruits[r]) || 0) + 1);

        if(mpp.size > 2) {
            mpp.set(fruits[l], mpp.get(fruits[l]) - 1);
            if(mpp.get(fruits[l]) === 0) {
                mpp.delete(fruits[l]);
            }
            l++;
        }

        maxLen = Math.max(maxLen, r-l+1);

        r++;
    }

    return maxLen;
};