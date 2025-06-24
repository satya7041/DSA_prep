// Character frequency	Count chars using map or array
const word = "sSatyam";
let freq ={};

for (const element of word) {
  let value =element
if (freq[value]) {
  freq[value] ++
} else {
  freq[value] = 1;
}
}
console.log(freq)