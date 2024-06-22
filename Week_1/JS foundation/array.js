const personArray = ["Anmol", "Person1", "Person2", "Person3"];

console.log(personArray[0]);
console.log(personArray[1]);
console.log(personArray[2]);
console.log(personArray[3]);

const nums = [24,43,46,23,76,23,100,84]; //array

for(let i = 0; i<nums.length; i++){ 
    if(nums[i]%2 == 0){
        console.log(nums[i]); //print all the even numbers
    }
}

let biggestNum = 0;
for(let i = 0; i<nums.length; i++){
    if(biggestNum < nums[i]){
        biggestNum = nums[i];
    }
}
console.log(biggestNum);