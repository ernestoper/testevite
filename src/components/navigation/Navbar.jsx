// import {connect} from 'react-redux'
// import { Popover, Transition } from '@headlessui/react';
// import { ChevronDownIcon } from '@heroicons/react/20/solid'
// import {useState, Fragment, useEffect } from 'react'
// import {NavLink,Link} from 'react-router-dom'
// import loading_dots from '../../assets/img/loading-dots.gif'
// import logo_boomslag from '../../assets/img/boomslag-black.png'
// import DotLoader from 'react-spinners/DotLoader'
// import logo from "../../assets/img/logo.png";
// const solutions = [
//     {
//       name: 'casos',
//       description: 'Measure actions your users take',
//       href: '/casos',
//       icon: IconOne,
//     },
//     {
//       name: 'Servicios',
//       description: 'Create your own targeted content',
//       href: '/servicios',
//       icon: IconTwo,
//     },
//     {
//       name: 'Nosotros',
//       description: 'Keep track of your growth',
//       href: '/nosotros',
//       icon: IconThree,
//     },
//     {
//       name: 'Carreras',
//       description: 'Keep track of your growth',
//       href: '/carreras',
//       icon: IconThree,
//     },
//     {
//       name: 'Blog',
//       description: 'Keep track of your growth',
//       href: '/blog',
//       icon: IconThree,
//     },
//     {
//       name: 'Contacto',
//       description: 'Keep track of your growth',
//       href: '/contacto',
//       icon: IconThree,
//     },
//   ]

// function Navbar(){

//     const [loading,setLoading]=useState(true)

//     window.onscroll = function() {scrollFunction()}

//     function scrollFunction() {
//         if(document.getElementById('navbar')){
//             if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
//                 document.getElementById('navbar').classList.add('shadow-navbar');
//                 document.getElementById('navbar').classList.add('bg-white');
//             }else{
//                 document.getElementById('navbar').classList.remove('shadow-navbar');
//                 document.getElementById('navbar').classList.remove('bg-white');
//             }
//         }
//     }

//     const [open, setOpen] = useState(false)

//     return(
//         <nav data-scroll data-scroll-id="hey" id='navbar' className='lg:w-5/6 w-full md:ml-40   rounded-full pt-3   py-6 lg:top-12 top-4 transition duration-500 ease-in-out z-40 fixed bg-verdecatarro border-2 border-pretoneon'>
//             <div className="px-5 xl:px-4 ">
//                 <div className="ml-5 mt-2 hidden lg:flex flex-wrap items-center justify-between  sm:flex-nowrap md:px-4 px-4">
//                     <Link to='/' className="ml-2 mt-0">
//                     <img
//                         src={logo}
//                         alt=''
//                         width={40}
//                         height={40}
//                         className=""
//                     />
//                     </Link>

//                     <div className="inline-flex bg-verdecatarro border-2 rounded-full border-pretoneon navbar">
//                           <Link to='/casos' className="px-6 py-4 mt-2 text-base font-semibold text-gray-900     md:mt-0 hover:text-white focus:text-gray-900 hover:bg-pretoneon rounded-full  focus:bg-gray-200 focus:outline-none focus:shadow-outline">Serviços</Link>
//                           <Link to='/servicios' className="px-6 py-4 mt-2 text-base font-semibold text-gray-900     md:mt-0 hover:text-white focus:text-gray-900 hover:bg-pretoneon rounded-full  focus:bg-gray-200 focus:outline-none focus:shadow-outline">Projetos</Link>
//                           <Link to='/nosotros' className="px-6 py-4 mt-2 text-base font-semibold text-gray-900     md:mt-0 hover:text-white focus:text-gray-900 hover:bg-pretoneon rounded-full  focus:bg-gray-200 focus:outline-none focus:shadow-outline">Sobre mim</Link>
//                           <Link to='/carreras' className="px-6 py-4 mt-2 text-base font-semibold text-gray-900     md:mt-0 hover:text-white focus:text-gray-900 hover:bg-pretoneon rounded-full  focus:bg-gray-200 focus:outline-none focus:shadow-outline">Clientes</Link>
                          

