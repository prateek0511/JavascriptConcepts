//arrays

const myarr=[0,1,2,3,4]
const myheros=["shaktiman" ,"spiderman"]
const myarr2=new Array(1,2,3,4,5,6)
// console.log(myarr[0])
// console.log(myheros[0])
// console.log(myarr2[0])

//push
// myarr.push(6) // add the element
// console.log(myarr)
// myarr.push(7)
// console.log(myarr)

// console.log(myarr.pop())

// console.log(myarr.pop())// remove the element

myarr.unshift(9) // add element at 0th position
// console.log(myarr)

myarr.shift(); //delete element from 0th position
// console.log(myarr);

const newArr=myarr.join(); //convert array to string

// console.log(myarr);
// console.log(newArr);

//slice
console.log("A" , myarr);

const mynewarr=myarr.slice(0,3)
console.log(mynewarr);

console.log("B",myarr);

//Splice
const mynewarr2=myarr.splice(0,2)
console.log("C",myarr);
console.log(mynewarr2)


