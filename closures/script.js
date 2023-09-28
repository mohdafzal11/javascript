function inc(id){
    let count=0;
    return function (){
         count++;
         document.getElementById(id).innerText=count;
         
    }
}

let h1=inc("h1");
let h2=inc("h2");