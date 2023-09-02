
export function addToCart(item){
   console.log(item)
    return new Promise(async(resolve) =>{
    const response = await fetch('http://localhost:8080/cart',{
       method:"POST",
       headers:{
          "Content-Type":"application/json"
       },
       body:JSON.stringify(item)
    })
    const data  = await response.json()
    resolve({data})
    })
 }
 

 
export function fetchItemsByUserId(){
   // console.log("userId:", userId)
    return new Promise(async(resolve) =>{
    const response = await fetch('http://localhost:8080/cart');
    const data  = await response.json()
    resolve({data})
    })
 }


 export function updateCart(update){
    return new Promise(async(resolve) =>{

    try{
      const response = await fetch('http://localhost:8080/cart/'+update.id,{
         method:"PATCH",
         headers:{
            "Content-Type":"application/json"
         },
         body:JSON.stringify(update)
      })
      const data  = await response.json();
      // console.log("update cart data",data)
      resolve({data})
    } catch(err){
      console.log(err)
    }
    })
 }
 
 export function deleteItemFromCart(itemId){
    return new Promise(async(resolve) =>{
    const response = await fetch('http://localhost:8080/cart/'+itemId,{
       method:"DELETE",
       headers:{
          "Content-Type":"application/json"
       },
    })
    const data  = await response.json()
    resolve({data:{id:itemId}})
    })
 }
 
 export function resetCart(){
      return new Promise(async(resolve) =>{
      const response = await fetchItemsByUserId();
      const items  = await response.data;

         for(let item of items){
            await deleteItemFromCart(item.id)
         }

      resolve({status:"success"})
   })
 }