//                     </div>
//                     <div className='lg:flex hidden items-center    '>
//                     <Link
//                         to="/contacto"
//                         className=" inline-flex ml-12 items-center   rounded-full  border-pretoneon  px-6 py-4 text-base font-semibold text-pretoneon shadow-sm hover:bg-azulbebe border-2 transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
//                     >
//                         Contato
//                         <DotLoader className="ml-3 -mr-1 h-5 w-5" loading={loading} size={20} color="#000000" />
//                     </Link>

//                     </div>
//                 </div>
//                 <div className="ml-0 mt-0 lg:hidden flex flex-wrap items-center justify-between sm:flex-nowrap md:px-4 px-0">
//                     <Link to='/' className="ml-4 mt-3">
//                     <img
//                         src={logo}
//                         width={30}
//                         alt=''
//                         height={30}
//                         className=""
//                     />
//                     </Link>
//                     <div className="ml-4 mt-2 flex-shrink-0">
//                       <Popover className="relative">
//                           {({ open }) => (
//                           <>
//                               <Popover.Button
//                               className={`
//                                   ${open ? '' : 'text-opacity-90'}
//                                   focus:ring-none focus:outline-none`}
//                               >
//                               {
//                                   open ?
//                                   <i  className='bx bx-x text-4xl mt-1'></i>
//                                   :
//                                   <i  className='bx bx-menu text-4xl mt-1'></i>
//                               }
//                               </Popover.Button>

//                               <Transition
//                               as={Fragment}
//                               enter="transition ease-out duration-200"
//                               enterFrom="opacity-0 translate-y-1"
//                               enterTo="opacity-100 translate-y-0"
//                               leave="transition ease-in duration-150"
//                               leaveFrom="opacity-100 translate-y-0"
//                               leaveTo="opacity-0 translate-y-1"
//                               >
//                               <Popover.Panel className="absolute -left-32 z-10 mt-3 w-screen max-w-sm -translate-x-1/2 transform px-4 sm:px-0 lg:max-w-3xl">
//                                   <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
//                                   <div className="relative grid gap-8 bg-gray-200 p-7 lg:grid-cols-2">
//                                       {solutions.map((item) => (
//                                       <Link
//                                           key={item.name}
//                                           to={item.href}
//                                           className="-m-3 flex items-center rounded-lg p-2 transition duration-150 ease-in-out hover:bg-gray-50 focus:outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-50"
//                                       >
//                                           <div className="flex h-10 w-10 shrink-0 items-center justify-center text-white sm:h-12 sm:w-12">
//                                           <item.icon aria-hidden="true" />
//                                           </div>
//                                           <div className="ml-4">
//                                           <p className="text-sm font-medium text-gray-900">
//                                               {item.name}
//                                           </p>
//                                           <p className="text-sm text-gray-500">
//                                               {item.description}
//                                           </p>
//                                           </div>
//                                       </Link>
//                                       ))}
//                                   </div>
//                                   <div className="bg-gray-50 p-4">
//                                       <a
//                                       href="##"
//                                       className="flow-root rounded-md px-2 py-2 transition duration-150 ease-in-out hover:bg-gray-100 focus:outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-50"
//                                       >
//                                       <span className="flex items-center">
//                                           <span className="text-sm font-medium text-gray-900">
//                                           Documentation
//                                           </span>
//                                       </span>
//                                       <span className="block text-sm text-gray-500">
//                                           Start integrating products and tools
//                                       </span>
//                                       </a>
//                                   </div>
//                                   </div>
//                               </Popover.Panel>
//                               </Transition>
//                           </>
//                           )}
//                       </Popover>
//                     </div>
//                 </div>
//             </div>
//         </nav>
//     )
// }

