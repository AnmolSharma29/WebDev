const users = '{"name":"Anmol","age":20,"gender":"male"}';

//JSON.parse
//const users = {name:"Anmol",age:20,gender:"male"};

const user = JSON.parse(users);
console.log(user["gender"]);


//JSON.stringify
//const users = '{"name":"Anmol","age":20,"gender":"male"}';

const userStr = {
    name:"Anmol",
    age:20,
    gender:"male"
};
const finalStr = JSON.stringify(userStr);
console.log(finalStr);