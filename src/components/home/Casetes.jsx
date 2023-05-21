import { Link } from "react-router-dom"

function Casetes({data,index}){

    return(
        <Link 
        to='/portfolio'
        onMouseEnter={()=>{
            const title_element = document.getElementById(index)
            title_element.classList.add('text-orange-500')
            const img = document.getElementById(data.id)
            img.classList.add('object-scale-down')
        }} 
        onMouseLeave={()=>{
            const title_element = document.getElementById(index)
            title_element.classList.remove('text-orange-500')
            const img = document.getElementById(data.id)
            img.classList.remove('object-scale-down')
        }} 
        
        className="flex flex-col overflow-hidden  rounded-lg shadow-xl border-2 border-roxosombra shadow-roxosombra">
                <div className="flex-shrink-0">
                  <img id={data.id} className="lg:h-96 lg:w-full h-40  transition duration-400 ease-in-out object-cover" src={data.imageUrl} alt="" />
                </div>
                <div className="flex flex-1 flex-col justify-between bg-pretoneon  lg:p-6">
                  <div className="flex-1">
                    {/* <p className="text-xl font-medium text-white">
                      <a href={data.category.href} className="hover:underline">
                        {data.category.name}
                      </a>
                    </p> */}
                    <a href={data.href} className="mt-2 block">
                      <p id={index} className="lg:text-2xl pt-4 pb-6 text-xl font-semibold transition duration-400 ease-in-out text-white">{data.title}</p>
                      <p className="lg:mt-3 lg:text-xl text-md lg:space-y-2 leading-12 text-white">{data.description}</p>
                    </a>
                  </div>
                </div>
              </Link>
    )
}

export default Casetes