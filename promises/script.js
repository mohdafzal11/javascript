const cart=['pants','shirt','jeans'];

const pr=addToCart(cart);

pr.then((orderId)=>{
    console.log(orderId)
}).catch((err)=>{
    console.log(err.message)
})




function addToCart(cart){
      const pr=new Promise((resolve,reject)=>{
             if(!validate(cart)){
                const err=new Error("Cart is not Valid");
                reject(err);
             }
             const orderId=12345;
             if(orderId){
                setTimeout(()=>{
                resolve(orderId);
                },5000)
             }
      })
      return pr;
}

function validate(cart){
    return true;
}