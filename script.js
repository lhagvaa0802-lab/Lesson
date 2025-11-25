// for (i = 10; i > 0; i--) {
//   console.log(i);
// }

// for (i = 1; i <= 10; i++) {
//   let n = 3;
//   n = n * i;
//   console.log(n);
// }
// const a = 2;
// let n = 5;
// let b;
// for (i = 1; i <= n; i++) {
//   b = a ** i;
// }
// console.log(b);

// n = 123456789;
// let sum = 0;
// const length = String(n).length;
// console.log(String(n).length, "urt");

// for (let i = 1; i <= length; i++) {
//   if (n >= 10 ** (length - i)) {
//     let firstDigit = Math.floor(n / 10 ** (length - i));
//     n = n - firstDigit * 10 ** (length - i);
//     sum += firstDigit;
//   }
// }

// let n = 1236438999999;
// for (count = 0; n >= 1; count++) {
//   n = Math.floor(n / 10);
// }
// console.log(count);

// function mySum(a, b) {
//   return a + b;
// }

// result = mySum(5, 1);
// console.log(result);

// function mySum(a) {
//   return a * a;
// }

// result = mySum(3);
// console.log(result);

// function myNumber(b) {
//   let a = b % 2;
//   if (a === 0) {
//     console.log("Tegsh");
//   } else {
//     console.log("sondgoi");
//   }
// }

// myNumber(3);

// function great(name) {
//   return console.log("Hello Lhagvaa");
// }

// great();

// function mySum(a, b) {
//   return a + b;
// }

// console.log(mySum(3, 1));

// function myMAX(a, b) {
//   if (a > b) {
//     return a;
//   } else {
//     return b;
//   }
// }

// console.log(myMAX(5, 4));

// const friut = ["ggg", "hhhh"];
// function myArray(arr) {
//   return arr.length;
// }

// console.log(myArray(friut));

// function arraySum(arr) {
//   let sumNumber = 0;

//   for (let i = 0; i < arr.length; i++) {
//     sumNumber = sumNumber + arr[i];
//   }
//   return sumNumber;
// }

// console.log(arraySum([1, 2, 3, 4]));

// function arraySum(arr) {
//   let reservedString = "";

//   for (let i = arr.length - 1; i >= 0; i--) {
//     const char = arr[i];

//     reservedString += char;
//   }
//   return reservedString;
// }

// console.log(arraySum("Hello"));

// let arr = "Hello";

// let reservedString = " ";

// for (let i = arr.length - 1; i >= 0; i--) {
//   const char = arr[i];

//   reservedString += char;
// }

// console.log(reservedString);

function myMax(arr) {
  let maxNumber = arr[0];
  for (i = 1; i < arr.length; i++) {
    if (maxNumber < arr[i]) {
      maxNumber = arr[i];
    }
  }
  return maxNumber;
}

let number = [44, 7, 3, 4, 10, 12];
console.log(myMax(number));

// function myfunction(str) {
//   let char = "";
//   for (i = 0; i < str.length; i++) {
//     char = char + str[i];
//     if (i === 0) {
//       char = char.toUpperCase();
//     }
//   }
//   return char;
// }
// let myWord = "rdsd";
// console.log(myfunction(myWord));
