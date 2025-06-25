  // Remove_duplicates
  const word= "satyam";
  const lCaseWord = word.toLowerCase();
  let revDupli ="";
  for (let i = 0; i < lCaseWord.length; i++) {
    if (!revDupli.includes(lCaseWord[i])) {
      revDupli += lCaseWord[i];
    }
    
  }

  console.log("String after remove duplicate: ", revDupli)