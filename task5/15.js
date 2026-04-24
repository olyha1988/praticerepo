const cart=[
{price:100,qty:2},
{price:50,qty:3}
];
const carte=cart.map(cart=>(cart.price*cart.qty));
const total=carte.reduce((acc,n)=>{
    return acc+n
},0);
console.log(total);

