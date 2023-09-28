let memo = (fun) => {
    let re = {};
    return function (...args) {
        let n = args[0];
        if (n in re) {
            console.log("cache");
            console.log(re)
            return re[n];
        }
        else {
            console.log("Calculationg N");
            let result = fun(n);
            re[n] = result;
            return result;
        }
    }
}

function calc(n) {
    let sum = 0;
    for (let index = 0; index < n; index++) {
        sum = sum + index;

    }
    return sum;
}

console.time();
let ans = memo(calc);
console.log(ans(5));
console.timeEnd()

console.time();
 ans = memo(calc);
console.log(ans(5));
console.timeEnd()