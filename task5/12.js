const orders=[

    {user:"oly",status:"paid",price:100,qty:2},

 {user:"oliva",status:"paiding",price:200,qty:1}
];
const orderPaid =orders.filter(orders=>orders.status==="paid");
const totalPaid=orderPaid.map(orders=>{
    return{
      name:orders.user,
      total:orders.price*orders.qty
    }
});
console.log(orderPaid);
console.log(totalPaid);