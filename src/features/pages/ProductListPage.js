import Navbar from "../navbar/Navbar"
import ProductList from '../product/components/ProductList'
import Footer from '../common/Footer'

const ProductListPage = () => {
  return (
    <>
      <Navbar>
        <ProductList/>
      

      </Navbar>
      <Footer />
    </>
  )
}

export default ProductListPage;