//full name

const firstName="Olivier";
const  lastName ="HAVYARIMANA";
console.log(`${firstName},${lastName}`);

//4.Dynamic Email Message
const name="Livvy";
const product="Laptop";
console.log(`Hello ${name},you ${product} is shipped`);

//5.Implement Multiline string using template literals
const card =`
<div>
<h1>User Profile</h1>
<p>Name:Olivier</p>
</div>`
console.log(card);

//7.obejct destructuring
const response = {
    data:{
        User:{

            id:1,
            Nationality:"Canadian"
        }
    }
}
let {id,Nationality}=response.data.User;
console.log(id,Nationality);

//Is this Allowed ? Mutation

const user = {
name: "Harish"
};
user.name = "Ravi";
console.log(user.name);

// default parameters(back up parametrs)
const fetchData=(token='eyJzdWIiOiIxMj')=>
{
 console.log("token:",token )   
}
fetchData("oly123");
fetchData();

