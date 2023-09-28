function User(name){
   this.name=name;
}

const emp=new User("Afzal");
const emp1=new User("fzal");
console.log(emp);


User.prototype.print=function(){
    return this.name;
}

console.log(emp.print())
console.log(emp1.print())