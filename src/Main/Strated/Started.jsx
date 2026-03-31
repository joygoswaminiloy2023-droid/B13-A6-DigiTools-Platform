import React from 'react';
import icon_1 from '../../assets/rocket.png'
import icon_2 from'../../assets/user.png'
import icon_3 from '../../assets/package.png'
const Started = () => {
    return (
        <div className='bg-[#F9FAFC] shadow-xl'>
            <div className="max-w-7xl mx-auto px-6 ">

                <div className="text-center mb-12">
                    <h2 className="text-4xl font-semibold tracking-tight">
                        Get Started in 3 Simple Steps
                    </h2>
                    <p className="text-zinc-400 mt-3 text-lg">
                        Start using premium digital tools in minutes — not hours.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">

                    <div className="step-card bg-white text-zinc-900 rounded-3xl p-8 shadow-xl border border-zinc-100">
                        <div className="flex justify-center mb-6">
                            <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center text-4xl">
                                <img src={icon_2} alt="" />
                            </div>
                        </div>
                        <div className="flex justify-center mb-4">
                            <div className="bg-purple-600 text-white text-sm font-medium w-7 h-7 rounded-full flex items-center justify-center">
                                01
                            </div>
                        </div>
                        <h3 className="text-2xl font-semibold text-center mb-3">Create Account</h3>
                        <p className="text-zinc-600 text-center leading-relaxed">
                            Sign up for free in seconds. No credit card required to get started.
                        </p>
                    </div>

                    <div className="step-card bg-white text-zinc-900 rounded-3xl p-8 shadow-xl border border-zinc-100">
                        <div className="flex justify-center mb-6">
                            <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center text-4xl">
                                <img src={icon_3} alt="" />
                            </div>
                        </div>
                        <div className="flex justify-center mb-4">
                            <div className="bg-purple-600 text-white text-sm font-medium w-7 h-7 rounded-full flex items-center justify-center">
                                02
                            </div>
                        </div>
                        <h3 className="text-2xl font-semibold text-center mb-3">Choose Products</h3>
                        <p className="text-zinc-600 text-center leading-relaxed">
                            Browse our catalog and select the tools that fit your needs perfectly.
                        </p>
                    </div>

                    <div className="step-card bg-white text-zinc-900 rounded-3xl p-8 shadow-xl border border-zinc-100">
                        <div className="flex justify-center mb-6">
                            <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center text-4xl">
                                <img src={icon_1} alt="" />
                            </div>
                        </div>
                        <div className="flex justify-center mb-4">
                            <div className="bg-purple-600 text-white text-sm font-medium w-7 h-7 rounded-full flex items-center justify-center">
                                03
                            </div>
                        </div>
                        <h3 className="text-2xl font-semibold text-center mb-3">Start Creating</h3>
                        <p className="text-zinc-600 text-center leading-relaxed">
                            Download and begin using your premium tools immediately.
                        </p>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Started;