/**
 * Direction:
 * Find prefix of the word from array of string
 *
 * Expected Result:
 * fl
 */
const words = ['flower', 'flow', 'flight'];

function result(words) {
  // Your Code Here
  if (!words.length) return '';

  let prefix = words[0]

  for (let i = 1; i < words.length; i++) {
    while(words[i].indexOf(prefix) !== 0) {
      prefix = prefix.slice(0, -1);

      if (!prefix) return '';
    }
  }

  return prefix;
}

console.log(result(words));
