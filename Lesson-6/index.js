//Система рандомного числа
function getRandom(min, max){
    return Math.random() * (max - min)+ min;
} 

console.log(Math.round(getRandom(5,15)));

//Дата и время
let dateNow = new Date();
console.log(dateNow);
console.log(dateNow.getFullYear());
console.log(dateNow.getMonth());
console.log(dateNow.getDay());
console.log(dateNow.getDate());
console.log(dateNow.getHours());
console.log(dateNow.getMinutes());
console.log(dateNow.getSeconds());
console.log(dateNow.getMilliseconds());

//Изменение даты и время

dateNow.setDate(1);

console.log(dateNow)

let opt = {
    year: 'numeric',
    month: 'numeric',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    weekday: 'long'

}

console.log(dateNow.toLocaleDateString('ru', opt))

//Регулярные выражения

let str = 'Я люблю JavaScript!';

console.log(str);

console.log(str.search(/лю/));
console.log(str.search(/ly/));

//Флаги
/*
g - глобальный поиск
i - поиск без учёта регистра 
m - многострочный поиск
*/ 

console.log(str.search(/лю/gi));
console.log(str.match(/лю/gi));
console.log(str.match(/лю/).index);

//Замена всех - на *
console.log('13-30-35'.replace('-',':'));
console.log('13-30-35'.replace(/-/g,':'));

// Меняю местами Ивана на Иванова
let str2 = 'Иван Иванов';
console.log(str2.replace(/(Иван) (Иванов)/, '$2 $1'));
//Подставил великий
console.log(str2.replace(/(Иван) (Иванов)/, 'Великий $&'));

//test
console.log(/лю/gi.test(str));//true
console.log(/ly/gi.test(str));//false

//Проверка почты

let email = 'ruben@gmail.com'

let regxp = /[a-z]@[a-z].[a-z]{2,6}/gi;
console.log(regxp.test(email));// true

email = '8912@asd.h'
console.log(regxp.test(email));// true

email= 'alex1987@gmail.com';
regxp = /[0-9a-z]@[a-z].[a-z]{2,6}/gi;

console.log(regxp.test(email)); //true