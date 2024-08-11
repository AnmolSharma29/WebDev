const allUsers =[{
    firstName: "Anmol",
    gender: "Male",
},{
    firstName: "Harkirat",
    gender: "Male",
    metaData: {
        age: 21,
        address: "gurugram",
    }
},{
    firstName: "Shabnam",
    gender: "Female",
}];

console.log(allUsers[2]["gender"]);
console.log(allUsers[1]["metaData"]["age"]);
console.log(allUsers[1].metaData.age); //same as above