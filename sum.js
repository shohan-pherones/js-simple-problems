function sumOfArray(numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    const element = numbers[i];
    sum = sum + element;
  }
  return sum;
}

const myArray = [12, 54, 75, 13, 65, 14];
const total = sumOfArray(myArray);
console.log(total);
