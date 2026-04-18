const isFreeDelivery=(amount)=>amount>500;

//grade Callculation
const getGrade=(marks)=>{if(marks>=90) return "A"
else return "B";}

console.log(isFreeDelivery(300));
console.log(getGrade(50));