let arr=[1,2,4,5,6];
let narr=[]

//Before map

// for(let i=0;i<arr.length;i++){
//     narr[i]=arr[i]*4;
// }

//After map

narr=arr.map((value)=>{
    return value*6;
})

console.log(arr);
console.log(narr);