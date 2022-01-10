//<__________________THIS ONLY FOR REACT__________________>

//BROWSER ENVIRONMENT
//NON STRICT MODE
  
//1-case

// console.log(this);//windows
 
function amt(){
    console.log(this);//windows
}
// amt();

//2-case

let obj={
    name:"supercool",
    func:amt
}

obj.func();//self object


// FOR BIND PLEASE REFER TO NOTES



