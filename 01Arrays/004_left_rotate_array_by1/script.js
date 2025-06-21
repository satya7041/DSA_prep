//  Left Rotate Array by 1
const arr = [1,2,3,4];
const first = arr[0];

// Remove first element and push it to the end
 arr.shift();
 arr.push(first)
console.log("Left rotated array by 1 is:", arr);
