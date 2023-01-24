import React from 'react'
import Footer from '../../components/navigation/Footer'
import Navbar from '../../components/navigation/Navbar'
import Layout from '../../hocs/layouts/Layout'

function Portfolio() {
  return (
    <Layout>
      <Navbar/>
      <div className='pt-32'>Portfolio</div>
      <Footer/>
    </Layout>
  )
}

export default Portfolio