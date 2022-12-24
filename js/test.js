const hello = ()=>{
    console.log("Hey , how are you ? i am aight")
    return "i am okie"
}

function OnePlusAvg (x, y){
    return 1 + (x + y)/2
}

const sum = (p, q) =>{
    return p + q 
}
let a = 1;
let b = 2;
let c = 3;
let v = hello();
console.log(v)
console.log("Sum of a and b is " , OnePlusAvg(a, b))
console.log("Sum of c and b is " , OnePlusAvg(c, b))
console.log("Sum of a and c is " , OnePlusAvg(c, a))
console.log(sum(9, 7))