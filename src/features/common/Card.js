import { Link } from "react-router-dom";
import { ShareIcon, StarIcon } from '@heroicons/react/20/solid'
import { ShoppingCartIcon } from "@heroicons/react/24/outline";

// import { selectLoggedInUser } from "../../auth/authSlice";
// import { addToCartAsync, selectItems } from "../../cart/cartSlice";
// import { useDispatch, useSelector } from 'react-redux';
import { useAlert } from "react-alert";
import { useEffect, useState } from 'react'
import { RadioGroup } from '@headlessui/react'
import WishlistIconSolid from "../icons/WishlistIconSolid";
import { discountedPrice } from "../../app/constants";

const sizes = [

    { name: 'S', inStock: true },
    { name: 'M', inStock: true },
    { name: 'L', inStock: true },
    { name: 'XL', inStock: true },
    { name: 'XXL', inStock: true },
];

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

const Card = ({ product }) => {
    const [selectedSize, setSelectedSize] = useState(sizes[0]);


    return (
        <>
            {product && (
                    <div className="productsec group relative  border-gray-200 p-1 my-2 md:my-6">
                        <div className=" w-full overflow-hidden  bg-gray-200 lg:aspect-none  lg:h-100 relative " style={{ position: "relative" }}>
                            <img
                                src={product.thumbnail}
                                alt={product.title}
                                className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                            />
                            <div className="flex justify-center align-center productCard ">
                                <div className="flex ">
                                    <Link><ShoppingCartIcon  ></ShoppingCartIcon></Link>
                                    <Link><WishlistIconSolid ></WishlistIconSolid></Link>
                                    <Link><ShareIcon></ShareIcon></Link>
                                </div>

                            </div>
                        </div>
                        <div className="mt-4 ">
                            <div>
                                <h3 className="text-sm text-gray-700 text-center  px-4  md:px-6 lg:px-3 xl:px-12 mx-1 xl:mx-1  trendingtext">
                                   
                                        { product.title}
                                    
                                </h3>

                               
                            </div>
                            <div className="flex justify-center items-center">
                                <p className="text text-lg font-bold text-gray-900 discountprice">₹{product.discountPercent}</p>

                                <p className="ml-2 text-sm line-through font-medium notprice">₹{product.price}</p>


                            </div>
                            <div className="sizes">

                                {/* Sizes */}
                                <div className="mt-1">
                                    <div className="flex items-center justify-between">
                                        {/* <h3 className="text-sm font-medium text-gray-900">Size</h3> */}
                                        {/* <a href="#" className="text-sm font-medium text-indigo-600 hover:text-indigo-500">
                      Size guide
                    </a> */}
                                    </div>

                                    <RadioGroup className="mt-4">
                                        {/* <RadioGroup.Label className="sr-only">Choose a size</RadioGroup.Label> */}
                                        <div className="grid grid-cols-5 md:gap-5">
                                            {sizes.map((size) => (
                                                <RadioGroup.Option
                                                    key={size.name}
                                                    value={size}
                                                    disabled={!size.inStock}
                                                    className={({ active }) =>
                                                        classNames(
                                                            size.inStock
                                                                ? 'cursor-pointer bg-white text-gray-900 shadow-sm prosize'
                                                                : 'cursor-not-allowed bg-gray-50 text-gray-200 prosize',
                                                            active ? 'ring-2  bg-white prosize' : '',
                                                            'group relative flex items-center justify-center  border py-3 px-4 text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none sm:flex-1 sm:py-6 prosize'
                                                        )
                                                    }
                                                >
                                                    {({ active, checked }) => (
                                                        <>
                                                            <RadioGroup.Label as="span">{size.name}</RadioGroup.Label>
                                                            {size.inStock ? (
                                                                <span
                                                                    className={classNames(
                                                                        active ? 'border' : 'border-2',
                                                                        checked ? 'border-indigo-500' : 'border-transparent',
                                                                        'pointer-events-none absolute -inset-px '
                                                                    )}
                                                                    aria-hidden="true"
                                                                />
                                                            ) : (
                                                                <span
                                                                    aria-hidden="true"
                                                                    className="pointer-events-none absolute -inset-px  border-2 border-gray-200"
                                                                >
                                                                    <svg
                                                                        className="absolute inset-0 h-full w-full stroke-2 text-gray-200"
                                                                        viewBox="0 0 100 100"
                                                                        preserveAspectRatio="none"
                                                                        stroke="currentColor"
                                                                    >
                                                                        {/* <line x1={0} y1={100} x2={100} y2={0} vectorEffect="non-scaling-stroke" /> */}
                                                                    </svg>
                                                                </span>
                                                            )}
                                                        </>
                                                    )}
                                                </RadioGroup.Option>
                                            ))}
                                        </div>
                                    </RadioGroup>

                                </div>
                            </div>

                        </div>
                        {product.deleted && (
                            <div>
                                <p className="text-sm text-red-400">Product deleted</p>
                            </div>
                        )}
                        {product.stock <= 0 && (
                            <div>
                                <p className="text-sm text-red-400">Out of Stock</p>
                            </div>
                        )}
                    </div>
              
            )
            }
        </>
    )
}

export default Card