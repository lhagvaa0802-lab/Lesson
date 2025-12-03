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

// let reservedString = "";

// for (let i = arr.length - 1; i >= 0; i--) {
//   const char = arr[i];

//   reservedString += char;
// }

// console.log(reservedString);

// function myMax(arr) {
//   let maxNumber = arr[0];
//   for (i = 1; i < arr.length; i++) {
//     if (maxNumber < arr[i]) {
//       maxNumber = arr[i];
//     }
//   }
//   return maxNumber;
// }

// let number = [44, 7, 3, 4, 10, 12];
// console.log(myMax(number));

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

// let n=5
// let fac = 1;
// for(let i=1; i<=n; i++) {

//   fac=fac*i
// }

// console.log(fac)

// function myFac(fac){
//   let = totalFac=1
//   for(let i=1; i<=fac; i++) {

//   totalFac = totalFac * i;
// }
//   return totalFac
// }

// console.log(myFac(6))

// function isPalindrome(myWord){
// myWord=myWord.toLocaleLowerCase()

// let rightLetter=myWord.length-1
// for(i=0; i<myWord.length; i++){
//   if (myWord[i] !== myWord[rightLetter-i]){
//     return false
// }
// }
// return true
// }

// console.log(isPalindrome("Hadgalagdah"))

// function lastItem(myArray){
// let newArray = myArray[myArray.length - 1];
// return newArray
// }
// const realArray = ["banana", "apple", "kiwi", "dorj"];
// console.log(lastItem(realArray));

// function freqCounter(realArray,item){
//   let count = 0;
//   for (i = 0; i < realArray.length - 1; i++) {
//     if (realArray[i] === item) {
//       count++;
//     }
//   }
//   return count;
// }

// const realArray = ["banana", "banana", "banana", "dorj"];
// const item = "banana";

// console.log(freqCounter(realArray,item))

// function shortestWord(mySentence) {
//   const myArray = mySentence.split(" ");
//   let myShortest = myArray[0];
//   for (i = 1; i < myArray.length - 1; i++) {
//     let word = myArray[i];
//     if (myShortest.length > word.length) {
//       myShortest = word;
//     }
//   }
//   return myShortest;
// }
// const mySentence = "Are you doing well?";
// console.log(shortestWord(mySentence));

// 10. Массив дахь давхардсан элементийн жагсаалт гаргах
// findDuplicates(arr)
// Жишээ:
// [1,2,3,2,4,1] → [1,2]

// const numbers = [1, 2, 1, 2, 3];
// const duplicate = [1];

// for (let i = 0; i < numbers.length; i++) {
//   const number = numbers[i];

//   for (let j = i + 1; j < numbers.length; j++) {
//     if (number === numbers[j] && !duplicate.includes(number)) {
//       duplicate.push(number);
//     }
//   }
// }
// console.log(numbers, duplicate);

// const maxNumber=10
// const input = document.getElementById("input");
// const mySubmit = document.getElementById("submit");
// let attempt =0

// function onSubmit(){
//   let inputValue = Number(input.value);
//   const randomNumber = Math.floor(Math.random() * maxNumber) + 1;
//   console.log(inputValue,randomNumber)
//   if (inputValue===randomNumber){
//     document.getElementById('result').innerHTML = "You Guessed the number right"

//   }
//    if (inputValue > randomNumber) {
//      document.getElementById("result").innerHTML =
//        "Number is too high";
//    }
//    if (inputValue < randomNumber) {
//      document.getElementById("result").innerHTML =
//        "Number is too low";
//    }
//    if(inputValue>10 && inputValue<0){
//     document.getElementById("result").innerHTML = "Invalid number";
//    }
//    attempt++;
//   document.getElementById("attempt").innerHTML="Your attempt="+attempt
//   if (attempt>=5){
//      document.getElementById("result").innerHTML = "You lose";
//      attempt=0

//     }

// }
// mySubmit.onclick=onSubmit

// forEach

// const nums = [1, 2, 3, 4, 5];

// nums.forEach(print)

// function print(a){
//   if (a%2===0)
//     console.log(a,"Even")
//   if (a % 2 === 1) console.log(a,"odd");

// }

// const nums = [10, 15, 20, 25, 30];
// let sum = 0;
// nums.forEach(print);

// function print(a) {
//   if (a % 2 === 0){
//     sum=sum+a
//   }
// }
// console.log(sum);

// const nums = [1, 2, 3, 4, 5];
// let bool=[]
// nums.forEach(print);

// function print(a) {
//   bool.push(a%2===0)
// }
// console.log(bool)

// const nums = [3, 6, 9, 12];
// let count=0
// nums.forEach(print);

