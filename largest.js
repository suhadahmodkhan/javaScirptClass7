const array = [1,2,566,65,90,3]
let largest = array[0]
for(var i = 0 ; i < array.length ; i++){
    if(largest < array[i]){
            largest = array[i]
    }
}
console.log(largest)