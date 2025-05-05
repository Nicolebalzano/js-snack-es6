// SNACK 1
// const weight = [];
// const bikes = [
//     {
//         nome : "superBike",
//         peso : 13 ,
//     },
//     {
//         nome : "bike2000",
//         peso : 11 ,
//     },
//     {
//         nome : "theFaster",
//         peso : 20 ,
//     },
//     {
//         nome : "flyBike",
//         peso : 17,
//     },
//     {
//         nome : "theGreatest",
//         peso : 25 ,
//     }
// ]

// for (let i = 0; i < bikes.length; i++){
// let bikePeso = bikes[i].peso; 
//  weight.push(bikePeso);

// }
// let minWeight = weight[0];
//  for(let i = 0; i < weight.length; i++){
//     let curWeight = weight[i];
//     if(curWeight <= minWeight){
//         minWeight = curWeight;
//     }
 
//  }
//  console.log(minWeight);


// SNACK 2
// let min = 1;
// let max = 30;
// let finalValues = [];


// const teams = [
//     {
//         nome : "Napoli",
//         puntiFatti : 0, 
//         falliSubiti : 0,
//     },
//     {
//         nome :"Torino",
//         puntiFatti : 0,
//         falliSubiti : 0,
//     },
//     {
//         nome :"Juventus",
//         puntiFatti : 0,
//         falliSubiti : 0,
//     },
//     {
//         nome :"Roma",
//         puntiFatti : 0,
//         falliSubiti : 0,
//     },
//     {
//         nome :"Milan",
//         puntiFatti : 0,
//         falliSubiti : 0,
//     }
// ]
// // variabile che genera il numero random
//     let random = (Math.floor(Math.random() * (max - min + 1) + min));
//     for(let i = 0; i < teams.length; i++){
//     teams[i].puntiFatti = random;
//         teams[i].falliSubiti = random;
//         }
//         console.log(teams);
        
    

//     for (let i = 0; i < teams.length; i++) {
//         let curFalli = teams[i].puntiFatti;
//       let teamNome = teams[i].nome;
//       finalValues.push({falliSubiti : curFalli, teamName : teamNome});
//     }
//     console.log(finalValues);


// Snack 3 (Bonus)
// Scrivere una funzione che accetti tre argomenti, un array e due numeri (a più piccolo di b).
// La funzione ritornerà un nuovo array con i valori che hanno la posizione compresa tra i due numeri. Non usare i metodi di array di JS
let finalNumbers = [];
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let a = 3;
let b = 7;

numeriCompresi(a, b, numbers);
function numeriCompresi (a, b, numbers){
    for (let i = 0; i < numbers.length; i++) {
    let curNum = numbers[i];
        if(curNum >= a && curNum <= b){
            finalNumbers.push(curNum);
        }
   
    } return finalNumbers;
}
console.log(finalNumbers);








    

    
    






