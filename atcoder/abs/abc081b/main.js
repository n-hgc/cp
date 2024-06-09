function hasOdd(arr, len) {
        for (let i = 0; i < len; i++){
            if (arr[i]%2 !== 0){
                return true;
            }
        }
        return false;
}

function Main(input) {
    input = input.split("\n");
    const intNum = parseInt(input[0],10);
    let intArr= input[1].split(" ").map(str => parseInt(str, 10));
    let divCount = 0;
    let result = hasOdd(intArr, intNum);
    while(!result){
       intArr  = intArr.map(num => num / 2);
       divCount++;
       result = hasOdd(intArr, intNum);
    }
    console.log("%d",divCount);
}

Main(require("fs").readFileSync("/dev/stdin","utf8"));
