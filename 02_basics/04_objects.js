//Object singleton

const regularUser={
    email:"some@gmail.com",
    fullname:{
        userfullname:{
            firstname:"Prateek",
            lastname:"Malhotra"
        }
    }
}
//console.log(regularUser.fullname.userfullname.firstname)

const obj1={1:"a",2:"b"}
const obj2={3:"c",4:"d"}

// const obj3=Object.assign({},obj1,obj2)
// console.log(obj3)

 const obj3={...obj1 , ...obj2}
// console.log(obj3)


//Object Destructuring
const course={
    coursename:"js in hindi",
    price:"999",
    courseInstructor:"Prateek"
}

// course.courseInstructor
const {courseInstructor : instructor}=course

console.log(instructor)
