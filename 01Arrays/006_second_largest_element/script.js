// 005_move_zero_to_end
const arr = [1,0,2,3,4];

arr.sort((a,b)=> a-b)
console.log("sorted array are: ", arr)
console.log("second largest element of array is : ", arr[arr.length-2]);


// let arr3 = [3,20,10,4];
// arr3.sort(); //don't use like this because it gives [10,20,3,4]
// console.log("sort array are: ", arr3)