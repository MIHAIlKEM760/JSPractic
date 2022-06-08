"use strict";

// let i = 4;

// while (i < 11) {
//   i++;
//   console.log(i);
// }

// for (let j = 20; j >= 10; j--) {
//   if (j === 13) break;
//   console.log(j);
// }

// for (let y = 2; y <=10; y++) {
//   if (y % 2 === 0) {
//     console.log(y);
//   }
// }

// let a = 2;

// while (a <= 16) {
//   if (a % 2 === 0){
//     a++;
//     continue;
//   } else {
//     console.log(a);
//   }
//   a++;
// }

// const lines = 5;
// let result = '';

// for (let i = 0; i <= lines; i++) {
//   for (let j = 0; j < lines - i; j++) {
//     result += " ";
//   }
//   for (let j = 0; j < 2 * i + 1; j++) {
//     result += "*";
//   }
//   result += "\n"
// }

// console.log(result)

// for (let a = 5; a <= 10; a++) {
//   console.log(a)
// }

// let a = 5;
// while (a <=10) {
//   console.log(a);
//   a++
// }

// let i = 2;
// while (i <= 16) {
  
//   if (i % 2 ===0) {
//     i++;
//     continue;
//   } else {
//     console.log(i);
//   }
//   i++;
// }

// function firstTask() {
//   const arr = [3, 5, 8, 16, 20, 23, 50];
//   const result = [];

//   for (let i = 0; i < arr.length; i++) {
//       result[i] = arr[i];
//   }

//   console.log(result);
//   return result;
// }

// firstTask();



// function returnNeighboringNumbers(num) {
//   return [num - 1, num, num + 1];
// }

// returnNeighboringNumbers(5);

// function getMathResult(num, times) {
//   if (typeof(times) !== 'number' || times <= 0) {
//       return num;
//   }

//   let str = '';

//   for (let i = 1; i <= times; i++) {
//       if (i === times) {
//           str += `${num * i}`;
//           // Тут без черточек в конце
//       } else {
//           str += `${num * i}---`;
//           // Это тоже самое, что и
//           // str = str + num * i + "---"
//       }
//   }

//   return str;
// }

// getMathResult(10, 5);

// let nam, admin;

// nam = "джон";

// admin = nam ;

// alert(admin);

// let ECMAScript = prompt('Какое "официальное" название JavaScript', '');

// if (ECMAScript == 'ECMAScript') {
//   alert('Верно');
// } else {
//   alert('ECMAScript');
// }

// let numbers = prompt('Введтье число', '');

// if (numbers > 0) {
//   alert(1);
// } else if (numbers < 0) {
//   alert(-1);
// } else {
//   alert(0);
// }

// let result = (a + b < 4) ? 'Мало' : 'Много';

// let message = (login == 'Сотрудник') ? 'Привет' :
//   (login == 'Директор') ? 'Здравствуйте' :
//   (login == '') ? 'Нет логина':
//   '';

// if (login == 'Сотрудник') {
//   message = 'Привет';
// } else if (login == 'Директор') {
//   message = 'Здравствуйте';
// } else if (login == '') {
//   message = 'Нет логина';
// } else {
//   message = '';
// }