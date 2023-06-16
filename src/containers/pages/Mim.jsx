import React from 'react'
import Layout from '../../components/hocs/layout/Layout'
import CTA from '../../components/eu/CTA'

import Footer from '../../components/navigation/Footer'
import Navbar from '../../components/navigation/Navbar'
import { useEffect } from "react"
import Header from '../../components/eu/Header'
import Corpo from '../../components/eu/Corpo'
function Mim() {
  useEffect(()=>{
    window.scrollTo(0,0)
},[])
  return (
    <Layout>
      <Navbar/>
      <div  className=''>
        {/* <Header/> */}
        {/* <Corpo/> */}
        {/* <CTA/> */}
        Em contrução
      </div>

      <Footer/>
    </Layout>
  )
}

export default Mim