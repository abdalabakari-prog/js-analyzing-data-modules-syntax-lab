// index.js

// Import datejs (already in package.json)
require('datejs');

function combineUsers(...args) {
  // Initialize return object
  const combinedObject = {
    users: []
  };

  // Loop through args and merge arrays into users
  for (let arr of args) {
    combinedObject.users.push(...arr);
  }

  // Add merge_date in M/d/yyyy format
  const today = new Date();
  combinedObject.merge_date = today.toString("M/d/yyyy");

  // Return the object
  return combinedObject;
}

// Example usage:
// const result = combineUsers(
//   ["Alice", "Bob"],
//   ["Charlie", "Dana"],
//   ["Eve"]
// );
// console.log(result);
// Output:
// {
//   users: ["Alice", "Bob", "Charlie", "Dana", "Eve"],
//   merge_date: "12/20/2025"
// }



module.exports = {
  ...(typeof combineUsers !== 'undefined' && { combineUsers })

};
