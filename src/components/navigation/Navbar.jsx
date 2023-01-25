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
        document.getElementById('navbar').classList.add('bg-cinzaed')

      } 
      else {

        document.getElementById('navbar').add.remove('bg-pretoneon')

      }
    }  
}

function Navbar() {
  const [loading,setLoading]=useState(true)
  return (
    <nav id='navbar' className=' w-full  transition duration-300 eas-in-out   lg:h-24  h-16   fixed bg-pretoneon z-30'>
      <div className="lg:-mt-12 lg:ml-6 -mt-2 ml-4 ">
      <div className=" flex flex-wrap items-center justify-between sm:flex-nowrap rounded-full ">
        <Link className="">

          <img
            src={logoa}
            className=" lg:h-48 lg:w-96 h-20 w-36  "
            // width={350}
            // height={140}
  
          />
        </Link>
        

        <div className=" bg-bege flex-shrink-0  hidden md:inline-flex lg:inline-flex  rounded-full items-center ">
          <NavLink to='/' className="shrink  transition delay-20 lg:px-7 px-1 py-3 mt-0 mx-0 md:text-sm text-xl font-semibold leading-6 uppercase text-gray-900 inline-flex  hover:text-white hover:bg-laranjaneon  rounded-full">Home</NavLink>
          <NavLink to='/servicos' className=" transition delay-20 lg:px-7 px-1 py-3 mt-0 mx-0 md:text-sm text-xl font-semibold leading-6 uppercase text-gray-900 inline-flex  hover:text-white hover:bg-laranjaneon  rounded-full">Serviços</NavLink>
          <NavLink to='/mim' className=" transition delay-20  lg:px-7 px-1 py-3  mt-0 mx-0 md:text-sm text-xl font-semibold leading-6 uppercase text-gray-900 inline-flex  hover:text-white hover:bg-laranjaneon  rounded-full">Quem sou eu</NavLink>
          <NavLink to='/portfolio' className="ease-linear transition delay-20 lg:px-7 px-1 py-3 mt-0 mx-0 md:text-sm text-xl font-semibold leading-6 uppercase text-gray-900 inline-flex  hover:text-white hover:bg-laranjaneon  rounded-full">Portfólio</NavLink>
          <NavLink to='/clientes' className="ease-linear transition delay-20 lg:px-7 px-1 py-3 mt-0 mx-0 md:text-sm text-xl font-semibold leading-6 uppercase text-gray-900 inline-flex  hover:text-white hover:bg-laranjaneon  rounded-full">Clientes</NavLink>

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
                  className=" hidden  hover:border-2 hover:border-white relative md:inline-flex items-center rounded-full  bg-salmao px-2  text-xl font-medium text-white shadow-sm hover:bg-laranjaneon focus:outline-none focus:ring-2 focus:ring-transparent "
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