import React from 'react'
import CTA from '../../components/home/CTA'
import Header from '../../components/home/Header'
import Incentives from '../../components/home/Incentives'
import UseCases from '../../components/home/UseCases'
import Footer from '../../components/navigation/Footer'
import Navbar from '../../components/navigation/Navbar'
import Layout from '../../hocs/layouts/Layout'

function Home() {
  return (
    <Layout>
      <Navbar/>
      <div className='pt-32'>
        <Header/>
        <Incentives/>
        <UseCases/>
        <CTA/>
      </div>

      <Footer/>
    </Layout>
  )
}

export default Home
