import './DescriptionBox.css'

const Descriptionbox = () => {
  return (
    <div className='descriptionbox'>
        <div className="descriptionbox-navigator">
            <div className="descriptionbox-nav-box">Description</div>
            <div className="descriptionbox-nav-box fade">Reviews {122}</div>
        </div>
        <div className="descriptionbox-description">
            <p>An e-commerce website is an online platform</p>
            <p>E-commerce website typically display product</p>
        </div>
    </div>
  )
}

export default Descriptionbox