const input = "Sample Case";
// const input = "Next Case";

function isVowel(char) {
  let result;
  result =
    char == "a" || char == "i" || char == "u" || char == "e" || char == "o";
  return result;
}

function sortChar(words) {
  const cleanedWords = words.toLowerCase().replace(/\s+/g, "").split("");
  let vowelChars = [];
  let consonantChars = [];
  for (let i = 0; i < cleanedWords.length; i++) {
    if (isVowel(cleanedWords[i])) {
      const lastIndexChar = vowelChars.lastIndexOf(cleanedWords[i]);
      if (lastIndexChar < 0) {
        vowelChars.push(cleanedWords[i]);
      } else {
        vowelChars.splice(lastIndexChar + 1, 0, cleanedWords[i]);
      }
    } else {
      const lastIndexChar = consonantChars.lastIndexOf(cleanedWords[i]);
      if (lastIndexChar < 0) {
        consonantChars.push(cleanedWords[i]);
      } else {
        consonantChars.splice(lastIndexChar + 1, 0, cleanedWords[i]);
      }
    }
  }

  return `Vowel Characters : ${vowelChars.join(
    ""
  )}\nConsonant Characters : ${consonantChars.join("")}\n`;
}

console.log(sortChar(input));
