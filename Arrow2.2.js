//convert MunitestoSecond
const convertToSeconds=minutes=>minutes*60;
//GST calcution
const addGST=price=>price+price*0.18;
//Login Validation
const validationLogin=(username,password)=>username==="admin" && password==="1234";
//Cart Item Court
const getcartCount=Items=>Items.length;
console.log(convertToSeconds(30));
console.log(addGST(50));
console.log(validationLogin("admin","1234"));