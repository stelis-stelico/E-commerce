import './Breadcumbs.css'
import arrow_icon from '../Assets/breadcrum_arrow.png'

const Breadcumbs = (props) => {
    const {product} = props
  return (
    <div className='breadcumbs'>
        HOME <img src={arrow_icon} alt="" /> SHOP <img src={arrow_icon} alt="" /> {product.category} <img src={arrow_icon} alt="" /> {product.name}
    </div>
  )
}

export default Breadcumbs