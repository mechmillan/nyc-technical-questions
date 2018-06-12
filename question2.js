function decodeString(str) {
  let result = "";

  // regex to remove '[' and ']' from string
  let cleanStr = str.replace(/[\[\]]/g, "");
  let factor;

  // iterate str in reverse
  for (let i = cleanStr.length - 1; i >= 0; i--) {
    let valToCheck = Number(cleanStr[i]);

    // check if char is an integer
    if (!isNaN(valToCheck)) {
      factor = valToCheck;

      // str -> arr, to use built-in arr reverse method
      let reversed = Array.from(result).reverse();
      // arr -> str, to use built-in str repeat method
      result = reversed.join("").repeat(factor);
    } else {
      result += cleanStr[i];
    }
  }

  return result;
}

// test1
let s1 = "4[ab]";
let result = decodeString(s1);
console.log(`test1: Resulting str: ${result}`);

// test2
let s2 = "2[b3[a]]";
let secResult = decodeString(s2);
console.log(`test2: Resulting str: ${secResult}`);

// test3
let s3 = "1[b5[c]]";
let thirdResult = decodeString(s3);
console.log(`test3: Resulting str: ${thirdResult}`);
