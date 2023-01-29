import React, { useState } from 'react'
import { Link } from "react-scroll";
import { FiMenu } from "react-icons/fi";
import { MdClose } from "react-icons/md";
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";
// import {logo} from "../../assets/index"
import logo from '../../assets/img/portfolio/LOGOCORES/LOGOBRANCA.png';
import { navLinksdata } from '../../constants';
import HashLoader from "react-spinners/HashLoader";

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
    <div className="w-full h-24 sticky  top-0 z-50 bg-pretoneon mx-auto flex justify-between items-center font-sm border-b-[1px] border-b-gray-600">
      <div className='lg:ml-8 '>
        <img src={logo} alt="logo " className='lg:h-32 lg:w-44 h-28 w-36' />
      </div>
      <div className='bg-bege rounded-full flex-shrink-0  flex-wrap items-center justify-between'>
        <ul className="hidden mdl:inline-flex ">
          {navLinksdata.map(({ _id, title, link }) => (
            <li
              // className="inline-flex text-sm lg:text:lg text-blue-500 tracking-wide cursor-pointer hover:bg-laranjaneon  duration-300"
              className=''
              key={_id}
            >
              <Link
                className='px-2 h-12  rounded-full items-center text-lg inline-flex font-semibold leading-6 text-gray-900 border-b-2 border-transparent hover:bg-orange-500 transition duration-300 ease-in-out '
                activeClass="active"
                to={link}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                {title}
              </Link>
            </li>
          ))}
        </ul>

          

        <span
          onClick={() => setShowMenu(!showMenu)}
          className="text-xl mdl:hidden bg-black w-10 h-10 inline-flex items-center justify-center rounded-full text-white  cursor-pointer"
        >
          <FiMenu className='mr-6' />
        </span>
        {showMenu && (
          <div className="w-[60%]  overflow-scroll absolute top-0 left-0 bg-gray-900 p-4 scrollbar-hide">
            <div className="flex flex-col gap-8 py-2 relative">
              <div className='ml-5' >
                <img className="w-28 " src={logo} alt="logo"/>

              </div>
              <ul className="flex flex-col gap-4">
                {navLinksdata.map((item) => (
                  <li
                    key={item._id}
                    className="text-base font-normal text-gray-400 tracking-wide cursor-pointer hover:text-designColor duration-300"
                  >
                    <Link
                      onClick={() => setShowMenu(false)}
                      activeClass="active"
                      to={item.link}
                      spy={true}
                      smooth={true}
                      offset={-70}
                      duration={500}
                    >
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
              <div className="flex flex-col gap-4">
                <h2 className="text-base uppercase font-titleFont mb-1 text-white">
                  Find me in
                </h2>
                <div className="flex gap-6">
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
                className="absolute top-6 right-4 text-white hover:text-designColor duration-300 text-2xl cursor-pointer"
              >
                <MdClose className='' />
              </span>
            </div>
          </div>
        )}
      </div>
      <div className='hidden mr-8  rounded-full hover:bg-orange-600 mdl:inline-flex items-center gap-6 lg:gap-10  text-white' >
          <div>
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
  );
}

export default Navbar