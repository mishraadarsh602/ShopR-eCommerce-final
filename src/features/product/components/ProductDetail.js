
import { useEffect, useState } from 'react'
import { ShoppingCartIcon, StarIcon } from '@heroicons/react/20/solid'
import { RadioGroup } from '@headlessui/react'
import { useDispatch, useSelector } from 'react-redux';
import { selectProductById, selectProductListStatus } from '../productSlice';
import { useParams } from 'react-router-dom';
import { fetchProductByIdAsync } from '../productSlice';
import { addToCartAsync, selectItems } from '../../cart/cartSlice';
import { discountedPrice } from '../../../app/constants';
import { useAlert } from "react-alert";
import { ShoppingBagIcon } from '@heroicons/react/24/outline';
import CartIcon from '../../icons/CartIcon';
import WishlistIcon from '../../icons/WishlistIcon';
import LatestProducts from './LatestProducts';
import SimilarCategories from './SimilarProductCategories';
import SimilarProductCategories from './SimilarProductCategories';
import ReactImageMagnify from 'react-image-magnify';
import {Grid} from  'react-loader-spinner'

const colors = [
  { name: 'White', class: 'bg-white', selectedClass: 'ring-gray-400' },
  { name: 'Gray', class: 'bg-gray-200', selectedClass: 'ring-gray-400' },
  { name: 'Black', class: 'bg-gray-900', selectedClass: 'ring-gray-900' },
];
const sizes = [
  { name: 'XXS', inStock: false },
  { name: 'XS', inStock: true },
  { name: 'S', inStock: true },
  { name: 'M', inStock: true },
  { name: 'L', inStock: true },
  { name: 'XL', inStock: true },
  { name: '2XL', inStock: true },
  { name: '3XL', inStock: true },
];

