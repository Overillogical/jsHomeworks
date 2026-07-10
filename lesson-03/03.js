// Разработайте функцию findLargest, которая принимает три числа и возвращает наибольшее из них.

function findLargest(number1,number2,number3) {
    let largestNumber = number1;
    if (largestNumber <number2){
        largestNumber=number2
        if (largestNumber<number3){
            return number3
        }else{
            return number2
        }
    }else{
        if(largestNumber<number3){
            return number3
        }else{
            return number1
        }
    }
}

function findLargest(number1,number2,number3) {
let largestNumber = number1;
if (largestNumber<number2){
    largestNumber=number2
}
}