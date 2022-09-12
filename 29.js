// Дана строка 'aaa bbb ccc'. Вырежите
//  из нее слово 'bbb' тремя разными
//   способами (через substr, substring, slice).

let str = 'aaa bbb ccc';
console.log(str.substr(8,10));
console.log(str.substring(8));
console.log(str.slice(8));

//done