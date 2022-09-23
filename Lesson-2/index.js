let age = prompt('Ваш возраст?', 18);
let access = (age>18) ? true : false;

console.log(access);

(age<18) ? console.log('Добро пожаловать') : console.log('Вход запрещён');

let message = (age<3) ? 'Смарчёк' :
              (age<18) ? 'Смарчёк с задатками ума' :
              (age<100) ? 'Старость' : 'Пенсия';

console.log(message) 


let hour = 10;

(hour < 10 || hour > 18) ? console.log('Офис закрыт')
                         : console.log('Офис открыт');

console.log(hour)