import React from 'react'
import Header from '../../components/portfolio/Header'
import Footer from '../../components/navigation/Footer'
import Navbar from '../../components/navigation/Navbar'
import Layout from '../../hocs/layouts/Layout'
import CaseCard from '../../components/portfolio/CaseCard'
import CasesList from '../../components/portfolio/CasesList'

function Portfolio() {
  return (
    <Layout>
      <Navbar/>
      <div className='pt-32'>
        <Header/>
        <CasesList/>
      </div>
      <Footer/>
    </Layout>
  )
}

export default Portfolio