// // const mapStateToProps=state=>({

// // })

// // export default connect(mapStateToProps, {

// // }) (Navbar)

// export default Navbar

// function IconOne() {
//     return (
//       <svg
//         width="48"
//         height="48"
//         viewBox="0 0 48 48"
//         fill="none"
//         xmlns="http://www.w3.org/2000/svg"
//       >
//         <rect width="48" height="48" rx="8" fill="#FFEDD5" />
//         <path
//           d="M24 11L35.2583 17.5V30.5L24 37L12.7417 30.5V17.5L24 11Z"
//           stroke="#FB923C"
//           strokeWidth="2"
//         />
//         <path
//           fillRule="evenodd"
//           clipRule="evenodd"
//           d="M16.7417 19.8094V28.1906L24 32.3812L31.2584 28.1906V19.8094L24 15.6188L16.7417 19.8094Z"
//           stroke="#FDBA74"
//           strokeWidth="2"
//         />
//         <path
//           fillRule="evenodd"
//           clipRule="evenodd"
//           d="M20.7417 22.1196V25.882L24 27.7632L27.2584 25.882V22.1196L24 20.2384L20.7417 22.1196Z"
//           stroke="#FDBA74"
//           strokeWidth="2"
//         />
//       </svg>
//     )
//   }
  
//   function IconTwo() {
//     return (
//       <svg
//         width="48"
//         height="48"
//         viewBox="0 0 48 48"
//         fill="none"
//         xmlns="http://www.w3.org/2000/svg"
//       >
//         <rect width="48" height="48" rx="8" fill="#FFEDD5" />
//         <path
//           d="M28.0413 20L23.9998 13L19.9585 20M32.0828 27.0001L36.1242 34H28.0415M19.9585 34H11.8755L15.9171 27"
//           stroke="#FB923C"
//           strokeWidth="2"
//         />
//         <path
//           fillRule="evenodd"
//           clipRule="evenodd"
//           d="M18.804 30H29.1963L24.0001 21L18.804 30Z"
//           stroke="#FDBA74"
//           strokeWidth="2"
//         />
//       </svg>
//     )
//   }
  
//   function IconThree() {
//     return (
//       <svg
//         width="48"
//         height="48"
//         viewBox="0 0 48 48"
//         fill="none"
//         xmlns="http://www.w3.org/2000/svg"
//       >
//         <rect width="48" height="48" rx="8" fill="#FFEDD5" />
//         <rect x="13" y="32" width="2" height="4" fill="#FDBA74" />
//         <rect x="17" y="28" width="2" height="8" fill="#FDBA74" />
//         <rect x="21" y="24" width="2" height="12" fill="#FDBA74" />
//         <rect x="25" y="20" width="2" height="16" fill="#FDBA74" />
//         <rect x="29" y="16" width="2" height="20" fill="#FB923C" />
//         <rect x="33" y="12" width="2" height="24" fill="#FB923C" />
//       </svg>
//     )
//   }
import { Fragment, useState } from 'react'
import { Menu, Popover, Transition } from '@headlessui/react'
import { SearchIcon } from '@heroicons/react/solid'
import { BellIcon, MenuIcon, XIcon } from '@heroicons/react/outline'
import { NavLink } from 'react-router-dom'


const navigation = [
    { name: 'Blog', href: '/blog', current: true },
    { name: 'About', href: '/about', current: false },
    { name: 'Contact', href: '/contact', current: false },
]

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

