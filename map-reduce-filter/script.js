const arr=[1,2,3,4,5,6];

// const arr2=arr.map((x)=>x*2);
// console.log(arr2)

// const sum=arr.reduce((acc,s)=>acc=acc>s?acc:acc=s,0)
// console.log(sum)


const users=[
    {firtName:'Mohd' ,lastName:'Afzal' , age:24},
    {firtName:'Mohd' ,lastName:'Rehan' , age:24},
    {firtName:'Sunny' ,lastName:'Khanna' , age:22},
    {firtName:'Adit' ,lastName:'Khanna' , age:55}
]

const fullName=users.map((user)=>user.firtName+ " "+user.lastName);
console.log(fullName)

// const age=users.reduce((acc,curr)=>{
//     if(acc[curr.age]){
//         acc[curr.age]++;
//     }
//     else{
//         acc[curr.age]=1
//     }
//     return acc;

// },{})

// console.log(age)

// const uname=users.filter(user=>{
//     if(user.age<=30){
//         return user.firstName+' '+user.lastName;
//     }
// })
// console.log(uname)


// find method

const user=users.findIndex(user=>user.age==22);
console.log(user)