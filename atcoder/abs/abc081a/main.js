function Main(input) {
    input = input.split("\n");
    // 111 などの3桁の数字になるので1文字ずつ分割
    const tmp = input[0].split('');
    // 配列を数値に変更する
    const intInput = tmp.map(str => parseInt(str,10));
    // 配列の値の合計をする
    const sums = intInput.reduce((prevVal, currVal) => prevVal + currVal, 0);
    console.log(sums);
}

Main(require("fs").readFileSync("/dev/stdin","utf8"));
