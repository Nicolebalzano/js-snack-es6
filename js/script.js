// SNACK 1
const weight = [];
const bikes = [
    {
        nome : "superBike",
        peso : 13 ,
    },
    {
        nome : "bike2000",
        peso : 11 ,
    },
    {
        nome : "theFaster",
        peso : 20 ,
    },
    {
        nome : "flyBike",
        peso : 17,
    },
    {
        nome : "theGreatest",
        peso : 25 ,
    }
]
let bikePeso = 0; 
for (let i = 0; i < bikes.length; i++){
 bikePeso = bikes[i].peso; 
 weight.push(bikePeso);

}
let maxWeight = weight[0];
 for(let i = 0; i < weight.length; i++){
    let curWeight = weight[i];
    if(curWeight < maxWeight){
        maxWeight = curWeight;
    }
 
 }
 console.log(maxWeight);
 
 


