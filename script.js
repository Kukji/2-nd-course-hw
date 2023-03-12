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
    let arr = ['яблоко', 'груша', 'дыня', 'виноград', 'персик', 'апельсин', 'мандарин'];
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
function MyFunc(arr, callback) {
    return callback(arr)
}

function mult(arr) {
    return arr.reduce((acc, cur) => acc * cur, 1);

}

function sum(arr) {
    return arr.reduce((acc, cur) => acc + cur, 0);
}

console.log(MyFunc([3, 4, 1, 9], mult))
console.log(MyFunc([3, 4, 1, 9], sum))

//2
const users = [
    { name: 'Jon', age: 22 },
    { name: 'Richard', age: 18 },
    { name: 'Anton', age: 32 },
    { name: 'Lida', age: 23 },
    { name: 'Bob', age: 44 }
];

users.sort((prev, next) => next.age - prev.age);
console.log(users);

//3

const arr = [1, '4', 9, 'two'];
const arr1 = [1, '4', false, 9, 'two'];

function reversArr(arr) {
    return arr.reverse();
}

function stringOrnumber(arr) {
    for (let i = 0; i < arr.length; i++) {
        arr[i] *= 1;
        if (isNaN(arr[i]) && arr.splice(i, 1));
    }
    return arr;
}

function each(arr, callback) {
    return callback(arr)
}



console.log(each(arr, reversArr))
console.log(each(arr1, stringOrnumber))

//4

function sayDate() {
    console.log(new Date(Date.now()));
}

function timer() {
    const intervalId = setInterval(sayDate, 3000); // id = ???

    setTimeout(() => {
        clearInterval(intervalId);
        console.log('30 секунд прошло')
    }, 30000)
}

timer()

//5
function calling() {
    console.log('Звоню!')
};

function beeps(callback) {
    setTimeout(() => {
        console.log('Идут гудки...')
        callback()
    }, 1000);
}

function talk() {
    console.log('Разговор')
}

function bye(callback) {
    setTimeout(() => {
        console.log('Разговор окончен.')
        callback()
    }, 2000);
}

calling();
beeps(talk);
bye()