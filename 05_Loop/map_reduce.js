// const coding=["js","ruby","java","python", "CPP"]
// const values = coding.forEach( (item)=>{
//     console.log(item);
    
// } )

const myNum=[1,2,3,4,5,6,7,8,9,10]


//const newnum = myNum.filter( (num) =>{ return num >4 })
// const newnum =[]

// myNum.forEach( (num)=>{
//     if(num>4){
//         newnum.push(num)
//     }
// })
// console.log(newnum)


// const newnum = myNum.map( (num)=>{return num+10})

// Map
// const newnums = myNum
//                 .map((num)=>{ return num*10})
//                 .map((num)=> num +1 )
//                 .filter((num) => num>=40)
// console.log(newnums)
// reducers
// const newnums = myNum.reduce((acc , currval)=>{
//     console.log(`acc:${acc} and currval: ${currval}`)
//     return acc + currval
// }, 0)
const newnums =myNum.reduce((acc,currval)=>acc+currval,0)
console.log(newnums)