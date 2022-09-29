import React from 'react';
import Count from '../Count/Count';
import './Cart.css';

const Cart = (props) => {
   const {cart} = props;
   
   
   let total = 0;
   for(const product of cart){
    total = total + product.time;
   }

    return (
        <div className='cart'>
            <h1>yeasin arafat</h1>
            <div className="adress">
                <h6>weight:60kg</h6>
                <h6>height:5.8</h6>
                <h6>age:22</h6>
            </div>
            <h1>Add A Break</h1>
            <div className="break-btn">
            <p><Count ></Count></p>
                
            </div>
            <p>Detalish</p>

            
            <p>Total-time:{total}s</p>
            <p className='active'>Activty Complited</p>
           
            
            

        </div>
    );
};

export default Cart;