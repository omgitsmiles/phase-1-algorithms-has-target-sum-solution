function hasTargetSum(array, target) {
  // create empty object
  let iteratedNum = {}
  // for loop
  for (let i = 0; i < array.length; i++) {
    // create a complement num 
    let complement = target - array[i]
    // if num in iteratedNum obj matches complement return true
    if (iteratedNum[complement]) return true
    // otherwise add the num into the obj
    iteratedNum[array[i]] = true
  }
  return false
}

/* 
  Write the Big O time complexity of your function here
  O(n^2)
*/

/* 
  Add your pseudocode here
  use linear big O notation to improve run time
  declare an empty object
  for loop
  declare a variable where target - array[i]
  if key value matches complement num return true
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
