import React, { useEffect } from 'react';
import { useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Player.css';

const Player = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] =useState([]);

    useEffect( () => {
        fetch('products.json')
        .then(res => res.json())
        .then(data => setProducts(data))
    },[])
    const handleAddtoCart = (product) => {
        const newCart = [...cart, product];
        setCart(newCart);

    }
    return (
        
       
       
        <div className='player-container'>
            <div>
            <h1>Yeasin Club</h1>
        <h3>Sports Player</h3>
        <div className="products-container">
                
             {
                 products.map(product=><Product key={product.id} product={product} handleAddtoCart={handleAddtoCart}></Product>)
             }
                 
  
 
 
             </div>

            </div>
             
             
             <div className="cart-container">
             <Cart cart={cart}></Cart>
 
             </div>
         </div>
        
    

    );
};

export default Player;