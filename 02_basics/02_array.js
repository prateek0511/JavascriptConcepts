const marval_heros=["thor","Ironman","Spiderman"];
const dc=["superman","Spiderman","batman"]

// marval_heros.push(dc)

// console.log(marval_heros)

// marval_heros.concat(dc)
// console.log(marval_heros)

const all_heros= [...marval_heros , ...dc] //spreading the values and concatinating it 

console.log(all_heros)

const another_array=[1,2,3,[4,5,6],7,[6,7,[4,5]]]

const usable_another_array=another_array.flat(Infinity) // insertin all values in singe array
console.log(usable_another_array)

console.log(Array.isArray("Hitesh")) //return boolean value
console.log(Array.from("Hitesh")) // convert string to array

const s1=300
const s2=200
const s3=100

console.log(Array.of(s1,s2,s3))