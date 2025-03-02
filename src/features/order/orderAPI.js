export function addOrder(order){
    return new Promise(async(resolve) =>{
    const response = await fetch('http://localhost:8080/orders',{
       method:"POST",
       credentials: 'include',
       headers:{
          "Content-Type":"application/json"
       },
       body:JSON.stringify(order)
    })
    const data  = await response.json()
    console.log("orderSloce add order ",data)
    resolve({data})
    })
 }


 export function updateOrder(order){
  return new Promise(async(resolve) =>{
  const response = await fetch('http://localhost:8080/orders/'+order.id,{
     method:"PATCH",
     credentials: 'include',
     headers:{
        "Content-Type":"application/json"
     },
     body:JSON.stringify(order)
  })
  const data  = await response.json()
  resolve({data})
  })
}

export function fetchAllOrders(sort,pagination) {
   let queryString="";
  
   for(let key in pagination){
     queryString+=`${key}=${pagination[key]}&`;
 
   
 }
 
 for(let key in sort){
  queryString+=`${key}=${sort[key]}&`


}
   // queryString = queryString.slice(0,-1);
   return new Promise(async(resolve) =>{
     const url = "http://localhost:8080/orders?"+queryString;
   const response = await fetch(url,{
      credentials: 'include',
      headers: {
         "Content-Type": "application/json"
     }

   });
   const data  = await response.json()
 const totalOrders  = await response.headers.get('X-Total-Count');
 
   resolve({data:{orders:data,totalOrders:+totalOrders}})
   
 
 });
 }
 