var containsDuplicate = function(nums) {
    let mpp = new Map();

    for(let n of nums) {
        if(mpp.has(n)) {
            return true;
        }

        mpp.set(n);
    }

    return false;
};