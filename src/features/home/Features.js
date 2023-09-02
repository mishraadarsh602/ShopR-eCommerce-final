import BannerText from "../common/BannerText"

const Features = () => {
    return (
        <div className="features mt-4 md:mt-20 ">
            <div className="relative  bgColor3 py-8">
                <div className="absolute  -left-32 -bottom-28 z-1 rounded-full redcircle "></div>
                <div className="container w-4/5 m-auto  grid grid-cols-2  sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4  content-start custom-cols-1">
                    <BannerText src="assets/images/home/features/7-day-return.png" h1="7 Days Return" banclass="banner-text flex justify-center gap-0 items-center  flex-col p-2  sm:p-8    " />
                    <BannerText src="assets/images/home/features/quality-product.png" h1="Quality Products" banclass="banner-text flex justify-center gap-0 items-center   flex-col  p-2  sm:p-8 " />
                    <BannerText src="assets/images/home/features/safe-payment.png" h1="Safe Payment" banclass="banner-text flex justify-center gap-0 items-center  flex-col  p-2  sm:p-8 " />
                    <BannerText src="assets/images/home/features/24x7.png" h1="24x7 Helpline" banclass="banner-text flex justify-center gap-0 items-center   flex-col  p-2  sm:p-8 " />

                </div>
                <div className="absolute    -right-32 -top-28 z-1 rounded-full redcircle "></div>

            </div>

        </div>
    )
}

export default Features