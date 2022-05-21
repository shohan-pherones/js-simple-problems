// function largestElement(numbers) {
//   let largest = numbers[0];
//   for (let i = 0; i < numbers.length; i++) {
//     const element = numbers[i];
//     if (element > largest) {
//       largest = element;
//     }
//   }
//   return largest;
// }

// const myArray = [52, 55, 41, 74, 12, 13];
// const largestNumber = largestElement([-2, -1, -17]);
// console.log(largestNumber);

function largestNumber(numbers) {
  let largest = numbers[0];
  for (let i = 0; i < numbers.length; i++) {
    const element = numbers[i];
    if (element < largest) {
      largest = element;
    }
  }
  return largest;
}

const myArray = [-12, -9, -75, -3, -41];
const large = largestNumber(myArray);
console.log(large);
