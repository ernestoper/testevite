import React, { useState } from 'react'
import { Link} from "react-router-dom";
import { FiMenu } from "react-icons/fi";
import { MdClose } from "react-icons/md";
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import logo from '../../assets/img/portfolio/LOGOCORES/logo.png';
import { navLinksdata } from '../../constants';
import HashLoader from "react-spinners/HashLoader";
import { Popover, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import { Fragment } from 'react'
import { NavLink } from 'react-router-dom';



const Navbar = () => {
  const [loading,setLoading]=useState(true)
  window.onscroll = function() {scrollFunction()}

  function scrollFunction() {
      if(document.getElementById('navbar')){
          if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {

              document.getElementById('navbar').classList.add('bg-cinzaed');
          }else{

              document.getElementById('navbar').classList.remove('bg-pretoneon');
          }
      }
  }
  const [showMenu, setShowMenu]=useState(false)
  return (
    <div className="lg:w-full lg:h-24 flex pr-5 top-0 z-50 bg-pretoneon sticky justify-between items-center font-lg shadow-b border-b-2 border-azulforte shadow-azulforte">
      <div className='lg:ml-12 ml-4 '>
        <img src={logo} alt="logo" className='lg:h-20 lg:w-44 h-14 w-18' />
      </div>
      <div className='bg-gradient-to-r from-roxosombra via-rosapink via-azulforte to-azulciano hover:opacity-200 rounded-full flex-shrink-0   flex-wrap items-center justify-between'>
        <ul className="hidden mdl:inline-flex ">
          {navLinksdata.map(({ _id, title, link }) => (
            <div
              className=""
              key={_id}
            >
              <Link className=' px-4 h-12 hover:text-white hover:border-2 hover:border-white  
                               hover:-translate-x-1 hover:scale-110 delay-10 rounded-full 
                               items-center text-lg inline-flex font-semibold leading-6 
                               text-white   hover:bg-gradient-to-r hover:from-azulforte hover:via-azulciano hover:via-azulciano hover:to-rosapink  transition duration-300 ease-in-out'
                // activeClass="active"
                to={link}
                // spy={true}
                // smooth={true}
                // offset={-70}
                // duration={500}
              >
                {title}
              </Link>
            </div>
          ))}
        </ul>
        <span
          onClick={() => setShowMenu(!showMenu)}
          className="text-xl mdl:hidden bg-black w-10 h-10 inline-flex items-center justify-center rounded-full text-designColor cursor-pointer"
        >
          <FiMenu />
        </span>
        {showMenu && (
          <div className="w-[80%] h-screen overflow-scroll absolute top-0 left-0 bg-gray-900 p-4 scrollbar-hide">
            <div className="flex flex-col gap-8 py-2 relative">
              <div>
                <img className="w-20" src={logo} alt="logo" />

              </div>
              <ul className="flex flex-col gap-4">
                {navLinksdata.map((item) => (
                  <div
                    key={item._id}
                    className="text-base font-normal text-gray-400 tracking-wide cursor-pointer hover:text-designColor duration-300"
                  >
                    <Link
                      onClick={() => setShowMenu(false)}
                      // activeClass="active"
                      to={item.link}
                      // spy={true}
                      // smooth={true}
                      // offset={-70}
                      // duration={500}
                    >
                      {item.title}
                    </Link>
                  </div>
                ))}
              </ul>
              <div className="flex flex-col gap-4">
                <h2 className="text-base uppercase font-titleFont mb-4">
                  Find me in
                </h2>
                <div className="flex gap-4">
                  <span className="bannerIcon">
                    <FaFacebookF />
                  </span>
                  <span className="bannerIcon">
                    <FaTwitter />
                  </span>
                  <span className="bannerIcon">
                    <FaLinkedinIn />
                  </span>
                </div>
              </div>
              <span
                onClick={() => setShowMenu(false)}
                className="absolute top-4 right-4 text-gray-400 hover:text-designColor duration-300 text-2xl cursor-pointer"
              >
                <MdClose />
              </span>
            </div>
          </div>
        )}
      </div>
      <div className='hidden mr-8   rounded-full  mdl:inline-flex items-center gap-6 lg:gap-10  text-white' >
          <div>
          <Link
              to='/contato'
                  type= 'button'
                  //className=" hidden  hover:border-2 hover:border-white relative md:inline-flex items-center rounded-full  bg-orange-500 px-2  text-xl font-medium text-white shadow-sm hover:bg-laranjaneon focus:outline-none focus:ring-2 focus:ring-transparent "
                className='btn  rounded-full font-primary text-white font-bold h-[50px] px-6 text-lg'
                >
                  Contato
                  <HashLoader className=" ml-4  h-4 w-4  mt-3 " loading={loading} size={20} color="#f2f2f2" />
                  
              </Link>

          </div>
          
        </div>
    </div>
  );
}

export default Navbar