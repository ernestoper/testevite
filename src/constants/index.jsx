// export const navLinksdata = [
//   {
//     _id: 1001,
//     title: "Home",
//     link: "home",
//   },
//   {
//     _id: 1002,
//     title: "Features",
//     link: "features",
//   },
//   {
//     _id: 1003,
//     title: "Projects",
//     link: "projects",
//   },
//   {
//     _id: 1004,
//     title: "Resume",
//     link: "resume",
//   },
//   {
//     _id: 1005,
//     title: "Testimonial",
//     link: "testimonial",
//   },
//   {
//     _id: 1006,
//     title: "Contact",
//     link: "contact",
//   },
// ];

export const navLinksdata= [
  {
    _id: 1001,
    title: "Home",
    //description: 'Measure actions your users take',
    link: "/",
    description: 'Measure actions your users take',
    icon: IconOne,
  },
  {
    _id: 1002,
    title: "Serviços",
    //description: 'Create your own targeted content',
    link: "/servicos",
    description: 'Create your own targeted content',
    icon: IconOne,

  },
  {
    _id: 1003,
    title: 'Quem sou eu',
    //description: 'Keep track of your growth',
    link: "/mim",
    description: 'Keep track of your growth',
    icon: IconOne,
  },
  { _id: 1004,
    title: 'Portfólio',
    //description: 'Keep track of your growth',
    link: "/portfolio",
    description: 'Keep track of your growth',
    icon: IconOne,

  },
  { 
    _id: 1006,
    title: 'clientes',
    //description: 'Keep track of your growth',
    link: "/blog",
    description: 'Keep track ',
    icon: IconOne,

  },

]





function IconOne() {
  return (
    <svg
      width="48"
      height="48"
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="48" height="48" rx="8" fill="#ffffff" />
      <path
        d="M24 11L35.2583 17.5V30.5L24 37L12.7417 30.5V17.5L24 11Z"
        stroke="#FB923C"
        strokeWidth="2"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16.7417 19.8094V28.1906L24 32.3812L31.2584 28.1906V19.8094L24 15.6188L16.7417 19.8094Z"
        stroke="#FDBA74"
        strokeWidth="2"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M20.7417 22.1196V25.882L24 27.7632L27.2584 25.882V22.1196L24 20.2384L20.7417 22.1196Z"
        stroke="#FDBA74"
        strokeWidth="2"
      />
    </svg>
  )
}

function IconTwo() {
  return (
    <svg
      width="48"
      height="48"
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="48" height="48" rx="8" fill="#FFEDD5" />
      <path
        d="M28.0413 20L23.9998 13L19.9585 20M32.0828 27.0001L36.1242 34H28.0415M19.9585 34H11.8755L15.9171 27"
        stroke="#FB923C"
        strokeWidth="2"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M18.804 30H29.1963L24.0001 21L18.804 30Z"
        stroke="#FDBA74"
        strokeWidth="2"
      />
    </svg>
  )
  }

function IconThree() {
  return (
    <svg
      width="48"
      height="48"
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="48" height="48" rx="8" fill="#FFEDD5" />
      <rect x="13" y="32" width="2" height="4" fill="#FDBA74" />
      <rect x="17" y="28" width="2" height="8" fill="#FDBA74" />
      <rect x="21" y="24" width="2" height="12" fill="#FDBA74" />
      <rect x="25" y="20" width="2" height="16" fill="#FDBA74" />
      <rect x="29" y="16" width="2" height="20" fill="#FB923C" />
      <rect x="33" y="12" width="2" height="24" fill="#FB923C" />
    </svg>
  )
}

