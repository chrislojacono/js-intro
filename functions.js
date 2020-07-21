const nuggetizer = (animal) => {
  return `processed ${animal}`;
};

console.log(nuggetizer("pig"));
console.log(nuggetizer("fish"));
console.log(nuggetizer("chicken"));
console.log(nuggetizer("student"));

const numFunction = (num) => {
  return Number(num) + 42;
};
console.log(numFunction(34));

const howOld = (birthYear) => {
  return `In 2099 I will be ${2099 - birthYear}!`;
};

console.log(howOld(1992));
