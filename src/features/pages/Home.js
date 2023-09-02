import React from 'react';
import Navbar from "../navbar/Navbar";
import Footer from '../common/Footer';
import Banners from '../home/Banners';
import TrendingProducts from '../home/TrendingProducts';
import FeaturedProducts from '../home/FeaturedProducts';
import NewProducts from '../home/NewProducts';
import BestSellingProducts from '../home/BestSellingProducts';
import CardCategories from '../home/CardCategories';

import Banner from '../common/Banner';
import Features from '../home/Features';
import Subscription from '../home/Subscription';
import TopCategories from '../home/TopCategories';
import SaleDiscount from '../home/SaleDiscount';

const Home = () => {
  return (
    <>
      <Navbar>
        <div className="maindiv overflow-hidden">
          <div className="banner"></div>
          <div className="mx-auto max-w-7xl px-3 sm:px-6 lg:px-16 mt-4">
            {/*top categories*/}
            <TopCategories />
            <Banners />
            <TrendingProducts headingtext="Trending T-Shirts"/>
            <FeaturedProducts headingtext="Featured Products"/>
          </div>

          <div className="mt-0 md:my-10">
            <Banner src="assets/images/home/banners/grab.jpg" />
          </div>
          <div className="mx-auto max-w-7xl px-3 sm:px-6 lg:px-16">
            <NewProducts headingtext="New Products"/>
            <BestSellingProducts headingtext="Best Selling Products"/>
            <CardCategories/>
          </div>

          <div className="mt-0 md:my-10">
            <Banner src="assets/images/home/banners/loosefit.jpg" />
          </div>

         <SaleDiscount/>
          <Features />
          <Subscription />
        </div>

      </Navbar>
      <Footer />
    </>
  )
}

export default Home