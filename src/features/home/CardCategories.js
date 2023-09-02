import CategoryCard from "../common/CategoryCard"

const CardCategories = () => {
  return (
    <div className="mt-10 md:mt-20">
      <div className="grid grid-cols-2 gap-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 sm:gap-4 md:gap-3 content-start custom-cols-1">
        <CategoryCard src="assets/images/home/cardcat1.png" heading="Streetwear Collections" link="/" bgclass="cardcatbg1" />
        <CategoryCard src="assets/images/home/cardcat2.png" heading="Striped T-Shirts" link="/" bgclass="cardcatbg2" />
        <CategoryCard src="assets/images/home/cardcat3.png" heading="Round Neck T-Shirts" link="/" bgclass="cardcatbg3" />
        <CategoryCard src="assets/images/home/cardcat4.png" heading="Printed T-Shirts" link="/" bgclass="cardcatbg4" />
        <CategoryCard src="assets/images/home/cardcat5.png" heading="Oversized T-Shirts" link="/" bgclass="cardcatbg5" />
        <CategoryCard src="assets/images/home/cardcat6.png" heading="Half Sleeves T-Shirts" link="/" bgclass="cardcatbg6" />

      </div>
    </div>

  )
}

export default CardCategories;