//Get Request to fetch the todo data

fetch(`https://jsonplaceholder.typicode.com/users`)
.then((Response)=>Response.json())
.then((data)=>console.log(data))
.catch((error)=>console.log(error))

//Async/await

const fetchTodoData=async()=>{

 try{

  const Response= await(`https://jsonplaceholder.typicode.com/users`);
  const data=await Response.json();
  console.log(data) 
 }
 
  catch(error)
  {

    console.log(error)
  }  
 }
 fetchTodoData();
    
