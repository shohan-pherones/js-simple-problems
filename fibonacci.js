// function fibonacci(series) {
//   const fibo = [0, 1];
//   for (let i = 2; i <= series; i++) {
//     fibo[i] = fibo[i - 1] + fibo[i - 2];
//   }
//   return fibo;
// }

// const mySeries = "a";
// const myFibo = fibonacci(mySeries);
// console.log(myFibo);

function fibonacci(series) {
  if (typeof series != "number") {
    return "Please give a number!";
  }
  if (series < 2) {
    return "Please enter a positive number greater than 1!";
  }
  const fibo = [0, 1];
  for (let i = 2; i <= series; i++) {
    fibo[i] = fibo[i - 1] + fibo[i - 2];
  }
  return fibo;
}

const mySeries = 3;
const myFibo = fibonacci(mySeries);
console.log(myFibo);
