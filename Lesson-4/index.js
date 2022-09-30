//Задание.1
document.write('Задание.1<br>');
let arr = [1,2,3,4,5];

for(let i = 0;i<arr.length;i++){
    document.write(arr[i])
}

//Задание.2
document.write('<br>Задание.2<br>');

arr = [-2, -1, -3, 15, 0, -4, 2, -5, 9, -15, 0, 4, 5, -6, 10, 7];

for(let i = 0;i<arr.length;i++){
    if(arr[i]>-10 && arr[i]<-3){
        document.write(arr[i]);
    }
}

//Задание.3
document.write('<br>Задание.3<br>');
arr = [];
let result = 0;

for(let i = 23;i<=57;i++){
    arr.push(i);
}
document.write(arr+'<br>')
for(let i = 0;i<arr.length;i++){
    result += arr[i]
}
document.write(result+'<br>')

//Задание.4
document.write('Задание.4<br>');
arr = ['10', '20', '30', '50', '235', '3000'];

for(let i = 0;i<arr.length;i++){
    if(arr[i][0]==1 || arr[i][0]==2){
        document.write(arr[i]+' ')
    }
}

//Задание.5
document.write('<br>Задание.5<br>');
arr = ['ПН','ВТ','СР','ЧТ','ПН','СБ','ВС'];

for(let i = 0;i<arr.length;i++){
    if(i<5){
        document.write(arr[i]+' ')
    }else{
        document.write(arr[i].bold()+' ')
    }
}

//Задание.6
document.write('<br>Задание.6<br>');
arr = [1,2,3,4,5];

arr.push(6);
document.write(arr[5])

//Задание.7
document.write('<br>Задание.7<br>');
arr = [0];

do {
    numbers = prompt('Введите число.')
    if(Number(numbers)){
        arr.push(Number(numbers));
    }
}while(numbers != "" || numbers != 0)
document.write('То что ввели '+arr+'<br>')

arr.sort(function(a, b) {
    return a - b;
  });

document.write('Отсортированный вариант '+arr+'<br>')

//Задание.8
document.write('Задание.8<br>');
let i = 0;
arr = [12, false, 'Текст', 4, 2, -5, 0];
arrRevers = arr.reverse()
while(i<arr.length){
    document.write(arrRevers[i]+' ')
    i++
}

//Задание.9
document.write('<br>Задание.9<br>');
let count = 0;
arr = [ 5, 9, 21, , , 9, 78, , , , 6];

for(i=0;i<arr.length;i++){
    if(arr[i] == arr['']){
        count= count + 1
    }
}
document.write('Количество пустых элементов '+count+'<br>');

//Задание.10
document.write('Задание.10<br>');
arr = [48,9,0,4,21,2,1,0,8,84,76,8,4,13,2];
let sum;

sum = arr[arr.indexOf(0)] + arr[arr.lastIndexOf(0)]

document.write('Сумма двух нулей равна = '+sum+'<br>')









