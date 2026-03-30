import React from 'react';
import tick from '../../assets/vector.png'

const Tools_card = ({tools_data}) => {
    return (
    <div className="max-w-lg bg-white border border-gray-100 rounded-2xl p-10 relative shadow-2xl">
  {/* Badge */}
  <div className={`absolute top-8 right-8 ${tools_data.tag==="New"&&"bg-green-300 text-green-700"||tools_data.tag==="Best seller"&& "bg-orange-300  text-orange-700"||tools_data.tag==="Popular"&&"bg-purple-300 text-purple-700"} text-sm font-bold px-4 py-1.5 rounded-full`}>
    {tools_data.tag}
  </div>

  {/* Icon */}
  <div className="w-16 h-16 bg-[#F8F9FF] rounded-full flex items-center justify-center mb-8 border border-gray-50">
    <img src={tools_data.icon} alt="" />
  </div>

  {/* Header */}
  <h2 className="text-4xl font-extrabold text-gray-900 mb-4">AI Writing Pro</h2>
  <p className="text-gray-500 text-lg leading-snug mb-8">
    {tools_data.description}
  </p>

  {/* Price */}
  <div className="flex items-baseline mb-10">
    <span className="text-5xl font-extrabold text-gray-900">$ {tools_data.price}</span>
    <span className="text-gray-400 text-xl ml-1">{tools_data.period}</span>
  </div>

  {/* Features */}
  <div className="space-y-5 mb-10">
    {tools_data.features.map((text) => (
      <div key={text} className="flex items-center gap-3">
        <div className="shrink-0 w-6 h-6 rounded-full bg-emerald-50 flex items-center justify-center">
          <img src={tick} alt="" />
        </div>
        <span className="text-gray-700 font-medium text-lg">{text}</span>
      </div>
    ))}
  </div>

  {/* Action */}
  <button className="w-full py-5 bg-[#7C3AED] hover:bg-[#6D28D9] text-white text-xl font-bold rounded-2xl transition-all">
    Buy Now
  </button>
</div>
    );
};

export default Tools_card;