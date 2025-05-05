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

for (let i = 0; i < bikes.length; i++){
let bikePeso = bikes[i].peso; 
 weight.push(bikePeso);

}
let minWeight = weight[0];
 for(let i = 0; i < weight.length; i++){
    let curWeight = weight[i];
    if(curWeight < minWeight){
        minWeight = curWeight;
    }
 
 }
 console.log(minWeight);
 
 


