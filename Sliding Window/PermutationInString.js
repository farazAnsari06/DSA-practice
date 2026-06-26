var checkInclusion = function(s1, s2) {
    let n = s1.length;
    let m = s2.length;

    if(n > m) return false;

    let need = Array(26).fill(0);
    let window = Array(26).fill(0);

    for(let i=0; i<n; i++) {
        need[s1[i].charCodeAt(0) - 'a'.charCodeAt(0)]++;
        window[s2[i].charCodeAt(0) - 'a'.charCodeAt(0)]++;
    }

    if(checkSame(need, window)) return true;

    for(let i=n; i<m; i++) {
        window[s2[i].charCodeAt(0) - 'a'.charCodeAt(0)]++;
        window[s2[i-n].charCodeAt(0) - 'a'.charCodeAt(0)]--;

        if(checkSame(need, window)) {
            return true;
        }
    }

    return false;
};

const checkSame = (need, window) => {
    for(let i=0; i<26; i++) {
        if(need[i] !== window[i]) return false;
    }

    return true;
}