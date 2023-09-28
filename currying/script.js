const user={
    name:"Afzal",
    age:22
}

function printInfo(user){
    return function(arg){
        return user[arg];
    }
}

let res=printInfo(user)("name");
console.log(res);