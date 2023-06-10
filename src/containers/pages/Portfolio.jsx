import React, { useEffect } from 'react'
import Layout from '../../components/hocs/layout/Layout'
import Footer from '../../components/navigation/Footer'
import Navbar from '../../components/navigation/Navbar'
import Trabajos from '../../components/home/Trabajos'
function Portfolio() {
  useEffect(()=>{
    window.scrollTo(0,0)
},[])
  return (
    <Layout>
        <Navbar/>

        <Trabajos/>

        <Footer/>
    </Layout>
  )
}

export default Portfolio