// const value = prompt(`What is your name?`);
// console.log(value);

// alert(`Hello`);

// const answer = confirm(`Are you OK?`);


// Задача 1

// Запропонуйте користувачу ввести число за допомогою prompt().
// Збережіть введене значення у змінну number.
// Перевірте, чи дорівнює змінна number числу 10:
//    Якщо так – виведіть повідомлення 'Вірно' у alert().
//    Якщо ні – виведіть 'Невірно'. 

// Підказка: prompt завжди повертає рядок (String), тому перед перевіркою  
// перетворіть значення на число за допомогою Number().

// const number = Number(prompt(`Enter number`));

// // const number = prompt(`Enter number`) * 1;
// // const number = +prompt(`Enter number`);

// if (number === 10) {
//     alert(`Correct`);
// } else {
//     alert('Incorrect');
// }

// Ternary

// number === 10 ? alert(`Correct`) : alert('Incorrect');

// // OR

// alert(number === 10 ? alert `Correct` : 'Incorrect');


// Задача 2

// У змінній min лежить випадкове число від 0 до 59.
// Визначте, в яку чверть години потрапляє
// це число (у першу, другу, третю чи четверту).
// Виведіть в alert відповідне повідомлення, наприклад:
// "10 входить в першу чверть"

// const min = Math.floor(Math.random() * (59 - 0) + 0);

// if (min <= 15) {
//     alert(`${min} входить в першу чверть`);
// } else if (min <= 30) {
//     alert(`${min} входить в другу чверть`);
// } else if (min <= 45) {
//     alert(`${min} входить в третю чверть`);
// } else {
//     alert(`${min} входить в четверту чверть`);
// }


// Задача 3

// Змінна num може набувати 4 значення: '1', '2', '3' або '4' 
// (запитуй це значення у користувача через prompt). 
// Якщо вона має значення '1', то у змінну result запишіть 'зима',
// якщо має значення '2' - 'весна' і так далі.
// Розв'яжіть завдання через switch-case.
// Не забудьте про дефолтне значення, на випадок, якщо користувач 
// введе в prompt щось інше. В такому випадку result має набувати значення:
// "Вибачте, але ви маєте ввести значення від 1 до 4 включно".
// Значення змінної result виведіть в консоль.

// const num = prompt(`Enter number`);
// let result = "";

// switch (num) {
//     case '1':
//         result = `зима`;
//         break;
//     case '2':
//         result = `весна`;
//         break;
//     case '3':
//         result = `літо`;
//         break;
//     case '4':
//         result = `осінь`;
//         break;
//     default:
//         result = `Вибачте, але ви маєте ввести значення від 1 до 4 включно`;
// }

// console.log(result)


// Задача 7

// Напишіть функцію getNumbers(min, max), що приймає 2 параметри - 
// мінімальне і максимальне число відповідно.
// Напишіть цикл всередині функції, який виводить у консоль
// всі числа від max до min за спаданням.
// Окрім цього, підрахуйте суму всіх парних чисел в цьому циклі
// і поверніть її з функції.

// function getNumbers(min, max) {
//     for (let i = max; i >= min; i -= 1) {
//         console.log(i);
//         if (i % 2 === 0) {
//             sum += 1; //sum = sum + 1
//         }
//     }
//     return sum;
// }

// getNumbers(1, 10);

// Задача 8

// Напишіть функцію min(a, b), яка приймає 2 числа і повертає меньше з них.
// Потрібно додати перевірку, що функція отримує саме числа, в іншому випадку
// повертати з функції рядок - 'Not a number!'.

// function min(a, b) {
//   if (typeof a !== 'number' || typeof b !== 'number') {
//     return 'Not a number!';
//   }

//   return a < b ? a : b;
// }
// console.log(2, 9);

// Задача 9

// Напишіть функцію isAdult(age), яка  приймає число - вік користувача і повертає true, 
// якщо параметр age більше чи дорівнює 18.
// В іншому випадку вона запитує підтвердження через confirm 
// і повертає його результат (true/false).

// function isAdult(age) {
//     if (typeof age !== 'number' || Number.isNaN(age)) {
//         return 'Not a number';
//     }
//     if (age >= 18) {
//         return true;
//     } else {
//         return confirm(`Please confirm age`);
//     }
    
// }

// isAdult(18);

// let count = 0;

// while (count < 10) {
//   console.log(`Count: ${count}`);
//   count += 2;
// }

// let clientCounter = 18;
// const maxClients = 25;

// while (clientCounter < maxClients) {
//   console.log(clientCounter);
//   clientCounter += 1;
// }

//  function sumUpTo(number) {
//   let sum = 0;

//   for (let i = 0; i <= number; i += 1) {
//     sum += i;  
//   }

//   return sum;
// }

// console.log(sumUpTo(5)); // 15



// function sumUpTo(number) {
//     let sum = 0;
//     let i = 1;

//     while (i <= number) {
//         sum = sum + i;
//         i = i + 1;
//     }
//     return sum;
// }
// console.log(sumUpTo(5));

// function calculateEvenTotal(number) {
//     let sum = 0;

//     for (let i = 1; i <= number; i++) {
//         if (i % 2 === 0) {
//             sum = sum + i;
//         }
//     }
//     return sum;
// }

// calculateEvenTotal(3);

const start = 6;
const end = 17;
let number;
let sum = 0;

for (number = start; number <= end; number++) {
  if(number % 5 === 0) {
    sum = sum + number
  }
}
console.log(sum);



























