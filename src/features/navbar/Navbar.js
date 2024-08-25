import React from 'react';
import { Fragment, useState } from 'react';
import { Disclosure, Menu, Transition } from '@headlessui/react';
import { Bars3Icon, HeartIcon, MagnifyingGlassIcon, MagnifyingGlassPlusIcon, PhoneIcon, PhoneXMarkIcon, XMarkIcon } from '@heroicons/react/24/outline';
import { Link } from 'react-router-dom';
import { useSelector,useDispatch } from 'react-redux';
import { selectItems } from '../cart/cartSlice';
// import { selectLoggedInUser } from '../auth/authSlice';

import WishlistIcon from '../icons/WishlistIcon';
import SearchIcon from '../icons/SearchIcon';
import CartIcon from '../icons/CartIcon';
import UserIcon from '../icons/UserIcon';
import BarIcon from '../icons/BarIcon';
import { fetchLoggedInUserAsync, selectUserInfo } from '../user/userSlice';
import Sidebar from './Sidebar';
import { useEffect } from 'react';
// const user = {
//   name: 'Tom Cook',
//   email: 'tom@example.com',
//   imageUrl:
//     'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
// }
const navigation = [
  { name: 'Products', link: '/our-products', user: true },
  { name: 'Products', link: '/admin', admin: true },
  { name: 'Orders', link: '/admin/orders', admin: true },

];
const userNavigation = [
  { name: 'My Profile', link: '/profile' },
  { name: 'My Orders', link: '/orders' },
  { name: 'Sign out', link: '/logout' },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

//sidebar


const Navbar = ({ children }) => {
  const items = useSelector(selectItems);
  // const user = useSelector(selectLoggedInUser);
  const dispatch = useDispatch();
  const userInfo = useSelector(selectUserInfo);
  const [showSidebar, setShowSidebar] = useState(false);

  useEffect(() => {
    dispatch(fetchLoggedInUserAsync());
  },[dispatch])
  

  return (
    <>
     {<div className=''>
      {/*sidebar starts */}
      <Sidebar navigation={navigation} showSidebar={showSidebar} setShowSidebar={setShowSidebar} userInfo={userInfo} classNames={classNames}></Sidebar>
      {/* sidebar ends */}
      <div className="min-h-full">
        <div className='bg-gray-900 '>
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8  text-white">
            <div className="flex flex-col flex-row md:flex-row lg:flex-row h-16 items-center md:justify-between py-2">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <h6 className="text-white-600">Welcome to Our Store ShopR</h6>
                </div>
              </div>
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <Link to="tel:1234567890" className='flex'>
                    <PhoneIcon className='h-5 w-5 bg-gray-900' ></PhoneIcon>
                    <h6 className="text-white-600 ml-1">

                      Call Us : 9823787367</h6>
                  </Link>

                </div>

              </div>


            </div>
          </div>
        </div>
        {/*balck navbar ends */}
        <Disclosure as="nav" className="bg-white sticky top-0 z-30">
          {({ open }) => (
            <>

              <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex h-16 items-center justify-between">
                  <div className="flex items-center">
                    <div className="flex-shrink-0">
                      <button type="button" onClick={() => setShowSidebar(!showSidebar)}
                      >
                        <BarIcon
                          className="h-6 w-6"></BarIcon>
                      </button>
                    </div>
                  </div>
                  <div className="flex items-center">

                    <div className="flex-shrink-0">

                      <Link to="/">
                       <img className='logo h-8' src="http://localhost:3000/assets/images/logo.png" />
                      </Link>
                    </div>

                  </div>
                  <div className="block">

                    <div className="ml-4 flex items-center md:ml-6">
                      <button
                        type="button"
                        className="ml-auto flex-shrink-0 rounded-full  p-1 pl-2  text-gray-400 hover:text-black"
                      >
                        <SearchIcon className="h-6 w-6" aria-hidden="true" />

                      </button>
                      {/* <button
                        type="button"
                        className="ml-auto flex-shrink-0 rounded-full  p-1 pl-2  text-gray-400 hover:text-black "
                      >
                          <WishlistIcon></WishlistIcon>
                      </button> */}
                      <Link to="/cart" className="p-1 pl-2">
                        <button
                          type="button"
                          className="rounded-full  p-1 pl-2 text-gray-400 hover:text-black "
                        >

                          <CartIcon color="#858585" className="h-6 w-6" aria-hidden="true" />

                        </button>
                      </Link>
                      {/*desktop */}
                      {items.length > 0 && <span className="inline-flex mb-4 -ml-2 items-center rounded-md bg-red-50 px-2 py-1 text-xs font-medium text-red-700 ring-1 ring-inset ring-red-600/10">
                        {items.length}
                      </span>}

                      {/* Profile dropdown */}
                      <Menu as="div" className="relative ml p-1 pl-2">
                        <div>
                          <Menu.Button className="flex max-w-xs items-center rounded-full  text-sm ">
                            <span className="sr-only">Open user menu</span>
                            <UserIcon className="h-6 w-6  text-gray-400 hover:text-black" aria-hidden="true" />

                          </Menu.Button>
                        </div>
                        <Transition
                          as={Fragment}
                          enter="transition ease-out duration-100"
                          enterFrom="transform opacity-0 scale-95"
                          enterTo="transform opacity-100 scale-100"
                          leave="transition ease-in duration-75"
                          leaveFrom="transform opacity-100 scale-100"
                          leaveTo="transform opacity-0 scale-95"
                        >
                          <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                            {userNavigation.map((item) => (
                              <Menu.Item key={item.name}>
                                {({ active }) => (
                                  <Link
                                    to={item.link}
                                    className={classNames(
                                      active ? 'bg-gray-100' : '',
                                      'block px-4 py-2 text-sm text-gray-700'
                                    )}
                                  >
                                    {item.name}
                                  </Link>
                                )}
                              </Menu.Item>
                            ))}
                          </Menu.Items>
                        </Transition>
                      </Menu>
                    </div>
                  </div>
                  <div className="-mr-2 flex hidden">
                    {/* Mobile menu button */}
                    <Disclosure.Button className="inline-flex items-center justify-center rounded-md bg-gray-800 p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                      <span className="sr-only">Open main menu</span>
                      {open ? (
                        <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                      ) : (
                        <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                      )}
                    </Disclosure.Button>
                  </div>
                </div>
              </div>

              <Disclosure.Panel className="md:hidden">
                <div className="space-y-1 px-2 pb-3 pt-2 sm:px-3">
                  {navigation.map((item) => (
                    <Disclosure.Button
                      key={item.name}
                      as="a"
                      href={item.link}
                      className={classNames(
                        item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                        'block rounded-md px-3 py-2 text-base font-medium'
                      )}
                      aria-current={item.current ? 'page' : undefined}
                    >
                      {item.name}
                    </Disclosure.Button>
                  ))}
                </div>
                <div className="border-t border-gray-700 pb-3 pt-4">
                  <div className="flex items-center px-5">
                    {/* data will come from userInfo */}
                    {/* <div className="flex-shrink-0">
                      <img className="h-10 w-10 rounded-full" src={user.imageUrl} alt="" />
                    </div>
                    <div className="ml-3">
                      <div className="text-base font-medium leading-none text-white">{user.name}</div>
                      <div className="text-sm font-medium leading-none text-gray-400">{user.email}</div>
                    </div> */}
                    <button
                      type="button"
                      className="ml-auto flex-shrink-0 rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                    >
                      <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                    </button>
                    <button
                      type="button"
                      className="ml-auto flex-shrink-0 rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                    >
                      <HeartIcon className="h-6 w-6" aria-hidden="true" />
                    </button>
                    <Link to="/cart">
                      <button
                        type="button"
                        className="ml-auto flex-shrink-0 rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                      >
                        <CartIcon className="h-6 w-6" aria-hidden="true" />

                      </button>
                    </Link>
                    <span className="inline-flex mb-4 -ml-2 items-center rounded-md bg-red-50 px-2 py-1 text-xs font-medium text-red-700 ring-1 ring-inset ring-red-600/10">
                      3
                    </span>
                  </div>
                  <div className="mt-3 space-y-1 px-2">
                    {userNavigation.map((item) => (
                      <Disclosure.Button
                        key={item.name}
                        as="a"
                        href={item.href}
                        className="block rounded-md px-3 py-2 text-base font-medium text-gray-400 hover:bg-gray-700 hover:text-white"
                      >
                        {item.name}
                      </Disclosure.Button>
                    ))}
                  </div>
                </div>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>


        <main className="bg-white">
          {/* <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">{children}</div> */}
          <div className="mx-auto">{children}</div>

        </main>
      </div>
    </div>}
   </> 
  )
}

export default Navbar;