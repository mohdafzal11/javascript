
function throt(call,d){
    return function(...args){
        document.getElementById('btn').disabled=true;
        setTimeout(()=>{
            call()
        },d)
    }
}





const betterFunction=throt(()=>{
    document.getElementById('btn').disabled=false;
    console.log("Button Clicked")
},3000);