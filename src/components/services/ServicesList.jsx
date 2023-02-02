import ServiceCard from "./ServiceCard"


function ServicesList({posts,section_title}){
    return(
        <>

<div className="bg-green-100 py-4 mx-auto pt-8 pb-8 bg-gradient-to-t from-orange-900 via-laranjaneon to-orange-500  ">
    <h3 className="text-2xl tracking-widest text-green-600 text-center">FEATURES</h3>
    <h1 className="mt-8 text-center text-5xl text-green-600 font-bold ">Our Features & Services.</h1>
    <div className="grid max-w-xl  lg:max-w-none lg:grid-cols-3 ">
        {posts.map((post,index)=>(
          <div key={post._id} className="md:flex md:justify-center md:space-x-8 md:px-14 ">
             <div className="shadow-lg shadow-black  mt-16 py-4 px-4 bg-whit w-96 bg-white rounded-xl  hover:shadow-2xl transform hover:scale-110 transition duration-500 mx-auto md:mx-0">
               <div  className="w-sm">
                 <img className="w-96" src={post.img} alt="" />
                   <div className="mt-4 text-blue-600 text-center ">
                     <h1 className="text-xl text-center font-bold">{post.title}</h1>
                     <h1 className="mt-4 text-left text-gray-600">{post.description}</h1>
                     {/* <p className="mt-8 mb-4 py-2 px-14 text-left text-black tracking-widest  transition duration-200">{post.description}</p> */}
                   </div>
                </div>
              </div>
          </div>
          ))}
     </div>
     </div>
</>
    )
}
export default ServicesList