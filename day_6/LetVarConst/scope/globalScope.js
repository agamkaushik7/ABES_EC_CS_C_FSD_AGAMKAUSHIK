var a = 20 ;
var b = 30 ;
const pi = 3.14 ;
console.log("Global Scope") ;
console.log("value of a in global scope is " + a) ;
console.log("value of b in global scope is " + b) ;
console.log("value of pi in global scope is " + pi) ;
function callValues(a,b,pi){
    console.log("value of a in function is " + a) ;
    console.log("value of b in function is " + b) ;
    console.log("value of pi in function is " + pi) ;
}
callValues(a,b,pi);