// В этом небольшом задании вам дана строка чисел, разделенных пробелами, и вам нужно выбрать наибольшее и наименьшее число.

// Примеры
// highAndLow("1 2 3 4 5"); // return "5 1"
// highAndLow("1 2 -3 4 5"); // return "5 -3"
// highAndLow("1 9 3 4 -5"); // return "9 -5"
// Примечания
// Все номера действительны Int32, нет необходимости их проверять.
// Во входной строке всегда будет хотя бы одно число.
// Выходная строка должна состоять из двух чисел, разделенных одним пробелом, причем наибольшее число должно быть первым.



// ---------------------------------------------------

let hh = "1 2 3 4 5";
// hh = hh.split(' ');
// hh = hh.map(Number);


function highAndLow(numbers){
  // ...
    // debugger
    numbers = numbers.split(' ');
    numbers = numbers.map(Number);
    let min = numbers[0];
    let max = numbers[0];
    for (let i = 0; i < numbers.length; i++) {
        if (min >= numbers[i]){ 
            min = numbers[i];
        } else if (max <= numbers[i]){
            max = numbers[i]
        }
    }
    return `${max} ${min}`
}

let result = highAndLow(hh)