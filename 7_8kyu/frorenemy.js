// Напишите программу, которая фильтрует список строк и возвращает список, содержащий только имена ваших друзей.

// Если в имени ровно 4 буквы, можете быть уверены, что это ваш друг! В противном случае, можете быть уверены, что это не он...

// Input = ["Ryan", "Kieran", "Jason", "Yous"]
// Output = ["Ryan", "Yous"]

// Input = ["Peter", "Stephen", "Joe"]
// Output = []
// Входные строки будут содержать только буквы.
// Примечание: в выходных данных сохраните исходный порядок имен.


function friend(friends){
  //your code here
    const myFriends = friends.filter(name => name.length === 4)
    return myFriends
}

const resFriend = friend(["Ryan", "Kieran", "Jason", "Yous"])

console.log(resFriend);
