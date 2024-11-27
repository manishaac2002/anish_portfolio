const NavBar = () => {
  return (
    <>
      <div className="h-[600px] md:h-[800px] bg-navyBlue">

        <div className="flex ">

          {/* email */}
          <div className="flex m-6 md:m-10 box-border bg-glass h-12 w-56 md:w-64 rounded-3xl">

            <p className="text-chalk-200 px-2 md:px-4 py-3">example@gamil.com</p>
            <div className="flex ">
              <button className="hidden md:block bg-cloud text-coal px-3 py-1 rounded-full h-8 mt-2">Copy</button>
              <button className="md:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#363636" className="h-8 w-8 bg-cloud rounded-lg p-1">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 17.25v3.375c0 .621-.504 1.125-1.125 1.125h-9.75a1.125 1.125 0 0 1-1.125-1.125V7.875c0-.621.504-1.125 1.125-1.125H6.75a9.06 9.06 0 0 1 1.5.124m7.5 10.376h3.375c.621 0 1.125-.504 1.125-1.125V11.25c0-4.46-3.243-8.161-7.5-8.876a9.06 9.06 0 0 0-1.5-.124H9.375c-.621 0-1.125.504-1.125 1.125v3.5m7.5 10.375H9.375a1.125 1.125 0 0 1-1.125-1.125v-9.25m12 6.625v-1.875a3.375 3.375 0 0 0-3.375-3.375h-1.5a1.125 1.125 0 0 1-1.125-1.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H9.75" />
                </svg>
              </button>
            </div>

          </div>

          {/* menu should change tag while click */}
          <div className="hidden md:block ml-auto">

            <div className="flex mt-10">

              <p className="text-chalk-200 text-lg px-8 py-2 font-medium rounded-full hover:bg-glass hover:text-cloud ">
                Services</p>
              <p className="text-chalk-200 text-lg px-8 py-2 font-medium rounded-full hover:bg-glass hover:text-cloud ">
                Research</p>
              <p className="text-chalk-200 text-lg px-8 py-2 font-medium rounded-full hover:bg-glass hover:text-cloud ">
                Project</p>
              <p className="text-chalk-200 text-lg px-8 py-2 font-medium rounded-full hover:bg-glass hover:text-cloud ">
                Blog</p>

            </div>

          </div>

        </div>

        {/* image */}
        <div className="my-24 mx-auto">

          <div className="w-56 md:w-96 mx-auto ">
            <img className="" src="./AnishBalaSachin.webp" alt="Anish Bala Sachin" />
          </div>

          <div className="text-center my-10">
            {/* about content */}
            <p className="text-chalk-200 text-xl md:text-4xl ">
              Transforming ideas into impactful<br />
              products, brands, and digital<br />
              experiences.
            </p>
            <button className=" bg-cloud text-coal font-medium px-3 py-1 rounded-full mt-6 md:px-4 md:py-3 md:font-semibold">Shots</button>
          </div>
        </div>

      </div>


    </>
  )
}

export default NavBar



