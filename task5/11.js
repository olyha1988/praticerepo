const products=[
{ name:"phone",price:1000},
{name:"latop",price:5000},
{name:"Mouse",price:500}
];
const product=products.filter(products=>products.price>500);
console.log(product);