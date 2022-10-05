//Калькулятор
let Calc = function () {
    this.work = function () {
        this.able = confirm('Включить калькулятор?')
        if (this.able === true) {
            document.write('Калькулятор включён.' + '<br>')
            this.get();
        } else {
            document.write('Калькулятор выключен.' + '<br>' + '<hr>')
        }
    }
    this.get = function () {
        this.a = +prompt('Введите число a.');
        this.b = +prompt('Введите число b.');
        this.oper = prompt('Введите оператор.Например: + - * /');
        if (this.a === undefined) {
            this.a = 0;
        } if (this.b === undefined) {
            this.b = 0;
        }

        this.operation();
    }

    this.operation = function () {
        switch (this.oper) {
            case '+':
                this.result = this.a + this.b
                break;
            case '-':
                this.result = this.a - this.b
                break;
            case '*':
                this.result = this.a * this.b
                break;
            case '/':
                this.result = this.a / this.b
                break;
        }

        this.show();
    }
    this.show = function () {
        if (this.result === undefined) {
            document.write('Неверно указаны параметры.' + '<hr>' + '<br>')
        } else {
            document.write(this.a + ' ' + this.oper + ' ' + this.b + " " + '=' + ' ' + this.result + '<hr>' + '<br>')
        }
    }
}
let calc = new Calc();
calc.work();
//Лампочка
let Lightbulb = function () {
    this.work = function () {
        this.able = confirm('Включить лампочку?')
        if (this.able === true) {
            document.write('Лампочка включена.' + '<br>')
            this.get();
        } else {
            document.write('Лампочка выключена.' + '<br>' + '<hr>')
        }
    }
    this.get = function () {
        this.power = +prompt('Напишите мощность лампочки. Например: 90.');
        this.cost = +prompt('Напишите стоимость электро энергии. Например: 0.2000.');
        this.time = +prompt('Напишите сколько времени проработала лампочка в часах. Например: 100.');
        if (this.power === 0 || this.power === undefined) {
            this.power = 100;
        }
        if (this.cost === 0 || this.cost === undefined) {
            this.cost = 0.2000;
        }
        if (this.time === 0 || this.time === undefined) {
            this.time = 100;
        }
        this.operation();
    };
    this.operation = function () {
        this.result = (this.power / 1000) * this.cost * this.time
        this.show();
    }
    this.show = function () {
        document.write('Стоимость за потраченную электроэнергию равна = ' + Math.round(this.result) + ' бел.руб.' + '<hr>' + '<br>')
    }
}

let bulb = new Lightbulb();

bulb.work()
//Автомобиль
let Vehicle = function () {
    this.work = function () {
        this.able = confirm('Завести машину?')
        if (this.able === true) {
            document.write('Машина заведена.' + '<br>')
            this.get();
        } else {
            document.write('Машины не заведена.' + '<br>' + '<hr>')
        }
    }
    this.get = function () {
        this.brand = prompt('Напишите марку авто. Например: audi.');
        this.number = prompt('Напишите номер авто. Например: 1234 TE-7.');
        this.transmission = confirm('Поставить коробку в драйв?');
        if (this.brand === '') {
            this.brand = 'Audi';
        }
        if (this.number === '') {
            this.number = '1234 TE-7';
        }
        if (this.transmission === true) {
            this.speed = +prompt('Напишите среднюю скорость автомобиля в км/ч. Например: 60.');
            this.time = +prompt('Напишите сколько часов вы желаете ехать. Например: 100.')
            if (this.speed == '') {
                this.speed = 60
            }
            if (this.time == '') {
                this.time = 100
            }
            this.operation();
        } else {
            this.show();
        }
    };
    this.operation = function () {
        this.result = this.speed * this.time
        this.show();
    };
    this.show = function () {
        if (this.transmission === true) {
            document.write('Автомобиль марки ' + this.brand + ' с номером ' + this.number + ', проехал ' + this.result + ' км за ' + this.time + ' часов со средней скоростью ' + this.speed + ' км/ч.' + '<hr>' + '<br>');
        } else {
            document.write('Автомобиль марки ' + this.brand + ' с номерным знаком ' + this.number + ' простоял на нейтральной передаче.' + '<hr>' + '<br>')
        }
    }
}

let car = new Vehicle();
car.work();

// Контакты
let Contacts = function (name, lastName, age, email, phone) {
    this.name = name;
    this.lastName = lastName;
    this.age = age;
    this.email = email;
    this.phone = phone;
}

let bob = new Contacts('Bob', 'Bobov', 8, 'bob@gmail.com', '+375(29)123-12-23');
let alex = new Contacts('Alex', 'Alexov', 18, 'alex@gmail.com', '+375(29)223-22-11');
let artur = new Contacts('Artur', 'Arturov', 30, 'artur@gmail.com', '+375(29)773-91-63');
let anton = new Contacts('Anton', 'Antonov', 64, 'anton@gmail.com', '+375(29)912-99-13');

