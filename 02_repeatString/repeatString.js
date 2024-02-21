const repeatString = function(string, number) {
    let pom="";
    if(number<0){
        return "ERROR";
    }

    for (let i=0; i<number; i++){
        pom+=string;
    }

    return pom;
}

// Do not edit below this line
module.exports = repeatString;
