
export function fetchLoggedInUserOrders() {
   return new Promise(async (resolve) => {
      const response = await fetch('http://localhost:8080/orders/own');
      const data = await response.json();
      console.log("data  userAPI userOrder ",data)
      resolve({ data });
   })
}

export function fetchLoggedInUser() {
   return new Promise(async (resolve) => {
      const response = await fetch('http://localhost:8080/users/own');
      const data = await response.json();
      console.log("data",data)
      resolve({ data })
   })
}


//update user
export function updateUser(update) {
   return new Promise(async (resolve,reject) => {
      try{
         console.log("updateUser in userApi value ", update)
         const response = await fetch('http://localhost:8080/users/' + update.id, {
            method: "PATCH",
            headers: {
               "Content-Type": "application/json"
            },
            body: JSON.stringify(update)
         })
         const data = await response.json()
         resolve({ data })
      } catch(err){
         reject(err);
         console.log("updateUser in userApi reject ", err)

      }
    
   })
}
