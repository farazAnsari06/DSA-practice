var minWindow = function(s, t) {
    let n = s.length;
    let mpp = Array(256).fill(0);

    for(let i=0; i<t.length; i++) {
        mpp[t[i].charCodeAt(0)]++;
    }

    let minlen = Infinity;
    let sIdx = -1;
    let count = 0;

    let r = 0, l = 0;
    while(r<n) {
        if(mpp[s[r].charCodeAt(0)] > 0) {
            count++;
        }
        mpp[s[r].charCodeAt(0)]--;

        while(count === t.length) {
            if(r - l + 1 < minlen) {
                minlen = r - l + 1;
                sIdx = l;
            }
            mpp[s[l].charCodeAt(0)]++;
            if(mpp[s[l].charCodeAt(0)] > 0) {
                count--;
            }
            l++;
        }
        r++;
    }

    return sIdx === -1 ? '' : s.substring(sIdx, sIdx+minlen)
};