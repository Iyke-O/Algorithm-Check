let sentence = "C Ronaldo is the GOAT of football.";
let lengthOfSentence = sentence.length;
let wordCount = sentence.split(" ").length;
let vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
let vowelCount = 0;

for (let char of sentence) {
    if (vowels.includes(char)) {
        vowelCount++;
    }
}

console.log("Length of the sentence:", lengthOfSentence);
console.log("Number of words in the sentence:", wordCount);
console.log("Number of vowels in the sentence:", vowelCount);


