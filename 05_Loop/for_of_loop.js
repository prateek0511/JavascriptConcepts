//for of

//["" , "" , ""]
//[{} ,{} ,{}]

const arr =[1,2,3,4,5]

// for (const val of arr) {
//     console.log(val)
    
// }

// arr.forEach(element => {
//     console.log(element)
// });

// for (const key in arr) {
//     if (Object.hasOwnProperty.call(arr, key)) {
//         const element = arr[key];
//         console.log(element)
//     }
// }

//Maps

const map=new Map()

map.set('IN' , "India")
map.set('USA' , "United States Of America")
map.set('Fr' , "France")

// for(const [key , value] of map){
//     console.log(key , ':-' , value)
// }


const myObject={
    js :'javascript',
    cpp:'C++',
    rb:"ruby",
    swift:"swift by apple"
}

for (const key in myObject) {
    console.log(myObject[key])
}
