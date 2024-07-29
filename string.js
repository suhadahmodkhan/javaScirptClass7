const string = "hello";
const char = "e" ;
let contain = false 
for(var i = 0 ; i < string.length ; i++){
    if(string[i] === char){
        contain = true
        break
    }
}
console.log(contain)