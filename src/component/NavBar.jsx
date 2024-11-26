const NavBar = () => {
  return (
    <>
      <div className="border border-black h-[500px] md:h-[800px] bg-navyBlue">

        {/* email */}
        <div className="flex">

        <div className="flex m-6 md:m-10 box-border bg-glass h-12 w-56 md:w-64 rounded-3xl">
          
            <p className="text-chalk-200 px-2 md:px-4 py-3">example@gamil.com</p>
           
              <div className="flex ">

            <button className="hidden md:block bg-cloud text-coal px-3 py-1 rounded-full h-8 mt-2">Copy</button>
           
            <button className="md:hidden ">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#363636" className="h-8 w-8 bg-cloud rounded-lg p-1">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 17.25v3.375c0 .621-.504 1.125-1.125 1.125h-9.75a1.125 1.125 0 0 1-1.125-1.125V7.875c0-.621.504-1.125 1.125-1.125H6.75a9.06 9.06 0 0 1 1.5.124m7.5 10.376h3.375c.621 0 1.125-.504 1.125-1.125V11.25c0-4.46-3.243-8.161-7.5-8.876a9.06 9.06 0 0 0-1.5-.124H9.375c-.621 0-1.125.504-1.125 1.125v3.5m7.5 10.375H9.375a1.125 1.125 0 0 1-1.125-1.125v-9.25m12 6.625v-1.875a3.375 3.375 0 0 0-3.375-3.375h-1.5a1.125 1.125 0 0 1-1.125-1.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H9.75" />
              </svg>
            </button>
              </div>
        </div>
        {/* ------------------------------------------------------------------------------------ */}
        {/* menu */}
        <div className="  flex ml-auto mt-5 md:mt-10">
        
        <p className="text-chalk-200">test</p>
        <p className="text-chalk-200">test</p>
        <p className="text-chalk-200">test</p>
        <p className="text-chalk-200">test</p>

        </div>
        </div>

        {/* image */}
        <div>
          <div>
            {/*  */}
          </div>
          <div>
            {/* about content */}
          </div>
        </div>
      </div>


    </>
  )
}

export default NavBar



