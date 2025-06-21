// Find Element in Array (Linear Search)
let arr = [10,20,40,22,12,4];
const key = 40;  //find
let found = false;


    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === key ) {
         found = true;
         break;
          
        }
        
      }     

console.log("Found? ",found)