import React from 'react';
import './Product.css';

const Product = (props) => {

    const {name,img, weight, time} = props.product
    
    return (
        <div className='product'>
           <img src={img} alt="" />
           <div className="product-info">
           <p className='product-name'>{name}</p>
           <p>Weight: {weight}</p>
           <p>Time of Required:{time}s</p>
           </div>
           <button onClick={() => props.handleAddtoCart(props.product)} className='btn-cart'>
            <p>Add to Added</p>
           </button>
        </div>
    );
};

export default Product;