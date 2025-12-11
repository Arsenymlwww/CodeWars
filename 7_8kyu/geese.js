// Напишите функцию, которая принимает список строк в качестве аргумента и возвращает отфильтрованный список, 
// содержащий те же элементы, но без слова «гуси».

// Гуси — это любые строки в следующем массиве, который предварительно заполнен в вашем решении:

//   ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"]
// Например, если этот массив был передан в качестве аргумента:

//  ["Mallard", "Hook Bill", "African", "Crested", "Pilgrim", "Toulouse", "Blue Swedish"]
// Ваша функция вернет следующий массив:

// ["Mallard", "Hook Bill", "Crested", "Blue Swedish"]
// Элементы в возвращаемом массиве должны быть расположены в том же порядке,
//  что и в исходном массиве, переданном вашей функции, но без слова «гуси». Обратите внимание, что все строки будут иметь тот же регистр, 
//  что и предоставленные, а некоторые элементы могут повторяться.


function gooseFilter (birds) {
    var geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];
    const filteredArray = birds.filter(bird => {
        return !geese.includes(bird);
    });
    return filteredArray;
}