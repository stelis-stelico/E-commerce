import { useContext } from "react"
import { useParams } from "react-router-dom"
import Breadcrumbs from '../Components/Breadcumbs/Breadcumbs'
import { ShopContext } from "../Context/ShopContext"
import ProductDisplay from "../Components/ProductDisplay/ProductDisplay"
import Descriptionbox from "../Components/DescriptionBox/Descriptionbox"
import RelatedProducts from "../Components/RelatedProducts/RelatedProducts"

const Product = () => {
  const {all_product} = useContext(ShopContext)
  const {productId} =useParams()
  const product = all_product.find((e)=> e.id === Number(productId))

  return (
    <div>
      <Breadcrumbs product={product}/>
      <ProductDisplay product={product}/>
      <Descriptionbox/>
      <RelatedProducts/>
    </div>
  )
}

export default Product