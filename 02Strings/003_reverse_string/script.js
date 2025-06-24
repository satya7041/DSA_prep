// Reverse string

// 	Manual reverse 

// const word = "satyam";
// let rev="";
// for (let index = word.length-1; index >=0; index--) {
//   rev += word[index];
// }
// console.log(rev)  

//  built-in reverse
const word = "satyam";
let rev=[];
for (let index = word.length-1; index >=0; index--) {
  rev.push(word[index]);
}
console.log(rev)  