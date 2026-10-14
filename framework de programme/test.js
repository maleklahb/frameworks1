const double =(a)=>a*2;
console.log(double(2));
const calc=(prix,taux)=>prix*taux;
const calcul2=(prix)=>{
    if (prix>100)
        return 0.1*prix
    else return 0.05*prix;
}
//autrement la condition 
const calcul=(prix)=> prix > 100 ? 0.1*prix :0.05*prix;

console.log(calcul(100,0.2))
console.log(calcul(200,0.2))
console.log(calcul(50,0.2))
const fruitsrouges=["fraise","framboise","cerise"];
for(let fruit of fruitsrouges){
    console.log(`la ${fruit} cest bon !`);
}
fruitsrouges.forEach(fruit=>console.log(`la ${fruit} cest bon !`));
const nombres=[1,2,3,4,];
let doubles=nombres.map(n=>n*2);
console.log(doubles);
let d2=nombres.forEach(n=>console.log(n*2));
let paires=nombres.filter(n=>n%2==0);
console.log(paires);
