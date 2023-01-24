import React, { useState } from 'react'
import { connect } from "react-redux";
import { Link, NavLink } from 'react-router-dom';
import logo from '../../assets/img/logo.png';
import DotLoader from "react-spinners/DotLoader";
import HashLoader from "react-spinners/HashLoader";
function Navbar() {
  const [loading,setLoading]=useState(true)
  return (
    <nav className='w-full mt-5 rounded-full border-4 border-pretoneon  text-orange-500  fixed bg-verdecatarro'>
      <div className=" px-4 py-4 sm:px-6">
      <div className="-ml-6 -mt-2 -mb-2 md:px-14 px-4 flex flex-wrap items-center justify-between sm:flex-nowrap">
        <Link className="ml-0 mt-2">

          <img
            src={logo}
            width={30}
            height={40}
            className=''
          />
        </Link>

        <div className="flex-shrink-0  hidden lg:inline-flex border-4 border-pretoneon rounded-full">
          <NavLink to='/' className="px-3 py-3 mt-0 mx-0 text-lg font-semibold leading-6 text-gray-900 inline-flex  hover:text-white hover:bg-pretoneon  rounded-full">Home</NavLink>
          <NavLink to='/servicos' className="px-3 py-3 mt-0 mx-0 text-lg font-semibold leading-6 text-gray-900 inline-flex  hover:text-white hover:bg-pretoneon rounded-full">Serviços</NavLink>
          <NavLink to='/mim' className="px-3 py-3 mt-0 mx-0 text-lg font-semibold leading-6 text-gray-900 inline-flex  hover:text-white hover:bg-pretoneon rounded-full">Quem sou eu</NavLink>
          <NavLink to='/portfolio' className="px-3 py-3 mt-0 mx-0 text-lg font-semibold leading-6 text-gray-900 inline-flex  hover:text-white hover:bg-pretoneon rounded-full">Portfólio</NavLink>
          <NavLink to='/clientes' className="px-3 py-3 mt-0 mx-0 text-lg font-semibold leading-6 text-gray-900 inline-flex  hover:text-white hover:bg-pretoneon rounded-full">Clientes</NavLink>

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
          <div className='-ml-6 -mt-2 -mb-2  px-2  inlineflex flex flex-wrap items-center justify-between sm:flex-nowrap" '>
              <Link
              to='/contato'
                  type= 'button'
                  className=" hidden  border-4 border-pretoneon relative lg:inline-flex items-center rounded-full  bg-azulbebe px-2  text-xl font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
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