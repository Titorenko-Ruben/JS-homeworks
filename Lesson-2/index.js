// 1.Задание
let name = prompt('Меня зовут:','Имя');
let age = prompt('Мне ... лет:', 'Возраст');
let city = prompt('Я проживаю в городе:', 'Город');
let company = prompt('и работаю в компании:', 'Компания');
let phone = prompt('Мои контактные данные:','Телефон');
let email = prompt('Мои контактные данные:','Почта');

// 2.Задание
document.write("<br>"+"2.Задание"+'<br>')
age = (2022 - age);
document.write(name,' родился в ',age,' году.');

// 3.Задание
document.write("<br>"+"3.Задание")
let str = '111111';

if ((str[0]+str[1]+str[2]) == (str[0]+str[1]+str[2])) {
    document.write('<br>Да')
}else if((str[0]+str[1]+str[2]) !== (str[0]+str[1]+str[2])) {
    document.write('<br>Нет')
}

// 4.Задание
document.write("<br>"+"4.Задание")
let a = 1;

if (a > 0) {
    document.write('<br>Верно')
}else{
    document.write('<br>Неверно')
}

//5.Задание
document.write("<br>"+"5.Задание")
a = 10;
let b = 2;
let summa = a+b;

if (summa > 1) {
    document.write('<br>Сумма a и b равна =', summa**2);
}else {
    document.write('<br>Сумма a и b равна =', summa);
}
document.write('<br>Разность a и b равна =', a-b);
document.write('<br>Произведение a и b равна =', a*b);
document.write('<br>Частность a и b равна =', a/b);

//6.Задание
document.write("<br>"+"6.Задание")
if (a > 2 && a < 11 || b >= 6 && b < 14) {
    document.write('<br>Верно')
}else {
    document.write('<br>Неверно')
}

//7.Задание
document.write("<br>"+"7.Задание")
let n = 59;

if (n <= 15) {
    document.write('<br>Первая четверть часа.')
}else if(n <=30) {
    document.write('<br>Вторая четверть часа.')
}else if(n <=45) {
    document.write('<br>Третья четверть часа.')
}else if(n <=59) {
    document.write('<br>Четвёртая четверть часа.')
}

//8.Задание
document.write("<br>"+"8.Задание")
let d = 24;

if (d <= 11) {
    document.write('<br>Первая декада месяца.')
}else if(d <=21) {
    document.write('<br>Вторая декада месяца.')
}else if(d <=31) {
    document.write('<br>Третья декада месяца.')
}

// //9.Задание
document.write("<br>"+"9.Задание")

let numberOfDay = 200;
let year, month, week;

year = (numberOfDay / 365);
month = (numberOfDay / 31);
week = (numberOfDay / 7);

if (year < 1) {
    document.write("<br>"+"Меньше года.")
}else if(month < 1) {
    document.write("Меньше месяца.")
}else if (week < 1) {
    document.write("Меньше недели.")
}

document.write("<br>"+"year = " + year + "<br/>")
document.write("month = " + month + "<br/>")
document.write("week = " + week + "<br/>")
// //10.Задание
// switch (d) {
//     case (d<31):
//         document.write("<br>"+"Январь");
//     break;
// }





















































// function find(number_of_days) {
// 	var year, month, week, days;

// 	year = parseInt(number_of_days / 365);
// 	month =parseInt(number_of_days / 31);
// 	week = parseInt((number_of_days % 365) / 7);

// 	document.write("<br>"+"years = " + year + "<br/>");
// 	document.write("month = " + month + "<br/>");
// 	document.write("weeks = " + week + "<br/>");
// 	document.write("days = " + days + "<br/>");
// }
// 	var number_of_days = 864;
// 	find(number_of_days);

/* // let age = prompt('Ваш возраст?', 18);
// let access = (age>18) ? true : false;

// console.log(access);

// (age<18) ? console.log('Добро пожаловать') : console.log('Вход запрещён');

// let message = (age<3) ? 'Смарчёк' :
//               (age<18) ? 'Смарчёк с задатками ума' :
//               (age<100) ? 'Старость' : 'Пенсия';

// console.log(message) 


// let hour = 10;

// (hour < 10 || hour > 18) ? console.log('Офис закрыт')
//                          : console.log('Офис открыт');

// console.log(hour)

// let a =  2 + 10;

// switch (a) { */
//     case 3: */}
//         console.log('Маловато');
//         break;
        
//     case 4:
//         console.log('Средне');
//         break;

//     case 5:
//         console.log('Норм');
//         break;

//     case 6:
//         console.log('Многой');
//         break;

//     case 7:
//         console.log('ОйОйОйОйОй');
//         break;
//     default:
//         console.log('Я таких значений не знаю!!');
// }

// let b = 2+6;

// switch (b) {
//     case 4:
//     case 5:
//     case 6:
//     case 7:
//         console.log('Coll');
//     break;
//     default:
//         console.log('I mean thats alright ')
// }


// let val = prompt(' Какого числа день святого патрика?');

// if (val == 17) {
//     console.log('How did u know that?');
// }else if(val == 16){
//     console.log('So close..');
// }else{
//     console.log('How u didnt know that?');
// }