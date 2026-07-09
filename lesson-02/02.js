/*
* Напишите код, который симулирует бросок двух шестигранных игральных кубиков и определяет, выпал ли выигрышный дубль.
* В переменные dice1 и dice2 должны присваиваться случайные целые числа от 1 до 6.
* Дубль считается выигрышным, если на обоих дайсах выпало одно и то же число, и это число больше 3.
* Полученное булево значение сохраните в переменной isWinningDouble

* Для успешного прохождения тестов не меняйте названия переменных!
*/

let dice1 =0; // your code
let dice2 =0;// your code
let isWinningDouble =false;// your code

//Doing random generator for dice1 and dice2 throw
dice1 = Math.floor(Math.random()*7);
dice2 = Math.floor(Math.random()*7);
//Doing logic which decides if both throws make it a win or loss
if(dice1===dice2 && dice1>3&&dice2>3){
  isWinningDouble=true;
}

console.log('Первый бросок: ' + dice1)
console.log('Второй бросок: ' + dice2)
if (isWinningDouble) {
  console.log('Выигрышный дубль!')
} else {
  console.log('Не выигрышный дубль.')
}

