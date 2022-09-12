// Дана строка 'я учу javascript!'. 
// Вырежите из нее слово 'учу' и
//  слово 'javascript' тремя разными 
//  способами (через substr, substring, slice).

let str = 'я учу javascript!';

console.log(str.substr(6,10));
console.log(str.substring(6,16));
console.log(str.slice(6,-1));

//done