const users=[
    {name:"oly",age:20},
    {name:"livvy",age:25}
]
const adults=users.filter(user=>user.age>=22);
const names=users.map(user=>user.name);
const totalAge=users.reduce((sum,user)=>sum+user.age,0);
console.log(adults);
console.log(names);
console.log(totalAge);