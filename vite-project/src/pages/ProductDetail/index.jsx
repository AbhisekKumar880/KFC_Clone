import React from 'react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import product1 from '../../assets/img/product1.jpg'
const ProductDetail = () => {
  return (
    <div className='product-detail-wrapper'>
        <Header/>
        <div className="p-detail-inner pt-5">
        <div className="row">
            <div className="col-md-5">
                <img src={product1} alt="" />
            </div>
            <div className="col-md-7">
                <h3>Product Title</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil atque, fugit tenetur tempore reiciendis praesentium cum quaerat iusto ipsa iste laborum reprehenderit recusandae natus velit aspernatur numquam porro alias nostrum?</p>
            </div>
        </div>
        </div>
      <Footer/>
    </div>
  )
}

export default ProductDetail
