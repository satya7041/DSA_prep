// Check palindrome-	Same forward and backward

const word = "Level";
//for case sensitive
const exactWord = word.toLowerCase();
let rev = "";
for (let i = exactWord.length-1; i >=0; i--) {
  rev +=exactWord[i];
}
if (rev === exactWord) {
  console.log("palindrome")
}else {

  console.log("non-palindrome")
}
