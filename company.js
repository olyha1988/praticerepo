const company={
name:"Ova",
address:{
    city:"lassale",
    pincode:"H8R2A7",
}

}
let {name}=company;
let {city}=company.address;
console.log(`my name is ${name}, from ${city}`);

// Array destructuring
const scores = [85, 90, 78, 92];

let[val0,,,val4]=scores
console.log(val0,val4);
//Mixed (Array inside Object)

const student = {
 nam: "Rahul",
 marks: [70, 80, 90]
};

let{nam}=student
let[,,value]=student.marks
console.log(nam,value);
