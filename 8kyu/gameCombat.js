// Create a combat function that takes the player's current health and the amount of damage received,
//  and returns the player's new health.
//  Health can't be less than 0.

// Создайте боевую функцию, которая принимает текущее здоровье игрока и количество полученного урона,
//  а затем возвращает новое здоровье игрока. Здоровье не может быть меньше 0 .




function combat(health, damage) {
  // Write your code here
  if(health>=damage){
health = health - damage
return health} 
else if (health < damage){
    return 0
}
}


// let hp = combat(150,160)


