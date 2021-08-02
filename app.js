const foods = ["pizza", "burger", "fingerChips", "donuts", "springRoll"];
// console.log(foods.slice(1, 4));

foods.splice(1, 0, "noodles", "icecream");
console.log(foods);

const numberArray = [12, 324, 213, 4, 2, 3, 45, 4234];

const isPrime = (n) => {
  if (n === 1) {
    return false;
  } else if (n === 2) {
    return true;
  } else {
    for (let i = 2; i < n; i++) {
      if (n % i === 0) {
        return false;
      }
    }
    return true;
  }
};

const newArr = numberArray.filter((n) => {
  return isPrime(n);
});
console.log(newArr);

let reject = numberArray.filter((n) => !isPrime(n));
console.log(reject);

function isEven(n) {
  if (n % 2 == 0) {
    return n;
  }
}

console.log(numberArray.filter((n) => isEven(n)));

let evenNumber = numberArray.filter((n) => {
  return n % 2 == 0;
});
console.log(evenNumber);

function findSquareOfNumbers(n) {
  return n * n;
}
const myArray = [11, 34, 20, 5, 53, 16];
console.log(myArray.map((n) => findSquareOfNumbers(n)));

function multiply(inital, n) {
  console.log("inital : " + inital + " n: " + n);
  return inital * n;
}
console.log(myArray.reduce(multiply));

// let multiplyNumber = myArray.map((n) => n * 2).filter((n) => n * 2);
// console.log(multiplyNumber);
