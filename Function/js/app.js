// const hummus = function(factor) {
//
// const ingredient = function(amount, unit, name) {
//     let ingredientAmount = amount * factor;
//     if (ingredientAmount > 1) {
//         unit += "s";
//     }
//     console.log(`${ingredientAmount} ${unit} ${name}`);
//
// };
// ingredient(1, "банка", "нута");
// ingredient(0.25, "стакан", "кунжутной пасты");
// ingredient(0.25, "стакан", "лимонного сока");
// ingredient(1, "зубок", "чеснока");
// ingredient(2, "столовые ложки", "оливкового масла");
// ingredient(0.5, "чайной ложки", "кумина");
// };
// console.log(hummus(2));

// let z = 12;
// const square = function (x) {
//  return x * z;
// }
// console.log(square(12));

// const power = function (base, exponent) {
//  let result = 1;
//  for (let i = 0; i < exponent; i++) {
//   result = result * base;
//  }
//  return result;
// }
// console.log(power(2, 11));


// let launchMissiles = function() {
// missileSystem.launch("now");
// };
// if (safeMode) {
// launchMissiles = function() {
// /* ничего не делаем */
// };
// }
// launchMissiles();

// console.log('Верно: ', future(2));

// function future(x) {
//  return x * x
// };

// function greet(who) {
//  console.log("Hi, " + who);
// }
// greet("Garri");
// console.log("GoodBay");


// function chicken() {
//  return egg(1);
// }
// function egg() {
// return chicken(1);
// }
// console.log(chicken(2) + " пришел первым.");




// function minus(a, d = 5) {
//     if (d === undefined) {
//         return -a;
//     }else {
//         return a - d;
//     }
// }
// console.log(minus(10));
// console.log(minus(10, 5));

// function power(base, exponent = 2) {
//     let result = 1;
//
// for (let count = 0; count < exponent; count++) {
//     result *= base;
// }
// return result;
// }
// console.log(power(4));
// console.log(power(2,6));

// function wrapValue(n) {
//     let local = n;
//     return () => local;
// }
// let wrap1 = wrapValue(1);
// let wrap2 = wrapValue(2);
// console.log(wrap1());
// console.log(wrap2());
// console.log(wrap1());
// console.log(wrap2());
// console.log(wrap2());



// function multiplier(factor) {
//     return (number) => number * factor;
// }

// multiplier(2);

// const twice = multiplier(2);
//     console.log(twice(5));
//     console.log(twice(2));
//     console.log(twice(5));

// function red(n) {
//     return x => x * n;
//
// }
// let res = red(2);
//
// console.log(res(2));

// function red(n) {
//     return function (x) {
//         return x * n;
//     }
//
// }
// let res = red(2);
//
// console.log(res(2));

// Самостоятельная практика

// function bind(LastName, firstName) {
//     return function (agg, job) {
//         return [`${LastName} ${firstName}, ${agg}, ${job}`];
//     }
// }
// let persone1 = bind(prompt('Ваше Имя'), prompt('Ваша Фамилия'));
// console.log(persone1(prompt('Введите ваш возраст'), prompt('Кем вы работаете')));
//
// let persone2 = bind(prompt('Ваше Имя'), prompt('Ваша Фамилия'));
// console.log(persone2(prompt('Введите ваш возраст'), prompt('Кем вы работаете')));

// let persone1 = bind('Mihail', 'Liter');
// let persone2 = bind('Elena', 'Popova');
//
// console.log(persone1(22, 'Front'));
// console.log(persone2(22, 'SMM'));

// function fun() {
//     let res = 1;
//     return function (z) {
//        return res++;
//
//     }
// }
//
// let cun = fun();
// let cun2 = fun();
//
// console.log(cun());
// console.log(cun());
// console.log(cun2());
// console.log(cun2());
// console.log(cun2());

// function power(base, exponent) {
//     if (exponent == 0) {
//         return 1;
//     } else {
//         return base * power(base, exponent - 1);
//     }
// }
//
// console.log(power(2,3));


// function findSolution(target) {
//
//     function find(current, history) {
//         if (current === target) {
//             return history;
//         }else if (current > target) {
//             return null;
//         } else {
//             return find(current + 5, `(${history} + 5)`) || find(current + 3, `(${history} * 3)`);
//         }
//     }
//     return find(1, "1");
// }
// console.log(findSolution(16));

// function cyclingDo(times) {
//     console.log(times);
//     times++;
//     if (times <= 10) cyclingDo(times);
// }
// cyclingDo(0);

// let count = 0;
//
// function recurse() {
//     if (count === 5000) {
//         return 'done';
//     }
//     count++;
//     return recurse();
// }
//
// console.log(recurse());
// console.log('count = ', count);

// console.log(Math.pow(2,6));

