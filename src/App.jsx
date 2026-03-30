
import { Suspense } from 'react'
import './App.css'
import Hero from './Header/Hero/Hero'
import Nav from './Header/navbar/Nav'
import Count from './Main/Counter/count'


function App() {
 
  const count=fetch('counter.json').then(res=>res.json())
  console.log(count)


  return (
 <>
{/* header Start */}
<Nav></Nav>

<Hero></Hero>
{/* header end */}
<Suspense fallback={<span className="loading loading-spinner text-primary"></span>}>
  <Count count={count}></Count>
</Suspense>

 </>
  )
}

export default App
