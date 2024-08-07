/**
 * Direction:
 * Remove key that have null or undefined value
 *
 * Expected Result:
 * [
 *   { session_name: 'first test', classes: [{ students: [{ student_name: 'budi' }] }] },
 *   { classes: [{ class_name: 'second class', students: [{ student_name: 'adi' }] }] },
 * ]
 */
const data = [
  { session_name: 'first test', classes: [{ class_name: undefined, students: [{ student_name: 'budi' }] }] },
  { session_name: null, classes: [{ class_name: 'second class', students: [{ student_name: 'adi' }] }] },
];

function result(data) {
  // Your Code Here
  let res = []
  
  for (const item of data) {
    if (item.classes.length > 0) {
      let classes = []
      for (let classItem of item.classes) {
        const cleanClass = Object.fromEntries(
          Object.entries(classItem).filter(([key, value]) => value !== null && value !== undefined)
        )
        classes.push(cleanClass)
      }
      item.classes = classes;
    }
    
    let cleanObj = Object.fromEntries(
      Object.entries(item).filter(([key, value]) => value !== null && value !== undefined)
    );
    
    res.push(cleanObj)
  }
  
  return res;
}

console.log(result(data));
