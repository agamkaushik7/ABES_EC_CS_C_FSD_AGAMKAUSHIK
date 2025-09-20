function isODD(a){
    if(a%2!==0){
        return "value is odd";
    }
    else{
        return "value is even";
    }
}
function isODDUsingTernary(a){
    return a%2!==0? "value is odd":"value is even";
}

console.log(isODD(3));
console.log(isODDUsingTernary(3));
// function as expression
let funAsExpression= function isODD(a){
return a%2!==0? "value is odd":"value is even";
}
console.log(funAsExpression)
//arrow function
const arrowFunc=(a)=>{
    return a%2!==0? "value is odd":"value is even";
}
console.log("output from arrowFunc(4):", arrowFunc(4));
(function lifefun(){
    console.log("Inside IIFE function");
}

)();