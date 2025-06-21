// 005_move_zero_to_end
const arr = [1,0,2,3,4];

for (let i = arr.length-1 ; i >=0; i--) {
    if (arr[i] == 0) {
      let zero = arr[i];
      arr.splice(i, 1);
      arr.push(zero);
  }
    
}
 
console.log("zero element moved at end: ", arr);