// function print(a) {
//   if (a%3===0){
//     count++
//   }

// }
// console.log(count);

// const nums = ["hi", "hello", "hey", "hola"];
// nums.forEach(print);

// function print(a) {
//   if (a.length>3) {
//     console.log(a)
//   }
// }

// const nums = [1, 2, 3, 4,1];

// nums.forEach(print);

// function print(a){
//   let b=a*2
//   if(b>5){
//     console.log("big")
//   }
//   else{
//     console.log("small")
//   }

// }

// const nums = [100, 50, 200, 25];
// const newMassive=[]
// nums.forEach(print);

// function print(a){
//   if(a>50){
//     newMassive.push(a)

//   }
// }
// console.log(newMassive)

// const arr = [2, 3, 5, 6, 8];

// const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// nums.forEach(print)

// function print(a){
//   let b=a*3
//   console.log(b)
// }

// const nums = [1, 2, 3, 4, 5];

// function result(a){
//   if (a%2===0){
//     return (a*2)
//   }else{
//     return a
//   }
// }

// const newArray=nums.map(result)
// console.log(newArray)

// const arr = ["bat", "dorj", "suren"];

// function result(word){
//   if(word.length>3){

//     return word.toUpperCase();
//   } else {
//     return word
//   }

// }
// const newArray=arr.map(result)
// console.log(newArray)

// const nums = [1, 2, 3, 4, 5];

// function result(a){
// if (a%2===0){
//   let b=a*a
//   return b
// }else{
//   a=0
//   return a
// }
// }

// const newArray=nums.map(result)
// console.log(newArray)

// const nums = [10, 15, 5, 25];

// function result(a){
//  let b=a-10
//  if(b<0){
//   return a=0
//  }else{
//   return b
//  }
// }

// const newArray=nums.map(result)
// console.log(newArray)

// const nums = [1, 2, 3, 4, 5];

// function result(a){
// if(a%2===0){
//   return a=0
// }else{
//   return a=1
// }
// }
// const newArray=nums.map(result)
// console.log(newArray)

// const arr = ["hi", "hello", "hey"];

// function newMassive(word) {
//   return word[0] + word[word.length - 1];
// }

// const newArray = arr.map(newMassive);

// console.log(newArray);

// const nums = [1, 2, 3, 4,6];

// function result(a){
// if (a%2===0){
//   return 1
// }else{
//     return 0;
// }
// }
//  const newArray=nums.map(result)
// console.log(newArray)

// const nums = [100, 200, 300,13];

// function result(a){
//   let b=a%3
//   return b
// }

// const newArray=nums.map(result)
// console.log(newArray)

// const nums = [1, 2, 3, 4,5,6];

// function result(a){
//     let b=a*2
//     if(b>10){
//       return a=10
//     }else {
//       return b
//     }

// }

// const newArray=nums.map(result)
//  console.log(newArray)

// const nums = ["bat","dorj","suren","amaraa"];

// function result(a){
//   if (a.length>5){
//     return "long"
//   }else{
//     return "short"
//   }

// }

// const newArray=nums.map(result)
//  console.log(newArray)

// const nums = [1, 2, 3, 4, 5, 6];

// const newArray = nums.filter((num) => num % 2 === 0);

// console.log(newArray);

// const nums = [1, 2, 3, 4, 5, 6];

// const newArray = nums.filter((num) => num % 2 !== 0);

// console.log(newArray);

// const nums = [5, 12, 8, 30];

// const newArray = nums.filter((num) => num > 10);

// console.log(newArray);

// 4. 5 үсгээс урт үгсийг шүүх ["hi","hello","winter","cat"] → ["hello","winter"]

// const arr = ["hi", "hello", "winter", "cat"];

// const newArray = arr.filter((word) => word.length >= 5);

// console.log(newArray);

// const arr = ["bat", "dorj", "amar", "suren"];

// const newArray = arr.filter((word) => word.includes("a"));

// console.log(newArray);

// 6. 0-ээс их тоонуудыг шүүх[-3,0,5,-1,10] → [5,10]

// const arr = [-3, 0, 5, -1, 10];

// const newArray = arr.filter((num) => num > 0);

// console.log(newArray);

// 7. Тоонууд дундаас зөвхөн 3-аар хуваагдахыг шүүх[3,4,9,10,12] → [3,9,12]

// const arr = [3, 4, 9, 10, 12];
// const newArray = arr.filter((num) => num % 3 === 0);
// console.log(newArray);

// 8. Boolean массив → зөвхөн true байхыг шүүх[true,false,true,false] → [true,true]

// const arr = [true, false, true, false];
// const newArray = arr.filter((bool) => bool === true);
// console.log(newArray);

