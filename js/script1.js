// 1. Сделайте функцию isNumberInRange, которая параметром принимает число и проверяет, что оно больше нуля и меньше 10.
// Если это так — пусть функция возвращает true, если не так — false.


// Example 1


// let num = +prompt('Enter your number');

// function isNumberInRange(num) {
//     if (num > 0 && num < 10) {
//         return alert(true);

//     } else {
//         return alert(false);

//     }
// };

// isNumberInRange(num);


// Example 2

function isNumberInRange(num) { return num > 0 && num < 10 };

console.log(isNumberInRange(5));