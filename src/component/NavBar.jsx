const NavBar = () => {
  return (
    <>
      <div className=" bg-navyBlue min-h-screen rounded-b-4xl">

        <div className="flex">
            {/* email address */}
          <div className="flex m-10 box-border bg-glass h-16 w-72 px-3 py-3 rounded-full sm:p-2">
            <p className="text-chalk-100 px-2 py-2">example@email.com</p>

            <button className="bg-cloud text-coal ml-2 px-6  rounded-3xl ">
              Copy
            </button>
          </div>

            {/* nav bar */}
          <div className="flex  ml-auto px-10 py-3 ">
            <p className="text-chalk-200 font-medium px-8 py-4 mt-8 h-16 rounded-full hover:bg-glass hover:text-cloud sm:px-5">
              Services</p>
            <p className="text-chalk-200 font-medium px-8 py-4 mt-8 h-16 rounded-full hover:bg-glass hover:text-cloud sm:px-5">
              Research</p>
            <p className="text-chalk-200 font-medium px-8 py-4 mt-8 h-16 rounded-full hover:bg-glass hover:text-cloud sm:px-5">
              Project</p>
            <p className="text-chalk-200 font-medium px-8 py-4 mt-8 h-16 rounded-full hover:bg-glass hover:text-cloud sm:px-5">
              Blog</p>

          </div >

        </div>

        <div className="mx-auto my-24 p-4 ">
          {/* image */}
          <div className="w-72 h-72 rounded-full mx-auto ">
            <img className="" src="./AnishBalaSachin.webp" alt="" />
          </div>
          {/* about content */}
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



