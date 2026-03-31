import { ShoppingCart, Trash2 } from 'lucide-react';
import React from 'react';

const Cart = ({selectedplans,setSelectedplans}) => {
const arr=selectedplans;

let total = 0;

for (let item of arr) {
  total += item.price;
}

total = total.toFixed(2);

const handledelete=(item)=>{
   const filterPlans=arr.filter((filterselected)=>filterselected.id !== item.id)
    setSelectedplans(filterPlans);
}

const handlecheckout=()=>{

setSelectedplans([]);
}

    return (
        <div className='max-w-7xl m-auto shadow-2xl p-2 rounded-2xl'>
                  <div>
            {arr.length === 0 ? (
                <div className='flex items-center justify-center flex-col max-w-7xl rounded-2xl shadow-2xl m-auto py-15'>
                    <ShoppingCart size={50}></ShoppingCart>
                    <p className='text-4xl opacity-75'>Cart is Empty</p>
                </div>
            ) : (
                <div className="p-8 space-y-6">
        {arr.map((item) => (
          <div key={item.id} className="flex items-center gap-4 bg-zinc-50 rounded-2xl p-5">
            <div className="w-14 h-14 bg-linear-to-br from-purple-400 to-blue-500 rounded-2xl flex items-center justify-center text-3xl shadow-inner">
              <img src={item.icon} alt="" />
            </div>

            <div className="flex-1">
              <h3 className="font-semibold text-lg">{item.name}</h3>
              <p className="text-purple-600 font-semibold">${item.price}</p>
            </div>

            <button onClick={()=>handledelete(item)} className="text-red-500 hover:text-red-600 p-2 rounded-xl hover:bg-red-50 transition">
              <Trash2 size={22} />
            </button>
          </div>
        ))}
      </div>

    
    
            )}
            
        </div>
          {/* Total & Checkout */}
      <div className="px-8 py-8 border-t border-zinc-100 bg-zinc-50 rounded-b-3xl">
        <div className="flex justify-between items-center mb-6">
          <span className="text-lg font-medium text-zinc-600">Total</span>
          <span className="text-3xl font-bold">$ {total}</span>
        </div>

        <button onClick={handlecheckout} className="w-full bg-purple-600 hover:bg-purple-700 active:bg-purple-800 transition-all py-4 rounded-2xl text-white font-semibold text-lg">
          Proceed To Checkout
        </button>
            
      </div>
        </div>
);
};

export default Cart;