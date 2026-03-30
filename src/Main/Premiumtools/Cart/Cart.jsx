import React from 'react';

const Cart = () => {
    const arr = [1];

    return (
        <div>
            {arr.length === 0 ? (
                <div>No Items selected</div>
            ) : (
                <div>Items available</div>
            )}
        </div>
    );
};

export default Cart;