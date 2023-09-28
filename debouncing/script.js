let counter = 0;
function getData() {
    console.log("fetching data.......", +counter++);
}

function myDebounce(call, d){
    let timer=0;
    return function (...args) {
        if (timer) clearTimeout(timer);
        setTimeout(() => {
            call()
        }, d);
    }
}

let betterFunction=myDebounce(getData,1000);
    
