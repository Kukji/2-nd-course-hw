function GameMonth(params) {

    let Motnh = Number(prompt('Введите порядковый номер месяца'))

    if (Motnh >= 1 && Motnh <= 2 || Motnh === 12) {
        alert('Зима')
    }
    if (Motnh >= 3 && Motnh <= 5) {
        alert('Весна')
    }
    if (Motnh >= 6 && Motnh <= 8) {
        alert('Лето')
    }
    if (Motnh >= 9 && Motnh <= 11) {
        alert('Осень')
    }
    else {
        alert('Досвидания!')
    }
}
//1

//2
const massiv = [1, 5, 4, 10, 0, 3];

console.log("Позиция четвёрки", massiv.indexOf(4));

//3
const arrone = [1, 3, 5, 10, 20];
let reuslt = arrone.join(' ');
console.log(reuslt)

//4
let arr = [[1, 1, 1], [1, 1, 1], [1, 1, 1]];
for (let i = 0; i < 4; i++) {
    arr[i] = [];
    for (let j = 0; j <= i; j++) {
        arr[i][j] = j + 1;
    }
}
console.log(arr);

//5

const mas = [1, 1, 1];

let rez = mas.push('2', '2', '2')
console.log(rez)

//6
const six = [9, 8, 7, 'a', 6, 6];
delete six[3];
let reza = six.sort()
console.log(reza)

//7
const UserMassiv = [9, 8, 7, 6, 5];
let search = UserMassiv.includes(Number(prompt('Введите число от 1 до 10')));
if (search === true) {
    console.log('Введенное число содержится в данном массиве');
} else {
    console.log('Введенное число не содержится в данном массиве');
}


//8

var str = 'fedcba';
var strReverse = str.split('').reverse().join('');
console.log(strReverse)

//9

const FirstNum = [1, 2, 3]
const SeckondNum = [4, 5, 6]
const rezult = [...FirstNum, ...SeckondNum]
alert(rezult);

//10

const RandomNumber = [6, 5, 8, 7, 9];

let i = 0

while (RandomNumber[i + 1] != undefined) {
    console.log(RandomNumber[i] + RandomNumber[i + 1]);
    i++;
}