
import Navbar from '../../Component/Navbar/Navbar'
import { Outlet } from 'react-router-dom'

function Layout() {
  return (
    <>
    <Navbar/>
    <Outlet/>
    
    </>
  )
}

export default Layout