
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

const lines = 5;
let result = '';

for (let i = 0; i <= lines; i++) {
  for (let j = 0; j < lines - i; j++) {
    result += " ";
  }
  for (let j = 0; j < 2 * i + 1; j++) {
    result += "*";
  }
  result += "\n"
}

console.log(result)


