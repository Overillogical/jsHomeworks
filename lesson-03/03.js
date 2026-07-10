// Разработайте функцию findLargest, которая принимает три числа и возвращает наибольшее из них.

function findLargest(number1,number2,number3) {
    let largest = number1;
    if (number2 > largest) largest = number2;
    if (number3 > largest) largest = number3;
    return largest;
}
