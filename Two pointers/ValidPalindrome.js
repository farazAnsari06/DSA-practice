var isPalindrome = function(s) {
    s = s.toLowerCase().replace(/[^a-z0-9]/g, "");

    let str = 0, end = s.length-1;
    while(str<=end) {
        if(s[str] !== s[end]) return false;
        str++;
        end--;
    }

    return true;
};