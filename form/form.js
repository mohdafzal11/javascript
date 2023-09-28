let form=document.querySelector("#form")
// consolelog(form)

// let submit=document.querySelector('#submit');

form.addEventListener('submit' , (e)=>{
e.preventDefault();
   console.log(e)
   console.log("Form Submit Succexsfully")
   console.log(form.password.value)
})