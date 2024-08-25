import React, { useEffect } from 'react'
import ProductSlider from './ProductSlider';
import { useSelector, useDispatch } from 'react-redux';
import { fetchProductsByFiltersAsync, selectAllProducts } from '../productSlice';
const LatestProducts = ({headingtext,from,to}) => {
    const products = useSelector(selectAllProducts);
    const dispatch = useDispatch();
    console.log("latest products : ",products)
  useEffect(() => {
    dispatch(fetchProductsByFiltersAsync({}));

  },[dispatch]) 
  return (
       <>
       <div className='mb-10 mt-16 flex justify-center relative'>
       <div className='border border-1 border-pink-300 w-full'>
          </div>
          <span className='absolute text-center px-10 bottom-3 bg-white  inline-table -top-5'>
            <h1 className='text-2xl font-bold tracking-tight sm:text-3xl mb-5 textplayfair'>{headingtext}</h1>
          </span>
       
       </div>
     <ProductSlider products={products} from={from} to={to}></ProductSlider>
     </>
  )
}

export default LatestProducts