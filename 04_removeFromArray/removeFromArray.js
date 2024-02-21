const removeFromArray = function(array=[], ...number) {
    let length = array.length
    let pom=[];
    let licznik=0;
    for(let i=0; i<length; i++){
        if(array[i]!=number){
            pom[licznik]=array[i];
            licznik++;
        }
    }
    return pom;
};

// Do not edit below this line
//console.log(removeFromArray([1,2,3,4], 3));
module.exports = removeFromArray;
