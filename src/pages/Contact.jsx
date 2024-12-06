import handShake from "../images/HandShake.webp";

const Contact = () => {
  return (
    <div className="">

      <div className="whiteContainer">

        <div>
          {/* img */}
          <img className="w-32 md:w-48 mx-auto pt-28 md:pt-32" src={handShake} alt="handShake" />
        </div>
        <div className="text-center mt-8">
          {/* content */}
          <p className="text-navyBlue text-center text-2xl md:text-4xl lg:text-6xl font-semibold">Tell me about your next project</p>
          <button className=" bg-cloud text-coal text-xl font-medium px-3 py-1 rounded-full mt-14 md:px-6 md:py-3 md:font-semibold">Contact Me</button>
        </div>
        <div className=" border-b-2 border-gray-300 w-5/6 h-32 md:h-36 mx-auto">
          {/* footer */}

        </div>
        <div className=" ml-auto">

          <div className="flex justify-end mt-12">

            <a className="px-5 md:px-8 py-2 text-navyBlue text-base md:text-lg font-semibold rounded-full hover:bg-cloud" href="">Linkedin</a>
            <a className="px-5 md:px-8 py-2 text-navyBlue text-base md:text-lg font-semibold rounded-full hover:bg-cloud" href="">Behance</a>
            <a className="px-5 md:px-8 py-2 text-navyBlue text-base md:text-lg font-semibold rounded-full hover:bg-cloud" href="">Github</a>
            {/* text-chalk-200 text-lg px-8 py-2 font-medium rounded-full hover:bg-glass hover:text-cloud */}
          </div>

        </div>

      </div>
    </div>
  )
}

export default Contact