//1
let i = 1;

while (i <= 2) {
    console.log('Привет!');

    i++;
}

//2

i = 1;

while (i <= 25) {
    console.log(i);

    i++;
}

//3

i = 7;

while (i <= 22) {
    console.log(i);

    i++;
}

//4
const obj = {
    'Коля': '200',
    'Вася': '300',
    'Петя': '400'
};

for (let key in obj) {

    console.log(`${key} — зарплата ${obj[key]} долларов`);

}

//5

let num = 0;
for (let n = 1000; n > 50; n /= 2, num++) {
    console.log(num, n);
}

//6

for (let Report = 7; Report <= 31; Report += 7) {
    console.log(`Сегодня пятница, ${Report}-е число. Необходимо подготовить отчет.`);
}