// 9. Эхний үсэг нь “s” үсгээр эхэлдэг үгсийг шүүх["snow","cat","sun","dark"] → ["snow","sun"]

// const arr = ["snow", "cat", "sun", "dark"];

// const newArray = arr.filter((word) => word.charAt(0) === "s");
// console.log(newArray);

// 10. Жагсаалтаас давхардсан үгсийг авах (тэнцүү эсэхээр шалгах)["a","b","a","c","b"] → "a", "b" давхардсан учир → ["a","b"]

// const arr = ["a", "b", "a", "c", "b"];

// const temp = [];
// const dup = arr.filter((char) => {
//   if (!temp.includes(char)) {
//     temp.push(char);
//     return false;
//   } else {
//     return true;
//   }
// });

// console.log(dup);

// 1. Тоонуудын нийлбэрийг ол[1,2,3,4,5] → 15

// const arr = [1, 2, 3, 4, 5];

// const sum = arr.reduce((acc, val) => {
//   return acc + val;
// }, 0);
// console.log(sum);

// 2. Тоонуудын үржвэрийг ол[2,3,4] → 24

// const arr = [2, 3, 4];
// const sum = arr.reduce((acc, val) => {
//   return acc * val;
// }, 1);
// console.log(sum);

// 3. Массив дахь хамгийн их тоог ол[10,30,5,22] → 30

// const arr = [10, 30, 5, 22];

// const sum = arr.reduce((acc, val) => {
//   if (acc > val) {
//     return acc;
//   } else {
//     return val;
//   }
// });
// console.log(sum);

// 4. Массив дахь хамгийн бага тоог ол[10,3,20,7] → 3

// const arr = [10, 3, 20, 7];

// const sum = arr.reduce((acc, val) => {
//   if (acc < val) {
//     return acc;
//   } else {
//     return val;
//   }
// });
// console.log(sum);

// 5. Текстүүдийг нэг мөр болгон нийлүүлэх["hi","hello","hey"] → "hihellohey"

// const arr = ["hi", "hello", "hey"];
// const sum = arr.reduce((acc, val) => {
//   return acc + val;
// }, []);
// console.log(sum);

// 6. String массивын нийт үсгийн тоог ол["hi","hello","hey"] → 2 + 5 + 3 = 10

// const arr = ["hi", "hello", "hey"];
// const sum = arr.reduce((acc, val) => {
//   return acc + val.length;
// }, 0);
// console.log(sum);


// const arr = [1, 2, 3, 4, 5, 6];
// const newArray=arr.filter(n=> n%2===0)
// const sum=newArray.reduce((acc , val ) =>acc+val*val,0)
// console.log(sum);


// const arr = [2, 6, 4, 10];
// const newArray=arr.filter(n=> n>5)
// const sum=newArray.reduce((acc , val )=> acc+val*3,0)
// console.log(sum);


// 3. 3-аар хуваагдах тоонуудын квадратын нийлбэр
// [3,4,6,7,9] → 3²+6²+9² = 126

// const arr = [3, 4, 6, 7, 9];
// const newArray = arr.filter(n => n %3===0);
// const sum = newArray.reduce((acc, val) => acc + val * val, 0);
// console.log(sum);

// 4. 10-аас бага тоонуудын кубын нийлбэр
// [2,5,12,7] → 2³+5³+7³ = 470


// const arr = [2,5,12,7];
// const newArray = arr.filter(n => n<10);
// const sum = newArray.reduce((acc, val) => acc + val * val*val, 0);
// console.log(sum);

// 5. 0-с их тоонуудыг 2 дахин үржүүлж нийлбэр
// [-2,3,0,5,-1] → (32 + 52) = 16



// const arr = [-2,3,0,5,-1];
// const newArray = arr.filter(n => n>0);
// const sum = newArray.reduce((acc, val) => acc + val * 2, 0);
// console.log(sum);


// 6. 2-аар хуваагдах тоонуудын дундаж
// [2,5,8,10] → (2+8+10)/3 = 6.666…

// const arr = [2, 5, 8, 10];
// const newArray = arr.filter(n => n%2===0);
// const sum = newArray.reduce((acc, val) => acc + val, 0);
// console.log(sum/newArray.length);

// 7. 3-аар хуваагдах тоонуудын дундаж
// [3,4,6,7,9] → (3+6+9)/3 = 6

// const arr =[3,4,6,7,9];
// const newArray = arr.filter(n => n%3===0);
// const sum = newArray.reduce((acc, val) => acc + val, 0);
// console.log(sum/newArray.length);


// 8. 5-аас их тоонуудыг модуль 2 үр дүнгээр шүүх, нийлбэр олох
// [2,6,4,10,7] → 6+4+10 = 20


