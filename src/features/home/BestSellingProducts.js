
import Button from '../common/Button';
import Card from '../common/Card';
import products from './datas.json';
import Heading from '../common/Heading';

const BestSellingProducts = ({ headingtext }) => {

  return (
    <>
      <div className="mt-16 md:mt-20">

        <Heading headingtext={headingtext} ></Heading>

        <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4  content-start custom-cols-1">
          {products && products.slice(0, 4).map((product) => {
            return <Card product={product}></Card>
          })}
        </div>
        <div className="text-center m-4">
          <Button text={"View More"} textclass={"custom-red-btn"}></Button>
        </div>
      </div>

    </>
  )
}

export default BestSellingProducts;