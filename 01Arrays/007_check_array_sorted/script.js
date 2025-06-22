// check_array_sorted

const arr = [1,4,5,6,7];
let isSorted = true;
for (let i = 0; i < arr.length; i++) {
    if (arr[i] > arr[i+1]) {
        boolean= false;
        break;
    }
   
}
console.log("Array is sorted? ", isSorted  )