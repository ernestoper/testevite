import React from 'react'
import Layout from '../../components/hocs/layout/Layout'
import CTA from '../../components/home/CTA'
import Features from '../../components/home/Features'
import Header from '../../components/home/Header'
import Incentives from '../../components/home/Incentives'
import UseCases from '../../components/home/UseCases'
import Footer from '../../components/navigation/Footer'
import Navbar from '../../components/navigation/Navbar'
import { useEffect } from "react"
function Home() {
  useEffect(()=>{
    window.scrollTo(0,0)
},[])
  return (
    <Layout>
      <Navbar/>
      <div  className=''>
        <Header/>
        <Incentives/>
        <UseCases/>
        <Features/>
        <CTA/>
      </div>

      <Footer/>
    </Layout>
  )
}

export default Home