let arr1=["hello","i","MADDY"];
let a=arr1[0];
let b=arr1[1];
let c=arr1[2];
console.log(a,b,c);

//destructuring way

let arr2=["hiii","jnnkdnf","suhdsasiaudh"]
// let[m,n,o]=arr2;
// console.log(m,n,o);

//if we have to skip a value
// let[x,,z]=arr2;
// console.log(x,z);

//if to provide an extra value
let[v,w,q,e="cldkcl"]=arr2;
console.log(v,w,q,e);