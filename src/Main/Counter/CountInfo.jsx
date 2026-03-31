import React from 'react';

const CountInfo = ({count}) => {
    return (
     <div className="text-white flex items-center gap-4">
  
  <div className="flex flex-col">
    <h1 className="font-extrabold text-5xl">{count.value}</h1>
    <p className="opacity-75">{count.label}</p>
  </div>


<div className="border-l border-white h-12 opacity-50"></div>

</div>
    );
};

export default CountInfo;