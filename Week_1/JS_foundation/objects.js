const personArray = ["Anmol", "Harkirat", "Priya"];
const genderArray = ["male", "male", "female"];

for(let i=0; i<personArray.length; i++){
    if(genderArray[i]== "male"){
        console.log(personArray[i]);
    }
}

const user1 = {
    firstName: "Anmol",
    gender: "Male",
}
console.log(user1["firstName"]);
