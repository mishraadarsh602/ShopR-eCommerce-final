import { MapPinIcon } from "@heroicons/react/20/solid"
import { EnvelopeIcon,PhoneIcon } from "@heroicons/react/24/outline"
import { Link } from "react-router-dom"
import Socials from "./Socials"

function Footer() {
    return (

        <>
            {/* This is an example component */}
            <footer className="footer bg-white dark:bg-gray-900 pt-6">
                <div className="mx-auto w-full pt-6">
                    <div className="grid grid-cols-1 gap-1 md:grid-cols-1 lg:grid-cols-3 md:gap-3 px-8 pb-4">
                        <div className="grid grid-cols-1 lg:px-2 gap-1 lg:pl-4 ">
                            <div className="md:pl-4">
                                <p className=" text-gray-500 mb-5">      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries....
                                </p>
                               <Socials/>                                
                            </div>

                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 p-2 mt-6 lg:mt-0">

                            <div>
                                <h2 className="mb-3  md:mb-6  font-semibold text-red-900 uppercase dark:text-white footerHead">
                                    ONLINE SHOPPING
                                </h2>
                                <ul className="text-gray-500 dark:text-gray-400 font-medium">
                                    <li className="mb-3">
                                        <Link to="" className="hover:underline">
                                            Men’s T-Shirts

                                        </Link>
                                    </li>
                                    <li className="mb-3">
                                        <Link to="" className="hover:underline">
                                            Women’s Wear

                                        </Link>
                                    </li>
                                    <li className="mb-3">
                                        <Link to="" className="hover:underline">
                                            Winter Collections

                                        </Link>
                                    </li>
                                    <li className="mb-3">
                                        <Link to="" className="hover:underline">
                                            Hooded T-Shirts
                                        </Link>
                                    </li>
                                    <li className="mb-3">
                                        <Link to="" className="hover:underline">
                                            Streetwear Collections
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                            <div className="">
                                <h2 className="mb-3  md:mb-6   font-semibold text-red-900 uppercase dark:text-white footerHead">
                                    CUSTOMER POLICIES
                                </h2>
                                <ul className="text-gray-500 dark:text-gray-400 font-medium">
                                    <li className="mb-3">
                                        <Link to="" className="hover:underline">
                                            About Us

                                        </Link>
                                    </li>
                                    <li className="mb-3">
                                        <Link to="" className="hover:underline">
                                            Terms & Conditions

                                        </Link>
                                    </li>
                                    <li className="mb-3">
                                        <Link to="" className="hover:underline">
                                            Shipping & Returns Policy

                                        </Link>
                                    </li>
                                    <li className="mb-3">
                                        <Link to="" className="hover:underline">

                                            Cancellation & Refund Policy
                                        </Link>
                                    </li>
                                    <li className="mb-3">
                                        <Link to="" className="hover:underline">

                                            Contact Us
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="grid grid-cols-1  p-2  lg:mt-0">

                            <div>
                                <h2 className="mb-3  md:mb-6   font-semibold text-red-900 uppercase dark:text-white footerHead">
                                    STORE INFORMATION        </h2>
                                <ul className="text-gray-500 dark:text-gray-400 font-medium">
                                    <li className="mb-3">
                                        <Link to="#" className='flex'>
                                            <MapPinIcon className=" h-6 w-7" aria-hidden="true" />
                                            <h6 className="text-white-600 ml-1">
                                                Lorem Ipsum is simply dummy text of the
                                                printing and typesetting industry.</h6>
                                        </Link>
                                    </li>
                                    <li className="mb-3">
                                        <Link to="tel:1234567890" className='flex'>
                                            <PhoneIcon className='h-5 w-5 ' ></PhoneIcon>
                                            <h6 className="text-white-600 ml-1">

                                                Call Us: 1234567890</h6>
                                        </Link>
                                    </li>
                                    <li className="mb-3">
                                        <Link to="tel:1234567890" className='flex'>
                                            <EnvelopeIcon className='h-5 w-5' />
                                            <h6 className="text-white-600 ml-1">

                                                Email Us: info@yourmail.com</h6>
                                        </Link>
                                    </li>
                                   
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div style={{ backgroundColor: "#20050A" }} className="px-4 py-6 flex items-center  justify-center">
                        <span className="text-sm text-white text-center">
                            ©2022-23 Powered By dummy team
                        </span>

                    </div>
                </div>
            </footer>

        </>


    )
}

export default Footer