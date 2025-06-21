// Insert Element in Array (Linear Search)
let arr = [1,2,7,12,15];
const x = 13;

//insert at end

// arr.push(x);
// console.log(arr)

//insert at beginning
// arr.unshift(x);
// console.log(arr)

//insert at index
arr.splice(4,0,x);
console.log(arr)