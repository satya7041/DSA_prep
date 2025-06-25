// Count Vowels, Consonants	--- vowels- a,e,i,o,u and except vowels all are consonants

const word = "Monalisa";
const updateWord = word.toLowerCase().trim();
let vowels= 0;
let consonants = 0;

// but this count space,punctuations and number as consonant as well

// for (let i = 0; i < updateWord.length; i++) {
//   if (updateWord[i] == 'a' ||
//      updateWord[i] == 'e' ||
//       updateWord[i] == 'i' ||
//        updateWord[i] == 'o' ||
//         updateWord[i] == 'u') {
//     vowels++;
//   } else{

//     consonants++;
//   } 
// }

// console.log(`In ${updateWord} word, vowels: ${vowels} and consonants: ${consonants} including repeated characters.`)

// this will not count numbers,space and punctuation(like- ,.?/ etc)

for (let i = 0; i < updateWord.length; i++) {
  const char = updateWord[i];
  if (char >= 'a' && char <= 'z') //char should be greater than equal to a and less than equal to z
  if ('aeiou'.includes(char)) {
    vowels++;
  } else{

    consonants++;
  } 
}

console.log(`In ${updateWord} word, vowels: ${vowels} and consonants: ${consonants} including repeated characters.`)