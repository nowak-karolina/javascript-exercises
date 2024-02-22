const sumAll = function(number1, number2) {
    if(typeof number1 != "number" || typeof number2!= "number"){
        return "ERROR";
    }

    let pom1=Math.min(number1,number2);
    let pom2=Math.max(number1, number2);

    if(pom1 <0){
        return "ERROR";
    }

    let sum=0;
    let range;
    range=Math.abs(pom2-pom1)+1;

    for(let i=pom1; i<=range; i++){
        sum+=i;
        //console.log(sum);
    }

    return sum;

};
//console.log(sumAll(1,4));
// Do not edit below this line
module.exports = sumAll;
