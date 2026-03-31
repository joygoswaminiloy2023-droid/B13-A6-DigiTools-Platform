import React from 'react';

const Cart = () => {
    const arr=[];
    return (
        <div>
                  <div>
            {arr.length === 0 ? (
                <div>No Items selected</div>
            ) : (
                <div>Items available</div>
            )}
        </div>
        </div>
    );
};

export default Cart;