
export function createUser(userData) {
   return new Promise(async (resolve, reject) => {

      try {
         const response = await fetch('http://localhost:8080/auth/signup', {
            method: "POST",
            credentials: 'include', 
            headers: {
               "Content-Type": "application/json"
            },
            body: JSON.stringify(userData)
         })
         const data = await response.json();

         resolve({ data })
      } catch (err) {
         reject(err);
      }

   })
}


//check user login
export function loginUser(loginInfo) {
   return new Promise(async (resolve, reject) => {

      try {
         const response = await fetch('http://localhost:8080/auth/login', {
            method: "POST",
            credentials: 'include', 
            headers: {
               "Content-Type": "application/json"
            },
            credentials: 'include', 
            body: JSON.stringify(loginInfo)
         });
         if (response.ok) {
            const data = await response.json();
            resolve({ data })
         } else {
            const error = await response.text();
            reject(error)
         }
      }
      catch (err) {
         reject(err);
      }
   })

}
export function checkAuth() {
   return new Promise(async (resolve, reject) => {

      try {
         const response = await fetch('http://localhost:8080/auth/check',{
            credentials: 'include',
            headers: {
               "Content-Type": "application/json"
           }
         });
         console.log("response of checkauth:",response)
         if (response.ok) {
            const data = await response.json();
            resolve({ data })
         } else {
            const error = await response.text();
            reject(error)
         }
      }
      catch (err) {
         reject(err);
      }
   })

}
export function signOut(userId) {
   return new Promise(async (resolve) => {
      // TODO: on server  we will remove user session info
      resolve({ data: "success" })
   })
}