
import { Suspense, useState } from 'react'
import './App.css'
import Hero from './Header/Hero/Hero'
import Nav from './Header/navbar/Nav'
import Count from './Main/Counter/count'
import Premiumtools from './Main/Premiumtools/Premiumtools'
import Pricing from './Main/Pricing_sec/Pricing'
import Footer from './Footer/footer'
import Started from './Main/Strated/Started'





function App() {
 
  const count=fetch('counter.json').then(res=>res.json())
  

  const premiumtools=fetch('premiumtools.json').then(res=>res.json())
  console.log(premiumtools)

  const [toggle,setToggle]=useState("products");


  return (
 <>
{/* header Start */}
<Nav></Nav>


<Hero></Hero>

{/* header end */}


{/* main start */}


{/* counter */}
<Suspense 
  fallback={
    <div className="flex h-64 w-full items-center justify-center">
      <span className="loading loading-spinner loading-xl text-primary"></span>
    </div>
  }
>
  <Count count={count} />
</Suspense>


{/* premiumtools */}

<Suspense 
  fallback={
    <div className="flex h-64 w-full items-center justify-center">
      <span className="loading loading-spinner loading-xl text-primary"></span>
    </div>
  }
><Premiumtools toggle={toggle} setToggle={setToggle} premiumtools={premiumtools}></Premiumtools>
 
</Suspense>
{/* getstarted */}
<Started></Started>

{/* pricing */}
<Pricing></Pricing>

{/* footer */}
<Footer></Footer>
 </>
  )
}

export default App
