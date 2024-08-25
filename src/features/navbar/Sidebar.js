import { XMarkIcon } from "@heroicons/react/24/outline";
import { Link } from 'react-router-dom'

export default function Sidebar({ showSidebar, setShowSidebar, navigation, userInfo, classNames }) {
    return (
        <div className="">
            <>

                <div className={`top-0 right-0 w-[25vw] bg-gray-100 px-8 pt-10 text-black fixed h-full z-40  ease-in-out duration-300 sidebarmenu ${showSidebar ? "translate-x-0 " : "translate-x-full"
                    }`}
                >

                    <button
                        className="flex text-4xl  items-center cursor-pointer fixed right-10 top-6 z-50"
                        onClick={() => setShowSidebar(!showSidebar)}
                    >
                        <XMarkIcon className="h-6 w-6"></XMarkIcon>
                    </button>
                    <div className="sidebar">


                        <div className="">
                            <ul className="space-y-2 font-medium">
                                <li>
                                    <Link
                                        to="/"
                                        className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:text-red-700 dark:hover:bg-gray-700 group"
                                    >

                                        <span className="ml-3">Home</span>
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        to="/"
                                        className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white  hover:text-red-700 dark:hover:bg-gray-700 group"
                                    >

                                        <span className="ml-3">About</span>
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        to="/"
                                        className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white  hover:text-red-700 dark:hover:bg-gray-700 group"
                                    >

                                        <span className="ml-3">Contact</span>
                                    </Link>
                                </li>
                                {navigation.map((item) => (
                                    item[userInfo.role] ? (<li key={item.name} >
                                        <Link
                                            key={item.name}
                                            to={item.link}
                                            className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white  hover:text-red-700 dark:hover:bg-gray-700 group"

                                        >
                                           <span className="ml-3">{item.name}</span> 
                                        </Link></li>

                                    ) : null
                                ))}

                            </ul>
                        </div>


                    </div>
                </div>
            </>


        </div>
    )
}