// 7. Сделайте функцию getDivisors, которая параметром принимает число
// и возвращает массив его делителей (чисел, на которое делится данное число).


let num = +prompt('just do it')

function getDivisors(num) {
    let divisors = [];
    for (let i = 1; i < num; i++) {
        if (num % i == 0) {
            divisors.push(i);
        }
    }
    return divisors;
}
alert(getDivisors(num));