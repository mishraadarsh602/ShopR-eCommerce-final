import { Link } from "react-router-dom";

const CategoryCard = ({src,heading,link,bgclass}) => {
  return (
    <Link to={link}>
       <div className={`relative cardcategory-card m-1 ${bgclass}`}>
       <div><img src={src} /></div>
        <div className="box absolute bottom-0 w-full p-4 sm:p-5"><h6 className="text-sm sm:text-xl text-center textplayfair text-white ">{heading}</h6></div>
       </div>
    </Link>
  )
}

export default CategoryCard;