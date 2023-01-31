import React, { useEffect } from 'react'
import Layout from '../../components/hocs/layout/Layout'
import Footer from '../../components/navigation/Footer'
import Navbar from '../../components/navigation/Navbar'
function Portfolio() {
  useEffect(()=>{
    window.scrollTo(0,0)
},[])
  return (
    <Layout>
        <Navbar/>
        <div className='pt-32' >Portfolio</div>

        <Footer/>
    </Layout>
  )
}

export default Portfolio