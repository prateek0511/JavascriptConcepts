//Singleton

//object literals
const mysymbol=Symbol("key1")
const JsUser={
    name:"Prateek",
    "mySym":mysymbol,
    age:25,
    Location:"Jaipur",
    email:"malhotraanuj.729@gmail.com",
    isLoggedIn:false,
    lastLoginDays:["Monday","Saturday"]
}

console.log(JsUser.email)
console.log(JsUser["email"])
console.log(typeof(JsUser["mySym"]))

JsUser.greetings=function(){
    console.log("Hello Js User");
}
JsUser.greetingsTwo=function(){
    console.log(`Hello ${this.email} User`);
}
console.log(JsUser.greetingsTwo())
