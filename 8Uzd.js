/*
**** Challenge *****

Sukurti funkcija kuri priima tecnologija kaip argumenta ir grazina

"I can work with <<CSS>> like a pro"

Bet jei nepaduodate jokio parametro funkcija grazina 

"I can work with some technologies like a pro"

*/


const sentence = (tech = 'some technologies') => `I can work with ${tech} like a pro`;

console.log(sentence())  
console.log(sentence('CSS'))