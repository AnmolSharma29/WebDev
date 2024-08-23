function calSum(){
    let a = 0;
    for (let idx = 0; idx < 1000000000; idx++) {
        a = a+idx;
    }
    console.log(a);
}

const beforeDate = new Date();
const beforeTimeInMs = beforeDate.getTime();

calSum();

const afterDate = new Date();
const afterTimeInMs = afterDate.getTime();

console.log(afterTimeInMs - beforeTimeInMs);
