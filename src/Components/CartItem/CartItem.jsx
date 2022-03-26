import React from 'react';
import './CartItem.css'

const CartItem = ({singleDog}) => {
    return (
        <div className='cart-item-main'>
            <img src={singleDog.img} alt="" />
            <p><strong className='dog-name'>{singleDog.name}</strong> - ${singleDog.price}</p>
        </div>
    );
};

export default CartItem;