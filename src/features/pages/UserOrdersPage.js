import Footer from "../common/Footer";
import Navbar from "../navbar/Navbar"
import UserOrders from "../user/components/UserOrders";

const UserOrdersPage = () => {
  return (
    <div>
         <Navbar>
           <div className="mx-auto p-3 bg-white max-w-7xl px-4 sm:px-6 lg:px-8">
                        <div className='bg-gray-200 mb-8 inline-block ps-2 pe-10 py-1'><h6>User / My Orders</h6></div>

          
            <UserOrders/>
            </div>
         </Navbar>
         <Footer/>

    </div>
  )
}

export default UserOrdersPage