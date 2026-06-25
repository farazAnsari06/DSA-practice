function maxSumSubarray(arr, k) {
    let left = 0;
    let windowSum = 0;
    let maxSum = -Infinity;

    for (let right = 0; right < arr.length; right++) {
        windowSum += arr[right];

        if (right - left + 1 === k) {
            maxSum = Math.max(maxSum, windowSum);

            windowSum -= arr[left];
            left++;
        }
    }

    return maxSum;
}