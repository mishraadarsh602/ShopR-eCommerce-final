import Categories from '../common/Categories'

const TopCategories = () => {
  return (
    <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-6 sm:gap-4 p-5 content-start">
              <Categories name="Men’s T-Shirts" catsrc="assets/images/home/cat1.png" catbg="catbg1" ></Categories>
              <Categories name="Women’s Wear" catsrc="assets/images/home/cat2.png" catbg="catbg2" ></Categories>
              <Categories name="Winter Collections" catsrc="assets/images/home/cat3.png" catbg="catbg3"></Categories>
              <Categories name="Hooded T-Shirts" catsrc="assets/images/home/cat4.png" catbg="catbg4"></Categories>
              <Categories name="Polo Neck T-Shirts" catsrc="assets/images/home/cat5.png" catbg="catbg5"></Categories>
              <Categories name="Full Sleeves T-Shirts" catsrc="assets/images/home/cat6.png" catbg="catbg6"></Categories>
     </div>
  )
}

export default TopCategories