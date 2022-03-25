import React from 'react';
import './Summary.css'

const Cart = () => {
    return (
        <div className='summary-container'>
            <h3>Cart</h3>
            <div className="summ-body">
            {}
            <div className='btn-container'>
                <button className='summ-btn'>Choose 1 for Me</button>
                <button className='summ-btn'>Choose Another</button>
            </div>
            </div>
        </div>
    );
};

export default Cart;