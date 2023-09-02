import BannerText from '../common/BannerText'

const SaleDiscount = () => {
    return (
        <div className=" mx-auto max-w-7xl px-3 py-6 sm:px-6 lg:px-16">
            <div className="grid grid-cols-1  sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2  gap-4 md:gap-6 content-start">
                <BannerText src="assets/images/home/diamond.png" h1="Hurry Up!" h2="85% OFF" h3="Sale" h1class="text-4xl textplayfair m-4  font-semibold" h2class="text-5xl md:text-7xl textplayfair m-4 font-semibold	" h3class="text-4xl textplayfair m-4 font-semibold" banclass="banner-text flex justify-center items-center  p-2 my-4  flex-col bgColor" btnclass="m-4 border border-1 border-white bg-transparent text-white hover:bg-white hover:text-black text-base p-4 px-10 textmontserrat" />
                <BannerText src="assets/images/home/discount.png" h1="Hurry Up!" h2="75% OFF" h3="Sale" h1class="text-4xl textplayfair m-4  font-semibold" h2class="text-5xl md:text-7xl textplayfair m-4 font-semibold	" h3class="text-4xl textplayfair m-4 font-semibold" banclass="banner-text flex justify-center items-center  p-2 my-4  flex-col bgColor2" btnclass="m-4 border border-1 border-white bg-transparent text-white hover:bg-white hover:text-black text-base p-4 px-10 textmontserrat" />
            </div>
        </div>
    )
}

export default SaleDiscount;