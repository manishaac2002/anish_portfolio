const NavBar = () => {
  return (
    <>
      <div className=" bg-navyBlue rounded-b-4xl">

        <div className="flex">

          <div className="flex m-10 box-border bg-glass h-16 w-72 px-3 py-3 rounded-full ">
            <p className="text-chalk-100 px-2 py-2">example@email.com</p>

            <button className="bg-cloud text-coal ml-2 px-6  rounded-3xl ">
              Copy
            </button>
          </div>

          <div className="flex ml-auto px-10 py-3">
            <p className="text-chalk-200 font-medium px-8 py-4 mt-8 h-16 rounded-full hover:bg-glass hover:text-cloud">
              Services</p>
            <p className="text-chalk-200 font-medium px-8 py-4 mt-8 h-16 rounded-full hover:bg-glass hover:text-cloud">
              Research</p>
            <p className="text-chalk-200 font-medium px-8 py-4 mt-8 h-16 rounded-full hover:bg-glass hover:text-cloud">
              Project</p>
            <p className="text-chalk-200 font-medium px-8 py-4 mt-8 h-16 rounded-full hover:bg-glass hover:text-cloud">
              Blog</p>

          </div >

        </div>

        <div className="mx-auto my-24 p-4 ">
          
          <div className="w-72 h-72 rounded-full mx-auto ">
            <img className="" src="./AnishBalaSachin.webp" alt="" />
          </div>
          
          <div className="text-center ">
            <p className="text-chalk-200 text-4xl flex justify-center text-center">
              Transforming ideas into impactful<br />
              products, brands, and digital<br />
              experiences.
            </p>
            <button className="bg-cloud text-coal px-6 py-3 rounded-3xl mt-8 mb-36">
              Some text
            </button>
          </div>

        </div>

      </div>
      
    </>
  )
}

export default NavBar