// function printFarminventory(cows, chickens, pigs) {
//     let cowString = String(cows);
//     while (cowString.length < 4) {
//         cowString = "0" + cowString;
//     }
//     console.log(`${cowString} - коров`);
//     let chickenString = String(chickens);
//     while (chickenString.length < 4) {
//         chickenString = "0" + chickenString;
//     }
//     console.log(`${chickenString} - цыплят`);
//     let pigsString = String(pigs);
//     while (pigsString.length < 4) {
//         pigsString = "0" + pigsString;
//     }
//     console.log(`${pigsString} - свиней`);
// }
// printFarminventory(7, 11, 12);

// function printZeroPaddedWithLabel(number, label)
//     {
//         let numberString = String(number);
//         while (numberString.length < 3) {
//             numberString = "0" + numberString;
//         }
//         console.log(`${numberString} ${label}`);
//     }
//     function printFarmlnventory(cows, chickens, pigs) {
//         printZeroPaddedWithLabel(cows, "коров");
//         printZeroPaddedWithLabel(chickens, "цыnлят");
//         printZeroPaddedWithLabel(pigs, "свиней");
//     }
//
//     printFarmlnventory(7, 11 , 3);
//


// минимум
// function min(a, b) {
//     if (a < b) {
//         return a;
//     } else if (b < a){
//         return b;
//     }
// }
// console.log(min(5, 7) + 100 + " lastFunction");
//
// function minClosure(a) {
//     return function (b) {
//         if (a < b) return a; return b;
//     }
// }
// let locking = minClosure(5);
// console.log(locking(3) + " locking");
// let lockingToo = minClosure(5);
// console.log(lockingToo(-10) +" lockingToo");

// function isEven(even) {
//     function check(x, y) {
//         if (x %2 === 2 || x === even) {
//             return y;
//         } else if (x > even) {
//             return  null;
//         } else {
//             return check(x + 2, `${y} + 2`);
//         }
//     }
//     return check(0, '0');
//
// }
//
// console.log(isEven(74));


// function isEven(num) {
//     function check(x) {
//         if (x === 0) {
//             return true;
//         } else if (x === 1) {
//             return  false;
//         } else if (x < 0) {
//             if (x %2 === -0) {
//                 return true;
//             }else  {
//                 return false
//             }
//         } else {
//             return check(x - 2);
//         }
//     }
//     return check(num);
// }
// console.log(isEven(-6) + ' отрицательное четное');
// console.log(isEven(-7) + ' отрицательное нечетно');
// console.log(isEven(12) + ' положительное четное');
// console.log(isEven(13) + ' положительное нечетное');

// let i = 0;
// let j = 0;
// function scoredBall() {
//     return function goalInside() {
//         if (i <= j ) {
//             i++;
//             return `Аргентина забила ${i} гол(а)` + ' ' + `Франция ${j}`;
//         } else if (j <= i) {
//             j++;
//             return `Франция забила ${j} гол(а)` + ' ' + `Аргентина ${i}`;
//         }
//     }
// }
// const scoredArgentina = scoredBall();
// console.log(scoredArgentina());
// const scoredFrance = scoredBall();
// console.log(scoredFrance());
// console.log(scoredFrance());
// console.log(scoredFrance());

// let i = 0;
// let j = 0;
// function scoredBall(country) {
//     return function goalInside() {
//         if (country === 'Аргентина') {
//             return (`Аргентина забила ${++i} гол(а), Общий счет Франция - ${i} : ${j} - Аргентина`);
//         } else if (country === 'Франция') {
//             return (`Франция забила ${++j} гол(а), Общий счет Франция - ${i} : ${j} - Аргентина`);
//         }
//     }
// }
// const scoredArgentina = scoredBall('Аргентина');
// const scoredFrance = scoredBall('Франция');
// console.log(scoredArgentina());
// console.log(scoredFrance());
// console.log(scoredFrance());
// console.log(scoredFrance());
// console.log(scoredArgentina());
// console.log(`Общий счет Франция - ${i} : ${j} - Аргентина`);


// function isEven(integer) {
//     function even() {
//         if (integer % 2 === 0)  {
//             return true;
//         } else if (integer % 2 === 1) {
//             return false;
//         } else {
//             return false;
//         }
//     }
//     return even();
// }

// let day1 = {
//     squirrel: false,
//     events: ["работал", "трогал дерево", "ел nиццу", "бегал"],
//     x: [1,1,1,1,1],
//     q: []
//
// };
//
// console.log(Object.keys(day1));

// let objectA = {a: 1, b: 2};
// Object.assign(objectA, {b: 3, c: 4});
// console.log(objectA);

// const score = {visitors: 0, home: 0};
// // Так можно
// score.visitors = 1;
// //А так нельзя
// // score = {visitors: 1, home: 1};
// console.log(score);


// let journal = [];
// function addEntry(events, squirrel) {
//     journal.push({events, squirrel});
// }
// addEntry();
// console.log(journal);


function phi(table) {

return (table[3] * table[0] - table[2] * table[1]) /

    Math.sqrt((table[2] + table[3]) * (table[0] + table[1]) * (table[1] + table[3]) * (table[0] + table[2]));
}
console.log(phi([76, 9, 4, 1]));