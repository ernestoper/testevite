import React, { useState } from 'react'
import { connect } from "react-redux";
import { Link, NavLink } from 'react-router-dom';
import logo from '../../assets/img/logo.png';
import logoa from '../../assets/img/portfolio/LOGOCORES/LOGOBRANCA.png';
import DotLoader from "react-spinners/DotLoader";
import HashLoader from "react-spinners/HashLoader";


window.onscroll = function () {scrollFunction()}

function scrollFunction() {

  if (document.getElementById('navbar')){
      if (document.body.scrollTop >50 || document.documentElement.scrollTop>50) {
        document.getElementById('navbar').classList.add('bg-magenta')

      } 
      else {

        document.getElementById('navbar').add.remove('bg-verdecatarro')

      }
    }  
}

function Navbar() {
  const [loading,setLoading]=useState(true)
  return (
    <nav id='navbar' className=' w-full  transition duration-300 eas-in-out   lg:h-24  h-16   fixed bg-navb z-30'>
      <div className=" lg:-mt-2  mt-0  md:mt-2">
      <div className=" -mt-10 flex flex-wrap items-center justify-between sm:flex-nowrap rounded-full ">
        <Link className="lg:ml-6 mt-3 lg:-mt-1 z-30 ml-2">

          <img
            src={logoa}
            className=" z-20 lg:h-44 lg:w-96 h-28 w-40 "
            // width={350}
            // height={140}
  
          />
        </Link>
        

        <div className=" bg-verdecatarro flex-shrink-0  hidden md:inline-flex lg:inline-flex border-2  border-pretoneon rounded-full items-center ">
          <NavLink to='/' className="shrink  transition delay-20 px-7 py-3 mt-0 mx-0 md:text-sm text-xl font-semibold leading-6 uppercase text-gray-900 inline-flex  hover:text-white hover:bg-pretoneon  rounded-full">Home</NavLink>
          <NavLink to='/servicos' className=" transition delay-20 px-3 py-3 mt-0 mx-0 md:text-sm text-xl font-semibold leading-6 uppercase text-gray-900 inline-flex  hover:text-white hover:bg-pretoneon rounded-full">Serviços</NavLink>
          <NavLink to='/mim' className=" transition delay-20 px-3 py-3 mt-0 mx-0 md:text-sm text-xl font-semibold leading-6 uppercase text-gray-900 inline-flex  hover:text-white hover:bg-pretoneon rounded-full">Quem sou eu</NavLink>
          <NavLink to='/portfolio' className="ease-linear transition delay-20 px-3 py-3 mt-0 mx-0 md:text-sm text-xl font-semibold leading-6 uppercase text-gray-900 inline-flex  hover:text-white hover:bg-pretoneon rounded-full">Portfólio</NavLink>
          <NavLink to='/clientes' className="ease-linear transition delay-20 px-5 py-3 mt-0 mx-0 md:text-sm text-xl font-semibold leading-6 uppercase text-gray-900 inline-flex  hover:text-white hover:bg-pretoneon rounded-full">Clientes</NavLink>

          {/* <button
            type="button"
            className="ml-10 relative inline-flex items-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          >
            Contato
          </button>

          <Link
              to="/contacto"
              className="inline-flex ml-12 items-center rounded-md border border-transparent bg-orange-button px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-gray-900 transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
          >
              Hire Us
              <DotLoader className="ml-3 -mr-1 h-5 w-5" loading={loading} size={20} color="#f2f2f2" />
          </Link> */}
      
          </div>
          <div className='-ml-6 -mt-2 -mb-2  px-2 md:px-4 hidden md:inline-flex lg:inline-flex flex-wrap items-center justify-between sm:flex-nowrap" '>
              <Link
              to='/contato'
                  type= 'button'
                  className=" hidden  border-4 border-pretoneon relative md:inline-flex items-center rounded-full  bg-azulbebe px-2  text-xl font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                >
                  Contato
                  <HashLoader className=" ml-3 mr-1 h-5 w-6 mt-2 mb-2" loading={loading} size={30} color="#f2f2f2" />
                  
              </Link>
          </div>

          </div>
        


      </div>
    
    </nav>
  )
}

const mapStateToProps = state =>({

})

export default connect(mapStateToProps,{

}) (Navbar)