const highlights = [
  'Hand cut and sewn locally',
  'Dyed with our proprietary colors',
  'Pre-washed & pre-shrunk',
  'Ultra-soft 100% cotton',
];
// const reviews = { href: '#', average: 4, totalCount: 117 }

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function ProductDetail() {
  const [selectedColor, setSelectedColor] = useState(colors[0]);
  const [selectedSize, setSelectedSize] = useState(sizes[2]);
  const items = useSelector(selectItems);
  const product = useSelector(selectProductById);
  const cart = useSelector((state) => state.items)
  const status = selectProductListStatus();
  const dispatch = useDispatch();
  const params = useParams();
  const alert = useAlert();
  const [mainImg, setMainImg] = useState(0);
  useEffect(() => {
    // console.log("id : ",params.id)
    dispatch(fetchProductByIdAsync(params.id))
  }, [dispatch, params.id])

  //add to cart
  const handleCart = (e) => {
    e.preventDefault();

    if (items.findIndex(item => item.product.id === product.id) < 0) {
      const newItem = { product: product.id,quantity: 1 }
      // delete newItem["id"];
      dispatch(addToCartAsync(newItem))
      //TODO : It will be based on server response of backend
      alert.success("Item added to Cart");

    } else {
      alert.info("Item Already added to Cart");

    }
  }


  const handleMainImg = (e, index) => {
    setMainImg(index);
    console.log("index", index);
    console.log("mainimg", mainImg);

  }
  const handleWishlist = (e) => {
    e.preventDefault();
  }

  return (
    <>
      <div className="bg-white">
        {
          status==='loading' ? (
            <Grid
            height="80"
            width="80"
            color="rgb(79, 70, 229)"
            ariaLabel="grid-loading"
            radius="12.5"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}

            />
          ):null
        }
        <div className='productSection mb-10'>
          {product && (

            <div className="pt-6">

              <nav aria-label="Breadcrumb">
                <ol role="list" className="mx-auto flex max-w-2xl items-center space-x-2 px-4 sm:px-6 lg:max-w-7xl lg:px-8">
                  {/* {product.breadcrumbs && product.breadcrumbs.map((breadcrumb) => (
                <li key={breadcrumb.id}>
                  <div className="flex items-center">
                    <a href={breadcrumb.href} className="mr-2 text-sm font-medium text-gray-900">
                      {breadcrumb.name}
                    </a>
                    <svg
                      width={16}
                      height={20}
                      viewBox="0 0 16 20"
                      fill="currentColor"
                      aria-hidden="true"
                      className="h-5 w-4 text-gray-300"
                    >
                      <path d="M5.697 4.34L8.98 16.532h1.327L7.025 4.341H5.697z" />
                    </svg>
                  </div>
                </li>
              ))} */}

                </ol>
              </nav>
              <div className='grid grid:cols-1 lg:grid-cols-2'>
                <div className="mx-auto productdetails px-8  py-8 lg:pt-1 relative">

                  <div className="sticky top-8 pb-8">

                    <div className="mainimg">
                      <div className="rounded-lg lg:block">
                        {/* <img
                          src={product.images[mainImg]}
                          alt={product.title}
                          className=" object-cover object-center w-full"
                        /> */}
                        <div id="imageMagnifyer" >
                            <ReactImageMagnify {...{
                              smallImage: {
                                alt: product.title,
                                isFluidWidth: true,
                                src: product.images[mainImg],
                              },
                              largeImage: {
                                src: product.images[mainImg],
                                width:1000,
                                height:800,
                                zIndex:100000,
                                position:"fixed",
                               

                                
                              },
                              enlargedImageContainerStyle	:{
                               
                                // overflow:"hidden",
                                // zIndex:100000,


                              },
                              enlargedImageStyle	:{
                              
                                position:"fixed",
                              },
                              // enlargedImageContainerClassName	: "magnifyercontainerclass",
                              // enlargedImageClassName	:"magnifyerimgclass",
                              // enlargedImagePosition	: "over",



                            }} />
                       
                        </div>
                      </div>
                    </div>
                    <div className="mt-4 grid grid-cols-4 gap-4">
                      <div className="rounded-lg lg:block border border-2">
                        <img
                          onClick={(e) => handleMainImg(e, 0)}
                          src={product.images[0]}
                          alt={product.title}
                          className=" object-cover object-center h-full"
                        />
                      </div>
                      <div className="rounded-lg lg:block border border-2">
                        <img
                          onClick={(e) => handleMainImg(e, 1)}
                          src={product.images[1]}
                          alt={product.title}
                          className=" object-cover object-center h-full"
                        />
                      </div>
                      <div className="rounded-lg lg:block border border-2">
                        <img
                          onClick={(e) => handleMainImg(e, 2)}
                          src={product.images[2]}
                          alt={product.title}
                          className=" object-cover object-center h-full"
                        />
                      </div>
                      <div className="rounded-lg lg:block border border-2">
                        <img
                          onClick={(e) => handleMainImg(e, 3)}
                          src={product.images[3]}
                          alt={product.title}
                          className=" object-cover object-center h-full "
                        />
                      </div>
                    </div>
                  </div>

                </div>

                {/* Product info */}
                <div className="mx-auto w-full px-8">
                  <div className="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
                    <h2 className="text-2xl font-bold tracking-tight sm:text-3xl  textplayfair">{product.title}</h2>
                  </div>

                  <div className="py-3 lg:col-span-2 lg:col-start-1 lg:border-r lg:border-gray-200 lg:pb-3 lg:pr-8 lg:pt-6">
                    {/* Description and details */}
                    <div>
                      <h3 className="sr-only">Description</h3>

                      <div className="space-y-6">
                        <p className="text-base text-gray-900">{product.description}</p>
                      </div>
                    </div>

                    {/* Reviews */}
                    <div className="my-4">
                      <h3 className="sr-only">Reviews</h3>
                      <div className="flex items-center">
                        <div className="flex items-center">
                          {[0, 1, 2, 3, 4].map((rating) => (
                            <StarIcon
                              key={rating}
                              className={classNames(
                                product.rating > rating ? 'text-yellow-400' : 'text-gray-200',
                                'h-5 w-5 flex-shrink-0'
                              )}
                              aria-hidden="true"
                            />
                          ))}
                        </div>
                        <p className="sr-only">{product.rating} out of 5 stars</p>
                        {/* <a href={reviews.href} className="ml-3 text-sm font-medium text-indigo-600 hover:text-indigo-500">
                        {reviews.totalCount} reviews
                      </a> */}
                      </div>
                    </div>
                    {/* rating ends */}
                    <div className='prices'>
                      <p className="text-3xl tracking-tight text-gray-900"><span className="discountpercent">{Math.round(product.discountPercentage)}%</span> ₹{discountedPrice(product)}</p>

                      <p className="text-sm tracking-tight text-gray-500 line-through">M.R.P ₹{product.price}</p>

                    </div>

                    <div className="mt-4">
                      <h3 className="text-sm font-medium text-gray-900">Highlights</h3>

                      <div className="mt-4">
                        <ul role="list" className="list-disc space-y-2 pl-4 text-sm">
                          {highlights.map((highlight) => (
                            <li key={highlight} className="text-gray-400">
                              <span className="text-gray-600">{highlight}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div className="mt-4">
                      <h2 className="text-sm font-medium text-gray-900">Details</h2>

                      <div className="mt-4 space-y-6">
                        <p className="text-sm text-gray-600">{product.description}</p>
                      </div>
                    </div>
                  </div>
                  {/* Options */}
                  <div className="mt-4 lg:row-span-3 lg:mt-0">
                    <h2 className="sr-only">Product information</h2>



                    <form className="mt-4">
                      {/* Colors */}
                      <div>
                        <h3 className="text-sm font-medium text-gray-900">Color</h3>

                        <RadioGroup value={selectedColor} onChange={setSelectedColor} className="mt-4">
                          <RadioGroup.Label className="sr-only">Choose a color</RadioGroup.Label>
                          <div className="flex items-center space-x-3">
                            {colors.map((color) => (
                              <RadioGroup.Option
                                key={color.name}
                                value={color}
                                className={({ active, checked }) =>
                                  classNames(
                                    color.selectedClass,
                                    active && checked ? 'ring ring-offset-1' : '',
                                    !active && checked ? 'ring-2' : '',
                                    'relative -m-0.5 flex cursor-pointer items-center justify-center rounded-full p-0.5 focus:outline-none'
                                  )
                                }
                              >
                                <RadioGroup.Label as="span" className="sr-only">
                                  {color.name}
                                </RadioGroup.Label>
                                <span
                                  aria-hidden="true"
                                  className={classNames(
                                    color.class,
                                    'h-8 w-8 rounded-full border border-black border-opacity-10'
                                  )}
                                />
                              </RadioGroup.Option>
                            ))}
                          </div>
                        </RadioGroup>
                      </div>

                      {/* Sizes */}
                      <div className="mt-10">
                        <div className="flex items-center justify-between">
                          <h3 className="text-sm font-medium text-gray-900">Size</h3>
                          <a href="#" className="text-sm font-medium text-indigo-600 hover:text-indigo-500">
                            Size guide
                          </a>
                        </div>

                        <RadioGroup value={selectedSize} onChange={setSelectedSize} className="mt-4">
                          <RadioGroup.Label className="sr-only">Choose a size</RadioGroup.Label>
                          <div className="grid grid-cols-4 gap-4 sm:grid-cols-8 lg:grid-cols-4">
                            {sizes.map((size) => (
                              <RadioGroup.Option
                                key={size.name}
                                value={size}
                                disabled={!size.inStock}
                                className={({ active }) =>
                                  classNames(
                                    size.inStock
                                      ? 'cursor-pointer bg-white text-gray-900 shadow-sm'
                                      : 'cursor-not-allowed bg-gray-50 text-gray-200',
                                    active ? 'ring-2 ring-indigo-500' : '',
                                    'group relative flex items-center justify-center rounded-md border py-3 px-4 text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none sm:flex-1 sm:py-6'
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
                                          'pointer-events-none absolute -inset-px rounded-md'
                                        )}
                                        aria-hidden="true"
                                      />
                                    ) : (
                                      <span
                                        aria-hidden="true"
                                        className="pointer-events-none absolute -inset-px rounded-md border-2 border-gray-200"
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

                      <div className="grid  grid-cols-1 xl:grid-cols-2 lg:gap-2 my-4">
                        <button
                          onClick={handleCart}
                          // type="submit"
                          className="mt-3 flex w-full items-center justify-center rounded-md border border-transparent bg-orange-500 hover:bg-orange-600 px-8 py-3 text-base font-medium  text-white  focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                        >
                          <CartIcon color="#ffffff" className="h-6 w-6 text-white mr-2" />  <span className='ml-2'>ADD TO CART</span>

                        </button>
                        <button
                          onClick={handleWishlist}
                          // type="submit"
                          className="mt-3  flex w-full items-center justify-center rounded-md border border-transparent bg-yellow-500 hover:bg-yellow-600 px-8 py-3 text-base font-medium text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 wishlistbtn"
                        >
                          <WishlistIcon color="#ffffff" className="h-6 w-6 text-white mr-2" />  <span className='ml-2'>ADD TO WISHLIST</span>

                        </button>
                      </div>


                    </form>

                  </div>


                </div>

                {/* Product info ends */}
              </div>
            </div>
          )}
        </div>
        {/*product details ends*/}



        {/* Similar products category*/}
        <div className='mt-5 p-5 m-10 pb-11'>
          <SimilarProductCategories />

        </div>
        {/*latest products*/}
        <div className='mt-5 p-5 m-10 pb-11'>
          <LatestProducts />

        </div>
        <br /><br />

      </div>

    </>
  )
}
