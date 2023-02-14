let sum = closureFunc(0);

function closureFunc(a){
    return function(b){
        return a = a + b
    }
}

console.log(sum(3)); // 3
console.log(sum(5)); // 8
console.log(sum(20)); // 28
