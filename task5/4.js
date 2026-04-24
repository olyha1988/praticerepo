 const average=(...nums)=> 

 const total= nums.reduce((acc,n)=>acc +n, 0);
 return total/nums.length;
};
console.log(average(10,20,30));

//