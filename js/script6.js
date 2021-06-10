// 6. Дан массив с целыми числами. Создайте из него новый массив, где останутся лежать только четные из этих чисел.
// Для этого используйте вспомогательную функцию isEven из предыдущей задачи.


const arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];

let arrNew = [];

for (let i = 0; i < arr.length; i++) {
    if (isEven(arr[i])) {
        arrNew.push(arr[i]);
    }
}

function isEven(num) { return num % 2 === 0 };

console.log(arrNew);