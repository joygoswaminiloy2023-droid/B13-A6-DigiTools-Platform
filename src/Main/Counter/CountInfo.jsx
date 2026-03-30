import React from 'react';

const CountInfo = ({count}) => {
    return (
        <div className='text-white '>
            <h1 className='font-extrabold text-5xl'>{count.value}</h1>
            <p className='opacity-75'>{count.label}</p>
           
        </div>
    );
};

export default CountInfo;