function fibonacci(n) {
  if (n == 0) {
    return [0];
  }
  if (n == 1) {
    return [0, 1];
  }
  const fibo = fibonacci(n - 1);
  fibo[n] = fibo[n - 1] + fibo[n - 2];
  return fibo;
}

const fiboElement = fibonacci(6);
console.log(fiboElement);
