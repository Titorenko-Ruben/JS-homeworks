//Задание.1
document.write('Задание.1<br>')
function subtraction(a, b, c) {
    return (a - b) / c;
}

document.write(subtraction(10, 5, 2));

//Задание.2
document.write('<br>Задание.2<br>')
function square(number) {
    document.write('Число ' + number + ' в кубе = ' + Math.pow(number, 3) + '<br>')
    document.write('Число ' + number + ' в квадрате = ' + Math.pow(number, 2) + '<br>')
}

square(10);

//Задание.3
document.write('Задание.3<br>')
function min(a, b) {
    if (a < b) {
        return a;
    } else {
        return b;
    }
}

function max(a, b) {
    if (a > b) {
        return a;
    } else {
        return b;
    }
}

document.write('min = ' + min(5, 10) + '<br>')
document.write('max = ' + max(5, 10) + '<br>')

//Задание.4
document.write('Задание.4<br>')
function userArray() {
    arr = []
    do {
        numbers = prompt('Введите число.')
        if (Number(numbers)) {
            arr.push(Number(numbers));
        }
    } while (numbers != "" || numbers != 0)
}
function showArray() {
    document.write('Задание.4<br>')
    document.write('Получившийся массив ' + arr + '<br>')
}

userArray();
showArray();

//Задание.5
document.write('Задание.5<br>')

function isEven(number) {
    if (number % 2 == 0) {
        return true;
    } else {
        return false;
    }
}

document.write(isEven(11));

//Задание.6
document.write('<br>Задание.6<br>')

function onlyEven(arr) {
    let array = [];
    for (let i = 0; i < arr.length; i++) {
        if (isEven(arr[i]) == true) {
            array.push(arr[i])
        } else {
            continue;
        }
    }
    document.write(array)
}

onlyEven([2, 5, 7, 8, 10, 2222, 123237, 1812, 133, 2]);

//Задание.7
document.write('<br>Задание.7<br>')

function pyramid(height, symbol) {
    if (symbol != '' || symbol != ' ') {
        for (let i = 1; i <= height; i++) {
            for (let j = 0; j < i; j++) {
                document.write(symbol) * 2
            }
            document.write('<br>')
        }
    } else {
        for (let i = 1; i <= height; i++) {
            for (let j = 0; j < i; j++) {
                document.write('*') * 2
            }
            document.write('<br>')
        }
    }
}
pyramid(9, 'A')

//Задание.8
document.write('<br>Задание.8<br>')

//Задание.9
document.write('<br>Задание.9<br>')

function FibonacciNumbers(n) {
    let a = 1;
    let b = 1;
    for (let i = 3; i <= n; i++) {
        let c = a + b;
        a = b;
        b = c;
    }
    return b;
}
document.write(FibonacciNumbers(16)+'<br>')

//Задание.10
document.write('<br>Задание.10<br>')

function sumLess(num){
 let sum = 0;
 let arr = String(num).split('');
 for(let i=0;i<arr.length;i++){
    sum += parseInt(arr[i]);
 }
 if (sum >9) {
    return sumLess(sum);
 }
 else{
    return sum;
 }
}

let num = 13424;
let finalNum = sumLess(num);
document.write('Конечное число = '+ finalNum+'<br>');   

//Задание.11
document.write('Задание.11<br>')
let ar = [12,23,654,46,74]

function showArrayNumber(i){
    document.write(ar[i++]+' ')
    if(i<ar.length){
        showArrayNumber(i)
    }
}

showArrayNumber(0)

//Задание.12
document.write('<br>Задание.12 в console log.<br>')

function topBottomRamka(length){
    let ramka = "";
    for (let i=0; i<length; i++){
        ramka += "*";
    }
    console.log(ramka);
}

let string = [];
string.push("Домашняя работа \"Функции\"");

let groupN = prompt("Введите номер группы");
string.push("Выполнил студент гр. " + groupN);

let lastName = prompt("Введите фамилию");
let name = prompt("Введите имя");
let patronymic = prompt("Введите отчество");
let fio = lastName + ' ' + name + ' ' + patronymic;
string.push(fio);

let dlinaRamki = 0;
for (let i=0; i<string.length;i++){
    if (dlinaRamki < string[i].length){
        dlinaRamki = string[i].length;
    }
}
dlinaRamki += 2;
topBottomRamka(dlinaRamki);
for (let i=0; i<string.length; i++){
    let resultString = "*";
    for (let j=0; j<dlinaRamki;j++){
        if (string[i][j] === undefined){
            if (j === dlinaRamki-2){
                resultString += '*';
            }
            else{
                resultString += ' ';
            }
        }
        else{
            resultString += string[i][j];
        }
    }
    console.log(resultString);
}
topBottomRamka(dlinaRamki);
// Попросить разобрать 

//Задание.13
document.write('<br>Задание.13<br>')

let email = prompt('Введите email.')

function validateEmail(email) {
    let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

document.write(validateEmail(email));






















































































// function checkAge(age) {
//     if(age >= 18){
//         return true;
//     }else{
//         return false;
//     }
// }

// let check = checkAge();

// if(check == true){
//     console.log('Добро пожаловать!')
// }else{
//     console.log('Доступ запрещён!')
// }
