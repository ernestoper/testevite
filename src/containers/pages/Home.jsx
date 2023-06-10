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
import Cases from '../../components/home/Cases'
import Listatestimonios from '../../components/home/Listatestimonios'
import Carrousel from '../../components/home/Carrousel'
import Skills from '../../components/home/Skills'
import Trabajos from '../../components/home/Trabajos'
import Achievements from '../../components/home/Achievements'
function Home() {
  useEffect(()=>{
    window.scrollTo(0,0)
},[])
  return (
    <Layout>
      <Navbar/>
      <div  className='overflow-hidden'>
        <Header/>
        <Incentives/>
        <Features/>
        <Trabajos/> 
        <Achievements/>     
        <CTA/>
      </div>

      <Footer/>
    </Layout>
  )
}

export default Home