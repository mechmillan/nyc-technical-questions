function sortByStrings(s, t) {
  let hash = {};

  // create hash of {'char1': indexAt, 'char2', indexAt, etc...}
  for (let i = 0; i < t.length; i++) {
    hash[t[i]] = i;
  }

  // str to arr, sort by hash indexAt
  let arr = Array.from(s);
  let sorted = arr.sort((a, b) => hash[a] > hash[b]).join("");
  return sorted;
}

// test1
let s = "good";
let t = "odg";
let sortedStr = sortByStrings(s, t);
console.log(`test1: The sorted string is: ${sortedStr}`);

// test2
let str = "weather";
let ord = "therapyw";
let sorted = sortByStrings(str, ord);
console.log(`test2: The sorted string is: ${sorted}`);
