function ServiceCard({data,index}){
    // onMouseEnter={()=>{
    //     const title_element = document.getElementById(index)
    //     title_element.classList.add('text-orange-500')
    //     title_element.classList.remove('text-gray-900')
    // }} 
    // onMouseLeave={()=>{
    //     const title_element = document.getElementById(index)
    //     title_element.classList.remove('text-orange-500')
    //     title_element.classList.add('text-gray-900')
    // }} 
    return(
        <div

        className=" online-flex p-0 h-80 border-2 border-pretoneon lg:h-[200pm] hover:-translate-y-1 transition duration-300 ease-in-out ">
            <div  className="w-full ">
                <img src={data.img} className='w-20 h-20'/>
                <h2 className="text-xl font-semibold text-gray-900 pt-0">{data.title}</h2>
                
            </div>
            <div className=" p-0">
            <p className="text-xl font-regular text-gray-500 pt-0">{data.minidescription}</p>
                <span key={index} className="items-end text-xl font-semibold text-gray-900 pt-0">{data.description}</span>
            </div>
        </div>
    )
}
export default ServiceCard