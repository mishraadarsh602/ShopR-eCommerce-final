import React from 'react';
import Navbar from "../navbar/Navbar";
import Footer from '../common/Footer';
import Banners from '../home/Banners';
import TrendingProducts from '../home/TrendingProducts';
import FeaturedProducts from '../home/FeaturedProducts';
// import NewProducts from '../home/NewProducts';
import BestSellingProducts from '../home/BestSellingProducts';
import CardCategories from '../home/CardCategories';

import Banner from '../common/Banner';
import Features from '../home/Features';
import Subscription from '../home/Subscription';
import TopCategories from '../home/TopCategories';
import SaleDiscount from '../home/SaleDiscount';
import LatestProducts from '../product/components/LatestProducts';
import BannerSlider from '../common/BannerSlider';

const Home = () => {
  return (
    <>
      <Navbar>
        <div className="maindiv overflow-hidden">
          {/* <div className="banner"></div> */}

          <BannerSlider
            deskBanner1="assets/images/home/banners/slide1.jpg"
            deskBanner2="assets/images/home/banners/slide2.jpg"
            deskBanner3="assets/images/home/banners/slide3.jpg"
            mobBanner1="assets/images/home/banners/slide1-mob.jpg"
            mobBanner2="assets/images/home/banners/slide2-mob.jpg"
            mobBanner3="assets/images/home/banners/slide3-mob.jpg"

          />
          <div className="mx-auto max-w-7xl px-3 sm:px-6 lg:px-16 mt-4">
            {/*top categories*/}
            <TopCategories />
            <Banners />
            {/* <TrendingProducts headingtext="Trending T-Shirts"/> */}
            {/* <FeaturedProducts headingtext="Featured Products"/> */}
            <LatestProducts headingtext="Trending Products" from="83" to="93" />
            <LatestProducts headingtext="Featured Products" from="77" to="82" />


          </div>

          <div className="mt-0 md:my-10">
            <Banner src="assets/images/home/banners/grab.jpg" />
          </div>
          <div className="mx-auto max-w-7xl px-3 sm:px-6 lg:px-16">
            <LatestProducts headingtext="New Products" from="41" to="50" />
            <LatestProducts headingtext="Best Selling Products" from="51" to="60" />

            {/* <BestSellingProducts headingtext="Best Selling Products"/> */}
            <CardCategories />
          </div>

          <div className="mt-0 md:my-10">
            <Banner src="assets/images/home/banners/loosefit.jpg" />
          </div>

          <SaleDiscount />
          <Features />
          <Subscription />
        </div>

      </Navbar>
      <Footer />
    </>
  )
}

export default Home