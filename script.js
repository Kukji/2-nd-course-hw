//1
let a = Number(10);

alert(a);

a = Number(20);

alert(a);


//2
let firstIphone = Number(2007)
alert(firstIphone)

//3
let firstJS = String('Бренданом Айком')
alert(firstJS)

//4
let c = Number(10)
let d = Number(2)

let rezultUmn = c * d;
let rezultSum = c + d;
let rezultWich = c - d;
let rezultDel = c / d;

alert(rezultUmn);
alert(rezultSum)
alert(rezultWich)
alert(rezultDel)

//5
let e = Number(2)
let f = Number(5)

let rez = e ** f;

alert(rez)

//6
let g = Number(9)

let i = Number(2)

let rezult = g % i;
alert(rezult);

//7

let num = 1;
num += 5;
num -= 3;
num *= 7;
num /= 3;
num++;
num--;

alert(num);

//8

let age = prompt('Сколько вам лет?')

alert(`Вам ${age} лет`);

//9
const user = {
    name: 'John',
    age: 18,
    isAdmin: true
};

user['city of residence'] = 'Moscow';

user.age = 20;

delete user['city of residence'];

let info = prompt("Что вы хотите узнать о пользователе?");
alert(user[info]);

//10
let user_name = prompt('Как вас зовут?');
alert(`Привет, ${user_name} !`)