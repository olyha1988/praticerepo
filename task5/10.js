const users=[
    {
        name:"Harish",active:true
    },
    {name:"Ravi",active:false}
];
const activeusers=users.filter(users=>users.active);
console.log(activeusers);