// Напишите функцию, которая принимает в качестве аргумента массив строк и возвращает отсортированный массив,
//  содержащий те же строки, упорядоченные от самой короткой к самой длинной.

// Например, если этот массив был передан в качестве аргумента:

// ["Telescopes", "Glasses", "Eyes", "Monocles"]
// Ваша функция вернет следующий массив:

// ["Eyes", "Glasses", "Monocles", "Telescopes"]
// Все строки в массиве, передаваемом в вашу функцию, будут разной длины, поэтому вам не придётся решать,
//  как упорядочить несколько строк одинаковой длины.

// function sortByLength (array) {
//   // Return an array containing the same strings,
//   // ordered from shortest to longest
//     return [];
// }


function sortByLength (array) {
    return array.sort((a,b) => a.length - b.length)
}



sortByLength(["Telescopes", "Glasses", "Eyes", "Monocles"])

console.log(sortByLength(["Telescopes", "Glasses", "Eyes", "Monocles"]));
