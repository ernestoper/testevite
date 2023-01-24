import React from 'react'
import Footer from '../../components/navigation/Footer'
import Navbar from '../../components/navigation/Navbar'
import Layout from '../../hocs/layouts/Layout'

function Clientes() {
  return (
    <Layout>
      <Navbar/>
      <div className='pt-32'>Clientes</div>
      <Footer/>
    </Layout>
  )
}

export default Clientes