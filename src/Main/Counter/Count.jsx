import React, { use } from 'react';
import CountInfo from './CountInfo';

const Count = ({count}) => {
    const countData=use(count)
    console.log(countData)
    return (
        <div>
            <div className='flex flex-col text-center space-y-20 md:flex-row md:space-y-0 justify-evenly items-center px-20  bg-linear-to-r from-[#4F39F6] to-[#9514FA] py-15 '>
              {countData.map((count,index)=><CountInfo key={index} count={count}></CountInfo>)}
          
            </div>
            
        </div>
    );
};

export default Count;