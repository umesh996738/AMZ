import React from 'react'
import './Product.css';

//import { useStateValue } from './StateProvider';

function Product({ id, title, price, img, rating }) {

    //const [{ basket }, setBasket] = useStateValue();
    
//     const addToBasket = () => {
//     // dispatch the item into the data layer
//     setBasket({
//       type: "ADD_TO_BASKET",
//       item: {
//         id: id,
//         title: title,
//         img: img,
//         price: price,
//         rating: rating,
//       },
//     });
//   }
  
  return (
        <>
          <div className='product'>
              <div className='product_info'>
                  <p > 
                      {title}
                  </p>
                  <p className='product_price'>
                      <small>$</small>
                      <strong >{price} </strong>
                      
                  </p>
                  <div className='product_rating'>
                      🌟{Array(rating).fill()
                          .map((_, i) =>
                              (<p> 🌟</p>)
                      )}
                
                  </div>
                  </div>
              <img className=' product_img1' src={img}
                   alt='the startup' />
                 <button className='btn'>Add items to Cart</button>
                  
              
              
        </div>  
        </>
  )
}

export default Product

