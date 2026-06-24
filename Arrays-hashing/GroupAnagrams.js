var groupAnagrams = function(strs) {
    let mpp = new Map();

    for(let s of strs) {
        let key = s.split('').sort().join('');
        if(!mpp.has(key)) {
            mpp.set(key, []);
        }
        mpp.get(key).push(s);
    }

    let res = [];
    
    for(let [key, value] of mpp) {
        res.push(value);
    }

    return res;
};