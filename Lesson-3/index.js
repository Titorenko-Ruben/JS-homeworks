// Задание.1
for(i=1; i<=50; i++) {
    console.log(i);
}

for(i=35; i>=8; i--) {
    if(i==35){
        console.log('Вторая часть задания.')
    }
    console.log(i);
}

// Задание.2
let j = 89;
document.write('Задание.2')

while (j>=11 ) {
    document.write('<br/>'+j);
    j--
}

// Задание.3
let b;
let sum = 0;

for(b=0;b <=100; b++){
    if(b==0){
        console.log('Задание.3');
    }
    sum=sum+b;
    if(b==100){
        console.log(sum);
    }
    
}

//Задание.4
let g;
let sum1 = 0;

for(g=1;g<=5;g++){
    if(g==1){
        console.log('Задание.4');
    }
    sum1=sum1+g
    console.log(sum1)
}
//Задание.5
for(let q=8;q<=56;q++){
    if(q==8){
        console.log('Задание.5');
    }
    if(q%2==0){
        console.log(q);
    }
}

//Задание.6
let sum2;

for(a=2;a<=10; a++){
    for(let j=2; j<=10; j++){
        if(a==2&&j==2){
            document.write('<br>Задание.6<br>')
        }
            sum2=a*j
            document.write(a+'*'+j+'='+sum2+'<br>')
        if(j==10){
            document.write('<br>')
        }
    }
}

//Задание.7
let n=1000;
let num=0;

for(n,num; n>50; num++){
    n/=2
}
document.write('Задание.7<br>')
document.write(n+'<br>');
document.write(num+'<br>');


//Задание.8
let user = prompt("Введите число, для задания 8.");
// let user = '100';
let sum5 = 0;
let number = 0;

for(let p=0; p < user.length;p++) {
    sum5=sum5+Number(user[p])
    number=Number(user)/user.length;
}
 if(user==0||''){
    document.write('Задание.8<br>')
    document.write('Вы ничего не ввели или же ввели 0.')
 }else{
document.write('Задание.8<br>')
document.write('Сумма чисел равна = '+sum5+'<br>')
document.write('Среднее  арифметическое число = '+number)}

//Задание.9
console.log('Задание.9')
let str, x, largest, smallest;
    str = '4 98 4 6 1 32 4 65 4 3 5 7 89 7 10 1 36 8 9';
    x = 0;
    largest = 0;
    smallest = Infinity;
for(let i = 0; i < str.length - 1; i++) {
    if(str[i+1] == ' ') {
        x = str[i];
    }else {
        x = str[i] + str[i+1];
    }
    if (x >= largest){
        largest = x;
    }
}
for(let i = 0; i < str.length - 1; i++) {
    if(str[i+1] == ' ') {
        x = str[i];
    }else {
        x = str[i] + str[i+1];
    }
    if (x <= smallest){
        smallest = x;
    }
}
console.log('Самое большое число в строке = '+largest)
console.log('Самое маленькое число в строке= '+smallest)

//Задание.10



































// let arr = ['wqe', 'rty', './.'];

// for(let i = 0; i<arr.length; i++ ) {
//     console.log(arr[i].length)
// }

// let i = 10;

// do {
//     console.log(i);
//     i++;
// } while(i <= 16);