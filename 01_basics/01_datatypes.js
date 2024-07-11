"use strict"; //treat all JS code as newer or latest version

// alert("Hello") // we are using node js not browser

console.log(3+3)  //code readability should be high

let name="Prateek"
let age=24
let isLoggedIn=false
//Primitive datatypes
//1. number => 2 to power of 53
//2. bigint
//3. string=> ""
//4. boolean => true/false
//5. null => standalone value  (it is a representation of empty value)
//6. undefined => when value is not defined
//7.  symbol => unique 

// Non Primitive Datatype or Reference Type
//object
console.log(typeof "Prateek")
console.log(typeof age)
console.log(typeof null) //object
console.log(typeof undefined) //undefined

//Arrays
const arr=["value1", "value2"]
//Object
let myObj={
    name:"Prateek",
    age:24
}
//Functions

const myfunch=function(){
    console.log("Hello world")
}

