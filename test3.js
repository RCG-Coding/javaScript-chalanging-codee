// finding min max of an array in 3 ways
const ar = [34,37,21,7,46,2,97,46,86,53,65,9,78,54]

// first way (usin max min method)
const max1 = Math.max(...ar);
const min1 = Math.min(...ar);

console.log("Max in first way : ", max1)
console.log("Max in first way : ", min1)
console.log()

//second way 
let max2 = ar[0]
let min2 = ar[0]

for(val of ar){
    if(max2 < val)
        max2 = val

    if(min2 > val)
        min2 = val
        
}

console.log("Max in second way : ", max2)
console.log("Max in second way : ", min2)
console.log()

//third way
let max3 = ar[0];
let min3 = ar[0];

for(value of ar){
    if(max3 < value)
        max3 = value;
    
    if(min3 > value)
        min3 = value

}

console.log("Max in third way : ", max3)
console.log("Min in third way : ", min3)