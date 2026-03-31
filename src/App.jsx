
import { Suspense, useState } from 'react'
import './App.css'
import Hero from './Header/Hero/Hero'
import Nav from './Header/navbar/Nav'
import Count from './Main/Counter/count'
import Premiumtools from './Main/Premiumtools/Premiumtools'
import Pricing from './Main/Pricing_sec/Pricing'
import Footer from './Footer/footer'
import Started from './Main/Strated/Started'
import Readytransform from './Footer/Readytransform'





function App() {
 
  const count=fetch('counter.json').then(res=>res.json())
  

  const premiumtools=fetch('premiumtools.json').then(res=>res.json())
  console.log(premiumtools)

  const [toggle,setToggle]=useState("products");

    const [selectedplans,setSelectedplans]=useState([])

  return (
 <>
{/* header Start */}
<Nav selectedplans={selectedplans}></Nav>



{toggle === "products" &&
<Hero></Hero>
}


{/* header end */}


{/* main start */}


{/* counter */}

{toggle === "products" &&
<Suspense 
  fallback={
    <div className="flex h-64 w-full items-center justify-center">
      <span className="loading loading-spinner loading-xl text-primary"></span>
    </div>
  }
>
  <Count count={count} />
</Suspense>
}


{/* premiumtools */}

<Suspense 
  fallback={
    <div className="flex h-64 w-full items-center justify-center">
      <span className="loading loading-spinner loading-xl text-primary"></span>
    </div>
  }
><Premiumtools toggle={toggle} setToggle={setToggle} premiumtools={premiumtools} selectedplans={selectedplans} setSelectedplans={setSelectedplans}></Premiumtools>
 
</Suspense>
{/* getstarted */}

{toggle === "products" &&
<Started></Started>
}

{/* pricing */}
{toggle === "products" &&
<Pricing></Pricing>
}
 {/* transform */}
 {toggle==="products" &&
<Readytransform></Readytransform>
}


{/* footer */}
{toggle==="products" &&
<Footer></Footer>
}
 </>

  )
}

export default App
