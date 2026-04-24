//Default parameters

const fetchProduct=(page=10,limit=5){

console.log("Page:",page,"Limit",limit);
}
fetchProduct()
fetchProducts(50,45);

//Object Destructuring

const user={
id:101,
name:"Olivier",
email:"olyhavy@gmail.com",
};
function printUser( { name,email}){

console.log(name,email);

}
printUser(user);

//Update Nested Object
const use={
name:"Gaella",
address:
{

city:"Montreal",
pincode:250
}
};
const UpdateUse={

...use,
address:
{
...use.address,
city:"laval"
}
};
console.log(use);
console.log(UpdateUse);

//Updatename
const us={
name:"Gaella",
address:
{

city:"Montreal",
pincode:250
}
};
const Updatename={

...us,

name:"Havyarimana"

};
console.log(us);
console.log(Updatename);
//Toggle darkMode using spread(darkMode)

const settings={darkMode:false,notifitions:true};
const updatedSettings={...settings,
darkMode: !settings.darkMode
};
console.log(settings);
console.log(updatedSettings);

//T5.oggle darkMode using spread(notifitions)

const setting={darkMode:false,notifition:true};
const updatedNotifitoins={...setting,
notifition: !setting.notifition
};
console.log(setting);
console.log(updatedNotifitoins);

//6.Add Multiple Items to Array

const tasks=["Task 1"];
const updedTasks=[
    ...tasks,
"Task 2",
"Task 3"
];
console.log(tasks);
console.log(updedTasks);

//Update Item in Array

const usr=[
    {id:1,name:"A"},
   {id:2,name:"B"} 
];
const UpdatedUsrs= usr.map(sr=>sr.id===2
   ?{...sr,name:"oliver"}:sr);
console.log(UpdatedUsrs);