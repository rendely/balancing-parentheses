function balancingParentheses(string) {
  const [unopenedFront] = string.match(/^\)+/) || [''];
  const [unopenedBack] = string.match(/\(+$/) || [''];
  const left = string.match(/\(/g) || '';
  const right = string.match(/\)/g) || '';
  return unopenedFront.length + unopenedBack.length + Math.abs((left.length - unopenedBack.length)  - (right.length - unopenedFront.length))
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 0");
  console.log(balancingParentheses('(()())'));

  console.log("");

  console.log("Expecting: 2");
  console.log(balancingParentheses('()))'));

  console.log("");

  console.log("Expecting: 1");
  console.log(balancingParentheses(')'));
}

module.exports = balancingParentheses;

// Please add your pseudocode to this file
// And a written explanation of your solution
//Approach idea 1, outside in - won't work because some are serial not nested
//Approach idea 2, just count each, this might technically work given test setup