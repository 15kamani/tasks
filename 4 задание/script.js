let arr = [];
let woriedCount = 0;
let people = [0, 1, 2]

function WORRY(index){;
    arr[index] = "беспокоящийся";
    woriedCount++;    
}
function QUIET(){
    arr[index] = "не беспокоятся";
    count--;    
}
function COME(count){
    if (count > 0){
        for (let a = 0; a<count; a++)
        arr.push(count)
    }  else {
         delete arr[count];
        count -= delete arr[count].filter((element) => element === "беспокоящийся").lenght;
    }
}
function WORRY_COUNT(){
    console.log(woriedCount);   
}

console.log((COME(5)),
(WORRY(1)),
(WORRY(4)),
(COME(-2)),
(WORRY_COUNT()),
(COME(3)),
(WORRY(3)),
(WORRY_COUNT()))
