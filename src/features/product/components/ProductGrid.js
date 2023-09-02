
import { Grid } from 'react-loader-spinner';
import Card from './Card';

function ProductGrid({ products, status, totalItems }) {
  return <>
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-0 py-0 sm:px-6 sm:py-2 lg:max-w-7xl lg:px-8">
        <div>
          <div className="grid grid-cols-2 gap-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 sm:gap-4 content-start">


            {status === "loading" ?
              <Grid
                height="80"
                width="80"
                color="#4fa94d"
                ariaLabel="grid-loading"
                radius="12.5"
                wrapperStyle={{}}
                wrapperClass=""
                visible={true}
              /> : null}
            {products.map((product) => (
              <>
                <Card key={product.id} product={product}></Card>
              </>
            ))}

          </div>

        </div>
      </div>
    </div>

  </>
}

export default ProductGrid;