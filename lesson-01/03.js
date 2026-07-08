/* Используйте цикл while для нахождения суммы всех нечётных чисел от 1 до 20.
  Результат вычислений сохраните в переменной sum.

  Вам понадобиться оператор остатка от деления %. Например, выражение 5 % 2 вернёт остаток 1.
*/

// your code
let sum=0;
let startingNumber= 1;
let finishNumber=20;
while(startingNumber<=finishNumber){
    if(startingNumber%2===1){
        sum+=startingNumber;
    }
    startingNumber+=1;
}
console.log(sum)