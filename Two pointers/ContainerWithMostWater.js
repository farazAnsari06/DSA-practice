var maxArea = function(height) {
    let n = height.length;

    let maxArea = 0;
    let i = 0, j = n-1;
    while(i<j) {
        let width = j - i;
        let heightt = Math.min(height[i], height[j]);
        maxArea = Math.max(maxArea, width * heightt);

        if(height[i] <= height[j]) {
            i++;
        } else {
            j--;
        }
    }

    return maxArea;
};