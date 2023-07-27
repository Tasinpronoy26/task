// Task 1 : Create a function that takes a string as input and returns the reversed version of the string without using the built-in reverse() method.


function reverse(str) {
    let reversedString = '';

    for (let i = str.length - 1; i >= 0; i--) {
        reversedString += str.charAt(i);
    }

    return reversedString;
}


const originalString = 'Hello, World!';
const reversed = reverse(originalString);
console.log(reversed);




// Task 2 : Create a function that takes an array of numbers as input and returns the sum of all positive numbers in the array. 


const positive = (arr) => arr.reduce((prev, current) => current > 0 ? prev + current : prev, 0)

const arr = [2, -5, 10, -3, 7, 2, 4, 5, 6];

console.log(positive(arr));



// Task 3: Write a JavaScript program to find the most frequent element in an array and return it.


const findMostFrequentElement = (arr) => {

    const elementCounts = new Map();


    arr.forEach((element) => {
      const count = elementCounts.get(element) || 0;
      elementCounts.set(element, count + 1);
    });


    const mostFrequentElement = [...elementCounts.entries()].reduce(
      (prev, curr) => (curr[1] > prev[1] ? curr : prev)
    )[0];

    return mostFrequentElement;
  };


  const array =  [3, 5, 2, 5, 3, 3, 1, 4, 5];
  const mostFrequent = findMostFrequentElement(array);
  console.log(mostFrequent);



// Task 4: Create a function that takes a sorted array of numbers and a target value as input. The function should find two numbers in the array that add up to the target value. Return an array containing the indices of the two numbers.




// Task 5: Implement a simple JavaScript calculator. The calculator should take two numbers and an operator (+, -, *, /) as input and return the result of the operation.


const calculator = (num1, operator, num2) => {
    switch (operator) {
        case '+':
            return num1 + num2;
        case '-':
            return num1 - num2;
        case '*':
            return num1 * num2;
        case '/':
            if (num2 === 0) {
                throw new Error("Cannot divide by zero!");
            }
            return num1 / num2;
        default:
            throw new Error("Invalid operator! Please use one of +, -, *, /");
    }
};

console.log(calculator(5, '+' , 6));


// Task 6: Create a program that generates a random password of a specified length. The password should include a mix of uppercase letters, lowercase letters, numbers, and special characters.


const generateRandomPassword = (length) => {
    const uppercaseLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lowercaseLetters = 'abcdefghijklmnopqrstuvwxyz';
    const numbers = '0123456789';
    const specialCharacters = '!@#$%^&*()-_+=[]{}|:;"<>,.?/';
  
    const allCharacters = uppercaseLetters + lowercaseLetters + numbers + specialCharacters;
  
    let password = '';
  
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * allCharacters.length);
      password += allCharacters[randomIndex];
    }
  
    return password;
  };
  
  
  console.log(generateRandomPassword(12));



// Task 7: Implement a function that converts a Roman numeral to an integer. The function should take a Roman numeral string (e.g., "IX" or "XXI") as input and return the corresponding integer value.


const romanToInt = (roman) => {
    const romanNumerals = new Map([
      ['I', 1],
      ['V', 5],
      ['X', 10],
      ['L', 50],
      ['C', 100],
      ['D', 500],
      ['M', 1000],
    ]);
  
    let result = 0;
  
    for (let i = 0; i < roman.length; i++) {
      const currentSymbolValue = romanNumerals.get(roman[i]);
      const nextSymbolValue = romanNumerals.get(roman[i + 1]);
  
      if (nextSymbolValue > currentSymbolValue) {
        result += nextSymbolValue - currentSymbolValue;
        i++; 
      } else {
        result += currentSymbolValue;
      }
    }
  
    return result;
  };
  
  
  const romanNumeral2 = "XXI";
  const integer2 = romanToInt(romanNumeral2);
  console.log(`The integer value of "${romanNumeral2}" is:`, integer2);



// Task 8: Implement a JavaScript function to find the second smallest element in an array of numbers. The function should return the second smallest number.

const findSecondSmallest = (arr) => {
    if (arr.length < 2) {
      throw new Error("Array must contain at least two elements.");
    }
  
    let smallest = Infinity;
    let secondSmallest = Infinity;
  
    for (const num of arr) {
      if (num < smallest) {
        secondSmallest = smallest;
        smallest = num;
      } else if (num < secondSmallest && num !== smallest) {
        secondSmallest = num;
      }
    }
  
    if (secondSmallest === Infinity) {
      throw new Error("All elements in the array are the same.");
    }
  
    return secondSmallest;
  };
  
  
  const numbers = [5, 2, 9, 1, 7, 3];
  console.log(findSecondSmallest(numbers));
  
  