let ContactShow = function () {
    this.get = function () {
        this.contact = confirm('Вы хотите узнать информцию об одном контакте?');
        if (this.contact === true) {
            this.person = prompt('О ком вы хотите узнать? Например: Bob, Alex, Artur, Anton.')
            this.show();
        } else {
            this.showAll();
        }
    }
    this.show = function () {
        if (this.person === 'Bob' || this.contact === 'bob') {
            document.write('Имя: ' + bob.name + '<br>')
            document.write('Фамилия: ' + bob.lastName + '<br>')
            document.write('Возраст: ' + bob.age + '<br>')
            document.write('Email: ' + bob.email + '<br>')
            document.write('Телефон: ' + bob.phone + '<br>')
        } else if (this.person === 'Alex' || this.contact === 'alex') {
            document.write('Имя: ' + alex.name + '<br>')
            document.write('Фамилия: ' + alex.lastName + '<br>')
            document.write('Возраст: ' + alex.age + '<br>')
            document.write('Email: ' + alex.email + '<br>')
            document.write('Телефон: ' + alex.phone + '<br>')
        } else if (this.person === 'Artur' || this.contact === 'artur') {
            document.write('Имя: ' + artur.name + '<br>')
            document.write('Фамилия: ' + artur.lastName + '<br>')
            document.write('Возраст: ' + artur.age + '<br>')
            document.write('Email: ' + artur.email + '<br>')
            document.write('Телефон: ' + artur.phone + '<br>')
        } else if (this.person === 'Anton' || this.contact === 'Anton') {
            document.write('Имя: ' + anton.name + '<br>')
            document.write('Фамилия: ' + anton.lastName + '<br>')
            document.write('Возраст: ' + anton.age + '<br>')
            document.write('Email: ' + anton.email + '<br>')
            document.write('Телефон: ' + anton.phone + '<br>')
        } else {
            document.write('Такого контакта не существет.')
        }
    }
    this.showAll = function () {
        document.write('Bob:' + '<br>')
        document.write('Имя: ' + bob.name + '<br>')
        document.write('Фамилия: ' + bob.lastName + '<br>')
        document.write('Возраст: ' + bob.age + '<br>')
        document.write('Email: ' + bob.email + '<br>')
        document.write('Телефон: ' + bob.phone + '<br>'+ '<br>'+ '<hr>')
        document.write('Alex:' + '<br>')
        document.write('Имя: ' + alex.name + '<br>')
        document.write('Фамилия: ' + alex.lastName + '<br>')
        document.write('Возраст: ' + alex.age + '<br>')
        document.write('Email: ' + alex.email + '<br>')
        document.write('Телефон: ' + alex.phone + '<br>'+ '<br>'+ '<hr>')
        document.write('Artur:' + '<br>')
        document.write('Имя: ' + artur.name + '<br>')
        document.write('Фамилия: ' + artur.lastName + '<br>')
        document.write('Возраст: ' + artur.age + '<br>')
        document.write('Email: ' + artur.email + '<br>')
        document.write('Телефон: ' + artur.phone + '<br>'+ '<br>'+ '<hr>')
        document.write('Anton:' + '<br>')
        document.write('Имя: ' + anton.name + '<br>')
        document.write('Фамилия: ' + anton.lastName + '<br>')
        document.write('Возраст: ' + anton.age + '<br>')
        document.write('Email: ' + anton.email + '<br>')
        document.write('Телефон: ' + anton.phone + '<br>'+ '<hr>')

    }
}


let proba = new ContactShow();
proba.get();














































































// let user = {
//     name: 'John',
//     age: 18,
//     gender: 'male',
//     hello: function () {
//         console.log('Привет')
//     }
// };
// console.log(user)
// user.heigth = 180;
// console.log(user)
// delete user.age
// console.log(user)
// user.name = 'Alex'
// console.log(user)
// if ('name' in user) {
//     console.log('Существует')
// } else {
//     console.log('Не существует')
// }
// if ('lalala' in user) {
//     console.log('Существует')
// } else {
//     console.log('Не существует')
// }
// if (user.lalala === undefined) {
//     console.log('lalala - undefined')
// }
// user['last-name'] = 'kto-to tam'
// console.log(user)
// user.size = {
//     top: 50,
//     middle: 60,
//     bottom: 40
// }
// // Рекомендованный способ
// console.log(user.size.top)
// console.log(user['size'])
// for (let key in user) {
//     console.log(key + ': ' + user[key])
// }
// let userClone = {};
// for (let keyName in user) {
//     userClone[keyName] = user[keyName]
// }
// console.log(userClone)
// user.hello()
// user.hello = function () {
//     console.log('Привет! Меня зовут ' + this.name)
// }
// user.hello()
// user.setName = function (name) {
//     this.name = name;
// }
// user.setName('Bob')
// user.hello()
// let User = function () {
//     this.name = 'No name';
//     this.age = 0;
//     this.canWalk = false;
// };
// let userAlex = new User(),
//     userClara = new User(),
//     userAnton = new User();
// console.log(userAlex)
// userAlex.name = 'Alex';
// userClara.name = 'Clara';
// userAnton.name = 'Anton';
// let Animal = function (name, walk) {
//     this.name = name;
//     this.canWalk = walk;
// }
// let cat = new Animal('Cat', true),
//     dog = new Animal('Dog', true);
// cat.cantTalk = 'Meow-meow';
// dog.cantTalk = 'Gaw-gaw!!';
// console.log(cat)
// console.log(dog)
// let Calc = function(){
//     this.get = function(){
//         this.a = +prompt('Введите число a.');
//         this.b = +prompt('Введите число b.');
//         this.oper= prompt('Введите оператор.');

//         this.operation();
//     }
//     this.operation = function(){
//         switch(this.oper){
//             case '+':
//                 this.result = this.a + this.b
//             break;
//             case '-':
//                 this.result = this.a - this.b
//             break;
//             case '*':
//                 this.result = this.a * this.b
//             break;
//             case '/':
//                 this.result = this.a / this.b
//             break;
//         }
//         this.show();
//     }
//     this.show = function(){
//         console.log(this.result)
//     }
// }
// let calc = new Calc();
// calc.get();