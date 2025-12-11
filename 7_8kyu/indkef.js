// Вам дан массив, содержащий несколько "even"слов, одно "odd"слово и несколько смешанных чисел.

// Определите, является ли какое-либо из чисел в массиве индексом слова "odd". Если да, верните true, в противном случае false.

function oddBall(arr){
// your code here
for (let i = 0; i < arr.length; i++) {
    if(arr[i] === arr.indexOf('odd')){
        return true
    }
}
return false
}


// const arrr = [1,2,'even',3, 'odd'];

// const res = oddBall(arrr);

// if(arr.indexOf('odd') === -1){
//     return false
// }
// else if (arr[i] === arr.indexOf('odd')){
//     return true 
// }








// console.log(arr.indexOf('odd'));

