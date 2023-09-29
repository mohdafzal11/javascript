const user={
    first_name:"Mohd",
    last_name:"Afzal",
    roll_no:44,
    greeting:function(){
        console.log("Hello World");
    },
    hello:function(){
        console.log(`Hello ${this.first_name} ${this.last_name}`)
    }
}

console.log(user.first_name);
user.greeting();
user.hello();
