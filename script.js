function firstNonRepeatedChar(str) {
 // Write your code here
	const charFrequency = {};

  // Populate charFrequency with character frequencies
  for (const char of str) {
    charFrequency[char] = (charFrequency[char] || 0) + 1;
  }

  // Iterate through the string to find the first non-repeated character
  for (const char of str) {
    if (charFrequency[char] === 1) {
      return char;
    }
  }

  // If no non-repeated character is found, return null
  return null;
}
const input = prompt("Enter a string");
alert(firstNonRepeatedChar(input)); 
