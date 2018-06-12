function changePossibilities(amount, denominations) {
  // can utilize dynamic programming approach

  // initialize array of (amount + 1) length to all 0s
  let possibilities = Array(amount + 1).fill(0);

  // only 1 way to make '0' amount -> don't use any coins
  possibilities[0] = 1;

  // for each denomination, update how many ways to make amounts: 1 to amount+1
  for (let outer = 0; outer < denominations.length; outer++) {
    for (let amt = 1; amt < amount + 1; amt++) {
      if (denominations[outer] <= amt) {
        possibilities[amt] += possibilities[amt - denominations[outer]];
      }
    }
  }

  // for debugging
  // console.log('possibilities:', possibilities)
  return possibilities[amount];
}

// test1
let n = 4;
let arr = [1, 2, 3];
let result = changePossibilities(n, arr);
console.log(`test1: Number of ways to make change: ${result}`);
