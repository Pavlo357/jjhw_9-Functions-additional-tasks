// 4. Найдите все года от 1 до 2021, сумма цифр которых равна 13. Для этого используйте вспомогательную функцию getDigitsSum из предыдущей задачи.


function getDigitsSum(num) {
    let sum = 0;
    let str = String(num);
    for (let i = 0; i < str.length; i++) sum += Number(str[i]);
    return sum;
}

let years = [];

for (let i = 0; i < 2021; i++) { if (getDigitsSum(i) == 13) { years.push(i); }; };

console.log(years);