function Navbar(){

    // SEARCH
    const [effectSearch, setEffectSearch] = useState(false);
    const [term,setTerm]=useState('')

    const handleChange=e=>{
      setTerm(e.target.value)
    }

    const onSubmit= e =>{
      e.preventDefault()
      setTimeout(() => window.location.href=('/search/'+term), 0.2);
      setTerm('')
    }


    return(
        <>
      {/* When the mobile menu is open, add `overflow-hidden` to the `body` element to prevent double scrollbars */}
      <Popover
        as="header"
        className={({ open }) =>
          classNames(
            open ? 'fixed inset-0 z-40 overflow-y-auto' : 'rounded-full',
            'bg-verdecatarro   shadow-sm lg:static lg:overflow-y-visible'
          )
        }
      >
        {({ open }) => (
          <>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-2 border-pretoneon rounded-full">
              <div className="relative flex justify-between xl:grid xl:grid-cols-12 lg:gap-8">
                <div className="flex md:absolute md:left-0 md:inset-y-0 lg:static xl:col-span-2">
                  <div className="flex-shrink-0 flex items-center">
                    <NavLink to="/">
                      <img
                        className="block h-8 w-auto"
                        src="https://tailwindui.com/img/logos/workflow-mark.svg?color=indigo&shade=600"
                        alt="Logo"
                      />
                    </NavLink>
                  </div>
                </div>

                <div className="min-w-0 flex-1 md:px-8 lg:px-0 xl:col-span-6">
                  <div className="flex items-center px-6 py-4 md:max-w-3xl md:mx-auto lg:max-w-none lg:mx-0 xl:px-0">
                    <form onSubmit={e=>onSubmit(e)} className="w-full">
                      <label htmlFor="search" className="sr-only">
                        Search
                      </label>
                      <div className="relative">
                        <button
                        type="submit"
                        className="pointer-events-none absolute inset-y-0 left-0 pl-3 flex items-center">
                          <SearchIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                        </button>
                        <input
                          id="search"
                          name="search"
                          required
                          onChange={(e)=>{handleChange(e)}}
                          className="block w-full bg-white border border-gray-300 rounded-md py-2 pl-10 pr-3 text-sm placeholder-gray-500 focus:outline-none focus:text-gray-900 focus:placeholder-gray-400 focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                          placeholder="Search"
                          type="search"
                        />
                      </div>
                    </form>
                  </div>
                </div>

                <div className="flex items-center md:absolute md:right-0 md:inset-y-0 lg:hidden ">
                  {/* Mobile menu button */}
                  <Popover.Button className="-mx-2 rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                    <span className="sr-only">Open menu</span>
                    {open ? (
                      <XIcon className="block h-6 w-6" aria-hidden="true" />
                    ) : (
                      <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                    )}
                  </Popover.Button>
                </div>

                <div className="hidden lg:flex lg:items-center lg:justify-end xl:col-span-4">
                    <NavLink to="/blog" className="text-lg dark:hover:text-white hover:text-gray-900 text-gray-600 dark:text-dark-txt text-md font-semibold">
                        Blog
                    </NavLink>
                    <NavLink to="/about" className="mx-4 text-lg dark:hover:text-white hover:text-gray-900 text-gray-600 dark:text-dark-txt text-md font-semibold">
                        About
                    </NavLink>
                    <NavLink to="/contact" className="text-lg dark:hover:text-white hover:text-gray-900 text-gray-600 dark:text-dark-txt text-md font-semibold">
                        Contact
                    </NavLink>
                </div>
              </div>
            </div>

            <Popover.Panel as="nav" className="lg:hidden" aria-label="Global">
              <div className="max-w-3xl mx-auto px-2 pt-2 pb-3 space-y-1 sm:px-4">
                {navigation.map((item) => (
                  <NavLink
                    key={item.name}
                    to={item.href}
                    aria-current={item.current ? 'page' : undefined}
                    className={classNames(
                      item.current ? 'bg-gray-100 text-gray-900' : 'hover:bg-gray-50',
                      'block rounded-md py-2 px-3 text-base font-medium'
                    )}
                  >
                    {item.name}
                  </NavLink>
                ))}
              </div>
            </Popover.Panel>
          </>
        )}
      </Popover>
    </>
    )
}

export default Navbar