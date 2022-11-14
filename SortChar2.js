const input = "Sample Case";
// const input = "Next Case";

function sortChar(words) {
  const cleanedWords = words.replace(/\s/g, "").toLowerCase();
  let vowelChars = [];
  let consonantChars = [];

  const isVowel = cleanedWords.match(/[aeiou]/g);
  for (i = 0; i < isVowel.length; i++) {
    const lastIndexChar = vowelChars.lastIndexOf(isVowel[i]);
    if (lastIndexChar < 0) {
      vowelChars.push(isVowel[i]);
    } else {
      vowelChars.splice(lastIndexChar + 1, 0, isVowel[i]);
    }
  }

  const isConsonant = cleanedWords.match(/[^aeiou]/g);
  for (i = 0; i < isConsonant.length; i++) {
    const lastIndexChar = consonantChars.lastIndexOf(isConsonant[i]);
    if (lastIndexChar < 0) {
      consonantChars.push(isConsonant[i]);
    } else {
      consonantChars.splice(lastIndexChar + 1, 0, isConsonant[i]);
    }
  }

  return `Vowel Characters : ${vowelChars.join(
    ""
  )}\nConsonant Characters : ${consonantChars.join("")}\n`;
}

console.log(sortChar(input));
