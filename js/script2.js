// 2. Дан массив с числами. Запишите в новый массив только те числа, которые больше нуля и меньше 10-ти.
// Для этого используйте вспомогательную функцию isNumberInRange из предыдущей задачи.


const arr = [10, 1, -1, -10, 1192, 321, 312, 16, 6, -9, 33, -34, -1, 0, -0, 8, 8, 8, 9, 4, -2, -5, 2];

let arrNew = [];

for (let i = 0; i < arr.length; i++) {
    if (isNumberInRange(arr[i])) {
        arrNew.push(arr[i]);
    }
}

function isNumberInRange(num) { return num > 0 && num < 10 };

console.log(arrNew);