import React, { use } from 'react';
import Tools_card from './Tools_card';
import Cart from './Cart/Cart';

const Premiumtools = ({toggle,setToggle,premiumtools}) => {

    const handle_toggle=(state)=>{
        setToggle(state)
    }

    const premiumtools_data=use(premiumtools)
    console.log(premiumtools_data);
    return (
        <div className='bg-white'>
            {/* heading */}
            <div className='my-10 text-center space-y-2'>
<h1 className='text-5xl font-extrabold'>Premium Digital Tools</h1>
<p className='text-[#627382] text-2xl'>Choose from our curated collection of premium digital products designed 
    <br />to boost your productivity and creativity.</p>
            </div>
{/* toggle */}
<div className='flex items-center justify-center gap-20'>
    <div className='border rounded-4xl border-gray-300'>
    <button onClick={()=>handle_toggle("products")} className={`p-3 bg-linear-to-r ${toggle==="products"&&"bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white"}  font-bold rounded-4xl`}>Products</button>
    <button onClick={()=>handle_toggle("cart")} className={`p-3 font-bold ${toggle==="cart"&&"bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white"} rounded-4xl`}>Cart(2)</button>
    </div>

</div>
{/* motherdiv */}
           {toggle==="products"?(

<div className={`grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-7xl m-auto  place-items-center rounded-4xl p-2 my-5`}>
{premiumtools_data.map((tools_data,index)=><Tools_card key={index} tools_data={tools_data}></Tools_card>)}
</div>):(<Cart></Cart>)}
            </div>

           
       
);

};

export default Premiumtools;