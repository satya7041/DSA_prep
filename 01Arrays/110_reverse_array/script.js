// Reverse an Array

const arr = [4,1,5,2,6];

console.log("Original array is: ", arr)
//using same variable
// for (let i = 0; i < arr.length-1; i++) {
//    let temp = arr[0];
//    arr.splice(0,1);
//    arr.splice(arr.length-i,0,temp);
    
// }

//another way without using splice
for (let i = 0; i < arr.length/2; i++) {
   let temp = arr[i];
   arr[i] = arr[arr.length-1-i];
   arr[arr.length-1-i] = temp;
   
}

console.log("Reverse array is: ", arr)