
import './App.css';
import Home from './features/pages/Home';
import LoginPage from "./features/pages/LoginPage";
import SignupPage from "./features/pages/SignupPage"
import CartPage from "./features/pages/CartPage";
import Checkout from "./features/pages/Checkout";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { useEffect } from 'react'
import Protected from './features/auth/components/Protected';
import ProtectedAdmin from './features/auth/components/ProtectedAdmin';
import ProductDetailPage from './features/pages/ProductDetailPage';
import { useDispatch, useSelector } from 'react-redux';
import { fetchItemsByUserIdAsync } from './features/cart/cartSlice';
import {checkAuthAsync, selectLoggedInUser, selectUserChecked } from './features/auth/authSlice';
import PageNotFound from './features/pages/404';
import OrderSuccessPage from './features/pages/OrderSuccessPage';
import UserOrdersPage from './features/pages/UserOrdersPage';
import UserProfilePage from './features/pages/UserProfilePage';
import { fetchLoggedInUserAsync } from './features/user/userSlice';
import Logout from './features/auth/components/Logout';
import ForgotPasswordPage from './features/pages/ForgotPasswordPage';
import AdminHome from './features/pages/AdminHome';
import AdminProductDetailPage from './features/pages/AdminProductDetailPage';
import AdminProductFormPage from './features/pages/AdminProductFormPage';
import AdminOrdersPage from './features/pages/AdminOrdersPage';
import ProductListPage from './features/pages/ProductListPage';
//react alert
import { positions, Provider } from "react-alert";
import AlertTemplate from "react-alert-template-basic";
import StripeCheckout from './features/pages/StripeCheckout';

const options = {
  timeout: 5000,
  position: positions.BOTTOM_LEFT
};
const router = createBrowserRouter([
  {
    path: "/",
    element: <Protected><Home /></Protected>,
  },
  {
    path: "/our-products",
    element: <Protected><ProductListPage /></Protected>,
  },
  {
    path: "/admin",
    element: <ProtectedAdmin><AdminHome /></ProtectedAdmin>,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/signup",
    element: <SignupPage />,
  },
  {
    path: "/cart",
    element: <Protected><CartPage /></Protected>,
  },
  {
    path: "/checkout",
    element: <Protected><Checkout /></Protected>,
  },
  {
    path: "/product-detail/:id",
    element: <Protected><ProductDetailPage /></Protected>,
  },
  {
    path: "/admin/product-detail/:id",
    element: <ProtectedAdmin><AdminProductDetailPage /></ProtectedAdmin>,
  },
  {
    path: "/admin/product-form",
    element: <ProtectedAdmin><AdminProductFormPage /></ProtectedAdmin>,
  },
  {
    path: "/admin/product-form/edit/:id",
    element: <ProtectedAdmin><AdminProductFormPage /></ProtectedAdmin>,
  },
  {
    path: "/admin/orders",
    element: <ProtectedAdmin><AdminOrdersPage /></ProtectedAdmin>,
  },
  {
    path: "/order-success/:id",
    element: <OrderSuccessPage />,
  },
  {
    path: "/orders",
    element: <UserOrdersPage />,
  },
  {
    path: "/profile",
    element: <UserProfilePage />,
  },
  {
    path: "/logout",
    element: <Logout />,
  },
  {
    path: "/forgot-password",
    element: <ForgotPasswordPage />,
  },
  {
    path: "/stripe-checkout",
    element: <Protected><StripeCheckout /></Protected>,
  },
  {
    path: "*",
    element: <PageNotFound />,
  },
]);
function App() {
  const dispatch = useDispatch();
  const user = useSelector(selectLoggedInUser);
  const userChecked = useSelector(selectUserChecked);

// useEffect(() => {
//     dispatch(checkAuthAsync())
//   },[dispatch]);

  useEffect(() => {
    if(user){
      dispatch(fetchItemsByUserIdAsync())
      dispatch(fetchLoggedInUserAsync());
    }
  }, [dispatch,user]);

  return (
    <div className="App">

     {  <Provider template={AlertTemplate} {...options}>
        <RouterProvider router={router} />
      </Provider>}

    </div>
  );
}

export default App;
