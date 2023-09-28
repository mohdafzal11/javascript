function fibonacciMemoized(n, memo = {}) {
    if (n in memo) {
      console.log(memo);
      return memo[n];
    }
  
    if (n === 0) {
      return 0;
    } else if (n === 1) {
      return 1;
    }
  
    const result = fibonacciMemoized(n - 1, memo) + fibonacciMemoized(n - 2, memo);
    memo[n] = result;
    return result;
  }
  console.time();
  console.log(fibonacciMemoized(5)); // Output: 5 (0, 1, 1, 2, 3, 5)
  console.log(fibonacciMemoized(15));
  console.timeEnd();
  console.log("adsdasdsdasads")
  console.time();
  console.log(fibonacciMemoized(5)); // Output: 5 (0, 1, 1, 2, 3, 5)
  console.log(fibonacciMemoized(15));
  console.timeEnd();