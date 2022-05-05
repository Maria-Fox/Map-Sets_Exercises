// 1.

// creates a new Set with {1,2,3,4}

// 2.
// ["ref"] - it's a set, no duplicates

//3.
// m {[1,2,3], "true"}
//   {[1,2,3], "false"}

//4. Has Duplicate

const hasDuplicate = (arr) => new Set(arr).size !== arr.length;

// hasDuplicate([7,8,9])

//Vowel Count

//first- see if letter is a vowel

function isVowel(char) {
  const vowels = "aeiou";
  return vowels.includes(char); //return if true
}

function vowelCount(str) {
  let casedChar = char.toLowerCase();
  const vowelMap = new Map(); //empty

  for (let char of str) {
    // refers to above function - if yes a vowel...
    if (isVowel(casedChar)) {
      if (vowelMap.has(casedChar)) {
        // checks map for character/ letter
        vowelMap.set(casedChar, vowelMap.get(casedChar) + 1);
      } else {
        vowelMap.set(casedChar, 1);
        // if this is the first count- initiate at 1
      }
    }
  }
  return vowelMap;
}

// set vowels, checks to see if value is vowel
// loop thru str pulling values/ vowels that return true
// initiate Map
// checks map to see if value/ character is in the map
// if so- count++, if not initiate at 1
