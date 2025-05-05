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
let min = 1;
let max = 30;
let finalValues = [];

// SNACK 2
const teams = [
    {
        nome : "Napoli",
        puntiFatti : 0, 
        falliSubiti : 0,
    },
    {
        nome :"Torino",
        puntiFatti : 0,
        falliSubiti : 0,
    },
    {
        nome :"Juventus",
        puntiFatti : 0,
        falliSubiti : 0,
    },
    {
        nome :"Roma",
        puntiFatti : 0,
        falliSubiti : 0,
    },
    {
        nome :"Milan",
        puntiFatti : 0,
        falliSubiti : 0,
    }
]
// variabile che genera il numero random
    let random = (Math.floor(Math.random() * (max - min + 1) + min));
    console.log(random);
    
    for (let i = 0; i < teams.length; i++) {
        let curFalli = random;
      let teamNome = teams[i].nome;
      finalValues.push({falliSubiti : curFalli, teamName : teamNome});
    }
    console.log(finalValues);
    

    
    






