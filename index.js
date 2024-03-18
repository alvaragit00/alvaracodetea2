// Helper function to calculate the factorial of a number
function factorial(n) {
    if (n === 0 || n === 1) {
      return 1;
    } else {
      return n * factorial(n - 1);
    }
  }
  
  // Helper function to check if a number is prime
  function isPrime(num) {
    if (num <= 1) {
      return false;
    }
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) {
        return false;
      }
    }
    return true;
  }
  
  // Helper function to reverse a string
  function reverseString(str) {
    return str.split('').reverse().join('');
  }
  
  // Testing the helper functions
  console.log(factorial(5)); // Output: 120
  console.log(isPrime(7)); // Output: true
  console.log(reverseString("hello")); // Output: "olleh"
  