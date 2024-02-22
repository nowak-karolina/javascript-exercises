const removeFromArray = function(array=[], ...args) {
    for(arg of args){
        while(array.includes(arg)){
            array.splice(array.indexOf(arg),1);
        }
    }
    return array;
};

// Do not edit below this line
//console.log(removeFromArray([1,2,3,4], 3));
module.exports = removeFromArray;
