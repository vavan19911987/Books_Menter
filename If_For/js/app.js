//Цыклы
for (let red = '*'; red.length <= 8; red += "*"){
 console.log(red);
}


// FizzBizz
for (let i = 1; i <= 100; i++) {
 if (i % 3 == 0 && i % 5 == 0) {
  console.log('FizzBizz');
 } else if (i % 5 == 0) {
  console.log('Buzz');
 }else if (i % 3 == 0) {
  console.log('Fizz');
 }else {
    console.log(i);
  }

}

//Шахматы

let size = 8;
let result = "";

for (let i = 1; i <= size; i++) {
    if (i % 2 != 1) {
        result += " ";
    }
    for (let j = 1; j < size; j++) {
        if (j % 2 == 1) {
            result += "#";
        } else if (j % 2 != 1) {
            result += "  ";
        }
    }
    result += " \n";
}
console.log(result);







// Ответы и решения
// for (let i = 1; i < 5; i++) {
//  console.log(i + "первый цикл");
//  for (let j = 1; j < 5; j++) {
//   console.log(j + "вложеный цикл")
//  }
// }


// for (var n = 1; n <= 100; n++) {
//   var output = "";
//   if (n % 3 == 0)
//     output += "Fizz";
//   if (n % 5 == 0)
//     output += "Buzz";
//   console.log(output || n);
// }


// else if (i % 3 != 0 && i % 5 != 0) {
//   console.log(i);
//  }

// let num = 7;
// let result= "";
//
// for (let i = 1; i < num; i++) {
//
//  for (let j = 0; j < i; j++) {
//   result += '*';
//  }
// result += "\n";
// }
//
// console.log(result);

// for (var line = "#"; line.length < 8; line += "#")
// console.log(line);


// var size = 15;
//
// var board = "";
//
// for (var y = 0; y < size; y++) {
//     for (var x = 0; x < size; x++) {
//         if ((x + y) % 2 == 0)
//             board += " ";
//         else
//             board += "#";
//     }
//     board += "\n";
// }
//
// console.log(board);