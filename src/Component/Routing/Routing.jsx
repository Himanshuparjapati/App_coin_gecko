import { Route, Routes } from "react-router-dom"
import { lazy,Suspense } from "react"
import Layout from "../../Pages/Layout/Layout"
import MyLoader from "../PageLoader/PageLoader"
import CustomErrorBoundary from "../ErrorBoundary/CustomerrorBoundary"

 
const Home = lazy(()=>import('../../Pages/Home/Home'))
const Coin_Detail= lazy(()=>import('../../Pages/Coin_detail/Coin_Detail'))
function Routing() {
  return (
    <CustomErrorBoundary>
    
   <Routes>
       <Route
         path="/"
         element={<Layout/>}
        >
           <Route index element={
              <Suspense fallback={<MyLoader/>}>
                <Home/>
              </Suspense>
           }/>


           <Route path="/details/:coinId" element={
              <Suspense fallback={<MyLoader/>}>
                 <Coin_Detail/>
             </Suspense>
           }/>

       </Route>
    </Routes>
    </CustomErrorBoundary>
  )
}

export default Routing