var c=399
let a=300 // global scope
if(true){ //block scope
    let a=10
    const b=20
    var c=30
    console.log("Inner Scope : " , a)
}


//console.log(a);
// console.log(b);
// console.log(c);


// Nested Scope

function one(){
    const username="prateek"

    function two(){
        const website="youtube"
        //console.log(username)
    }
    //console.log(website)

    two()
}
//one()

if(true){
    const username="prateek"
    if(username === "prateek"){
        const website=" youtube"
       //console.log(username + website)
    }
    //console.log(website)
}
//console.log(username)
//****************intersting*********************************
console.log(addone(5))
function addone(num){
    return num+1
}



const addtwo=function(num){
    return num+2
}

console.log(addtwo(5))