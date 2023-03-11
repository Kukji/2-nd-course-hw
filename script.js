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

function GameWords() {
    let arr = ['Яблоко', 'Груша', 'Дыня', 'Виноград', 'Персик', 'Апельсин', 'Мандарин'];
    arr = arr.sort(() => Math.random() - 0.5);
    alert(arr)
    let name = String(prompt('Чему равнялся первый элемент массива?'))
    name = name.toLowerCase()
    let name2 = String(prompt('Чему равнялся последний элемент массива?'))
    name2 = name.toLowerCase()
    if (name === arr[0] && name2 === arr[6]) {
        alert('Молодец, вы угадали запомнили все слова!')
        return GameStop()
    } else if (name === arr[0]) {
        alert('Почти верно, можно и лучше!')
        return GameStop()
    } else if (name2 === arr[6]) {
        alert('Почти верно, можно и лучше!')
        return GameStop()
    } else {
        alert('Неправильно')
        return GameStop()
    }

}

function GameStop() {
    let a = confirm('Хочешь продолжить игру?')
    if (a === true) {
        return (GameWords())
    }
    else {
        alert('Хорошего дня, уже жду твоего возвращения!')
    }
}

//1
let str = 'js'
console.log(str.toUpperCase())

//2
let resArr = [];
function searchStrart(arr, str) {
    arr.forEach(element => {
        if (element.toLowerCase().startsWith(str.toLowerCase())) {
            resArr.push(element)
        }
    })
    console.log(resArr)
}
searchStrart(['Кошка', 'Кит', 'Комар', 'Носорог'], 'ко')


//3
let x = Number(32.58884)
console.log(Math.floor(x))
console.log(Math.ceil(x))
console.log(Math.round(x))

//4
var myArray = [52, 53, 49, 77, 21, 32];
var min = Math.min(...myArray);
max = Math.max(...myArray);
console.log(min)
console.log(max)


//5
function RandomNumber() {
    return Math.round(Math.random() * 10)
}

console.log(RandomNumber())
//6
function getRandomArrNumber(getNumber) {
    const GetArr = []
    let GetNumberDelTwo
        = Math.floor(getNumber / 2)
    for (let i = 0; i < GetNumberDelTwo; i++) {
        GetArr.push(Math.round(Math.random() * getNumber));
    }
    console.log(GetArr)
}
getRandomArrNumber(Number(prompt('Введите любое число')))

//7
let seventhRandomValue = (maxValue, minValue) => {
    let seventhRandomResult = Math.round(Math.random() * (maxValue - minValue) + minValue);
    console.log(seventhRandomResult);
}
seventhRandomValue(Number(prompt('Введите любое число')), Number(prompt('Введите любое число, значение которого меньше, чем у первого числа')));
//8
let currentDate = new Date();
console.log(currentDate);

//9

let CurrenDate = new Date("10 March 2023")
CurrenDate.setDate(CurrenDate.getDate() + 73);
console.log(CurrenDate);

//10

let dating = new Date();
function Data(dating) {
    const days = ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"];
    const moths = ["Января", "Февраля", "Марта", "Ареля", "Мая", "Июня", "Июля", "Августа", "Сентября", "Октября", "Ноября", "Декабря"];
    let date = dating.getDate() + ' ' + moths[dating.getMonth()] + ' ' + dating.toTimeString();
    console.log(date)
}
Data(dating)
