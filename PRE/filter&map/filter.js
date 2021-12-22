let fruits = ["apples", "oranges", "mango"]
let narr=[]

//before filter
//  for(let i=0;i<fruits.length;i++){
//      let x=fruits[i];
//      if(x.length>5){
//          narr.push(x);
//      }
//  }


//after filter

narr=fruits.filter((x)=>{
    return x.length>6;
})
 console.log(fruits);
 console.log(narr);