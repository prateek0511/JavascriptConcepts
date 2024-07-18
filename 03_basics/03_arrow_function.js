const user={
    username:"prateek",
    price:999,

    welcomeMessage:function(){
        console.log(`${this.username} , Welcome to Website`);
        console.log(this)
    }
}
// user.welcomeMessage()
// user.username="sam"
// user.welcomeMessage()
//console.log(this)

//In this scenerio this returns undefined as this refers to obejct and it doesnt work in function
// function chai(){
//     let username = "hitesh"
//     console.log(this.username)
// }
// chai()

const chai = () =>{
    let username = "hitesh"
    console.log(this.username)
}
//chai()

// Arrow function 
// Explicite Return 
// const addTwo = (num1 , num2) =>{
//     return num1 +num2;
// }

//Inplicite Return
const addTwo = (num1 , num2) => num1+num2

console.log(addTwo(3,4))