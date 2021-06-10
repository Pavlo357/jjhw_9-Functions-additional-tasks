// 3. Сделайте функцию getDigitsSum (digit — это цифра), которая параметром принимает целое число и возвращает сумму его цифр.


let num = +prompt('do what you must');

function getDigitsSum(num) {
    let sum = 0;
    let str = String(num);
    for (let i = 0; i < str.length; i++) sum += Number(str[i]);
    return sum;
}

alert(getDigitsSum(num));

console.log(getDigitsSum(num));