// console.log("I need Arrays!!");

// // Split

// const bestfriend = "Trinity";

// const bestFriendArray = bestfriend.split("");

// console.log("My best friend in array format", bestFriendArray);

// // Join

// const array2 = ["cow", "dog", "cat"];
// const string = array2.join(",");
// console.log(string);
// console.log(string.split(","));

// // Pop
// const animals = ["cow", "dog", "cat"];
// const lastAnimal = animals.pop();

// console.log("animals", animals);

// // SHIFT

// const first = animals.shift();

// console.log(first);

// // Unshift

// animals.unshift("bear");
// console.log(animals);
// animals.push("mouse");
// console.log(animals);

// const valueMaker = (arr, index) => {
//   return arr[index];
// };
// console.log(valueMaker(animals, 2));

const names = ["Bob", "Greg", "Michael"];

const wheresGreg = (array) => {
  return array.includes("Greg");
};
console.log(wheresGreg(names));



