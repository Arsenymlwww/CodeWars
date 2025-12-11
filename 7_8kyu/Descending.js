// Ваша задача — создать функцию, которая принимает в качестве аргумента 
// любое неотрицательное целое число и возвращает его вместе с цифрами в порядке убывания. По сути,
//  нужно переставить цифры, чтобы получить максимально возможное число.

// Примеры:
// Вход: 42145 Выход:54421

// Вход: 145263 Выход:654321

// Вход: 123456789 Выход:987654321


// =====================

function descendingOrder(n){
  //...
  const numberString = String(n);
  const desArr = numberString.split('')
  desArr.sort((a,b) => b-a);
  const arrString = desArr.join('');
  const resNumber = Number(arrString);
  return resNumber
}
const err = 1334556995
console.log(descendingOrder(err));
