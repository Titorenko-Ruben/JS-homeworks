//Задание.1
document.write('Задание.1<br>')
function subtraction(a, b, c){
    return (a - b)/ c;
}

document.write(subtraction(10,5,2));

//Задание.2
document.write('<br>Задание.2<br>')
function square(number){
    document.write('Число '+number+' в кубе = '+Math.pow(number ,3)+'<br>')
    document.write('Число '+number+' в квадрате = '+Math.pow(number ,2)+'<br>')
}

square(10);

//Задание.3
document.write('Задание.3<br>')
function min(a,b){
    if(a<b){
        return a;
    }else{
        return b;
    }
}

function max(a,b){
    if(a>b){
        return a;
    }else{
        return b;
    }
}

document.write('min = '+min(5,10)+'<br>')
document.write('max = '+max(5,10)+'<br>')

//Задание.4
document.write('Задание.4<br>')
function userArray(){
    arr = []
    do {
        numbers = prompt('Введите число.')
        if(Number(numbers)){
            arr.push(Number(numbers));
        }
    }while(numbers != "" || numbers != 0)
}
function showArray(){
    document.write('Задание.4<br>')
    document.write('Получившийся массив '+arr+'<br>')
}

userArray();
showArray();

//Задание.5
document.write('Задание.5<br>')

function isEven(number){
    if(number%2 == 0){
        return true;
    }else{
        return false;
    }
}

document.write(isEven(11));

//Задание.6
document.write('<br>Задание.6<br>')

function onlyEven(arr){
    let array = [];
    for(let i=0;i<arr.length;i++){
        if(isEven(arr[i]) == true){
            array.push(arr[i])
        }else{
            continue;
        }
    }
document.write(array)
}

onlyEven([2,5,7,8,10,2222,123237,1812,133,2]);

//Задание.7
document.write('<br>Задание.7<br>')

function pyramid(height,symbol){
    if(symbol != ''|| symbol !=' '){
        for(let i=1;i<=height;i++){
            for(let j=0;j<i;j++){
                    document.write(symbol)*2
            }
            document.write('<br>')
        }
    }else{
        for(let i=1;i<=height;i++){
            for(let j=0;j<i;j++){
                    document.write('*')*2
            }
            document.write('<br>')
        }
    }
}
pyramid(9,'A')

//Задание.8
// document.write('<br>Задание.8<br>')

// function triangle(height){
//     let spaces = '_';
//     for(let i=1;i<=height;i++){
//         for(let j=0;j<i;j++){
//             document.write(spaces+'*')*3
//         }
//         document.write('<br>')
//     }
// }

// triangle(9);































































































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
