// Составьте программу, которая принимает с клавиатуры
//  два целых числа и выводит на экран следующие значения 
//  (каждое в отдельной строке): квадрат каждого числа
//   (отдельно) и сумму квадратов введенных чисел.


let a = prompt('Enter the first digit',0);
let b = prompt('Enter the second digit',0);

console.log(Math.pow(a,2),Math.pow(b,2));
console.log(Math.pow(a,2) + Math.pow(b,2));

// done