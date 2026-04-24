const users=[
    {name:"Olivier",age:25},
    {name:"Oly",age:30},
    {name:"livvy",age:20},
     
];
const age= users.filter(users=>(users.age>20));
const names=users.map(users=>(users.name));
const apperCase=names.map(name=>name.toUpperCase());
console.log(names);
console.log(age);
console.log(apperCase);

