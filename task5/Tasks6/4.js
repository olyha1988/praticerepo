const students=[
    {name:"A",marks:80},
    {name:"B",marks:40},
    {name:"c",marks:90},
];
const mark=students.filter(students=>students.marks>50);
const names=mark.map(mark=>mark.name);

console.log(names);