//  const arr =[2,6,4,10,7];
//  const newArray = arr.filter(n => n>5 &&n%2===0);
//  const sum = newArray.reduce((acc, val) => acc + val, 0);
//  console.log(sum);


// 9. 3-аас бага тоонуудын үржвэр
// [1,2,3,4,5] → 1*2 = 2

//   const arr =[2,6,4,10,7];
//   const newArray = arr.filter(n => n<3);
//   const sum = newArray.reduce((acc, val) => acc * val, 1);
//   console.log(sum);


//   10. 5-аас бага тоонуудын квадратын нийлбэр
// [1,2,3,6,7] → 1²+2²+3² = 14


//  const arr =[1,2,3,6,7];
//   const newArray = arr.filter(n => n<5);
//   const sum = newArray.reduce((acc, val) => acc + val*val, 0);
//   console.log(sum);


//   11. 10-аас их тоонуудын квадратын нийлбэр
// [5,12,8,20,3] → 12² + 20² = 544

//  const arr = [5, 12, 8, 20, 3];
//   const newArray = arr.filter(n => n>10);
//   const sum = newArray.reduce((acc, val) => acc + val*val, 0);
//   console.log(sum)


//   12. Тэгш тоонуудын кубын нийлбэр
// [1,2,3,4,5,6] → 2³+4³+6³ = 288

// const arr = [1, 2, 3, 4, 5, 6]; 
//   const newArray = arr.filter(n => n%2===0);
//   const sum = newArray.reduce((acc, val) => acc + val*val*val, 0);
//   console.log(sum)

//   13. 3-аар хуваагдах тоонуудын кубын нийлбэр
// [3,4,6,7,9] → 3³+6³+9³ = 972



// const arr = [3,4,6,7,9] ;
//   const newArray = arr.filter(n => n%3===0);
//   const sum = newArray.reduce((acc, val) => acc + val*val*val, 0);
//   console.log(sum)

//   14. 0-с их тоонуудын квадратын нийлбэр
// [-5,0,4,7,-1] → 4²+7² = 65

// const arr = [-5, 0, 4, 7, -1]; 
//   const newArray = arr.filter(n => n>0);
//   const sum = newArray.reduce((acc, val) => acc + val*val, 0);
//   console.log(sum)


//   15. 10-аас их тоонуудыг 2 дахин үржүүлж нийлбэр
// [8,12,15,5] → 122 + 152 = 54

// const arr = [8, 12, 15, 5]; 
//   const newArray = arr.filter(n => n>10);
//   const sum = newArray.reduce((acc, val) => acc + val*2, 0);
//   console.log(sum)

//   16. 5-аас их тоонуудын модуль 3 үр дүнг нийлүүлэх
// [2,6,4,10,7] → 6%3 + 10%3 = 0+1 = 1


// const arr = [2,6,4,10,7]; 
//   const newArray = arr.filter( => n>5);
//   const sum = newArray.reduce((acc, val) => acc + val%3, 0);
//   console.log(sum)

//   17. 5-аас бага тоонуудын модуль 2 үр дүнг нийлүүлэх
// [1,2,3,6,7] → 1%2 + 2%2 + 3%2 = 1+0+1 = 2

// const arr = [1, 2, 3, 6, 7]; 
//   const newArray = arr.filter(n => n<5);
//   const sum = newArray.reduce((acc, val) => acc + val%2, 0);
//   console.log(sum)


//   18. 3-аар хуваагдах тоонуудын квадратын нийлбэрийг мод 10
// [3,4,6,7,9] → (3²+6²+9²)%10 = 126%10 = 6


// const arr = [3, 4, 6, 7, 9]; 
//   const newArray = arr.filter(n => n%3===0);
//   const sum = newArray.reduce((acc, val) => acc + val*val, 0);
//   const mod=sum%10
//   console.log(mod)

//   19. 10-аас их тоонуудын квадратын нийлбэрийг мод 7
// [5,12,8,20,3] → (12² + 20²)%7 = 544%7 = 5

// const arr = [5, 12, 8, 20, 3]; 
//   const newArray = arr.filter(n => n>10);
//   const sum = newArray.reduce((acc, val) => acc + val*val, 0);
//   const mod=sum%7
//   console.log(mod)


//   20. String массив: 5 үсгээс урт үгсийг filter → map → reduce ашиглан нийт урт
// ["hi","hello","hey","world","javascript"] → hello+world+javascript = 5+5+10=20


const arr = ["hi", "hello", "hey", "world", "javascript"]; 
  const newArray = arr.filter(word=>word.length>=5);
  const sum = newArray.reduce((acc, word) => acc + word.length, 0);

  console.log(sum)
  