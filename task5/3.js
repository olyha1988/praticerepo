const obj1={name:"olivier",role:"Dev"};
const obj2={role:"Admin"};
const result={...obj1,...obj2};
console.log(result);
// finale value of role is:Admin ,it is default parameters