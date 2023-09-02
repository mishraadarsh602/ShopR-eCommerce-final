//This is used by Home Page Only

import Banner from '../common/Banner'

const Banners = () => {
  return (
    <>
      <div className="my-4">

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-2 my-4">

          <Banner src="assets/images/home/banners/smban1.jpg"></Banner>
          <Banner src="assets/images/home/banners/smban2.jpg"></Banner>

        </div>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 md:grid-cols-3 ">

          <Banner src="assets/images/home/banners/smban3.jpg"></Banner>
          <Banner src="assets/images/home/banners/smban4.jpg"></Banner>
          <Banner src="assets/images/home/banners/smban5.jpg"></Banner>

        </div>
      </div>
    </>
  )
}

export default Banners