/**
 * Direction:
 * Find missing number from the list
 *
 * Expected Result:
 * 8
 */
const numbers = [9, 6, 4, 2, 3, 5, 7, 0, 1];

function result(numbers) {
  // Your Code Here
  const n = numbers.length + 1;
  const expectedSum = (n*(n+1) / 2);
  const actualSum = numbers.reduce((sum, num) => sum + num, 0);
  return expectedSum - actualSum;
}

console.log(result(numbers));
