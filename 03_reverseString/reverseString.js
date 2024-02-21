const reverseString = function(word) {
    let size = word.length-1
    let pom="";

    for(let i=size; i>=0; i--){
        pom+=word.charAt(i);
    }

    return pom;
};


// Do not edit below this line
module.exports = reverseString;
