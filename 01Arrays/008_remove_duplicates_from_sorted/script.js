// Remove_duplicates_from_sorted

const arr = [1,2,2,2,3,4,5,5]; 

console.log("Original array: ", arr)

for (let i = 0; i < arr.length; i++) {
    if (arr[i] == arr[i+1]) {
        arr.splice(i,1);
        i--;  //used this because to check the element which 
        // is take place of removed element, if u want check then comment and write arr=[1,2,2,2,3,4,5],
    }    
}
console.log("Array after duplicate removed: ", arr)