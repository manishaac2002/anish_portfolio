import logo from "../images/logo.webp"
import logoSm from "../images/Logo-sm.webp"

const Company = () => {
  return (
    <div className="bg-navyBlue">

    <div className="whiteContainer font-sans">
        <div className=" text-center">
            {/* company quote */}
            <p className="text-chalk-400 text-2xl md:text-3xl mt-16 md:mt-24">From Code to Collaboration</p>
            <p className="text-coal text-5xl md:text-8xl mt-5">My Career Story</p>
        </div>
        <div className="flex justify-center mt-12 md:mt-24 sm:grid-cols-2 sm:gap-12 md:grid-cols-4 md:gap-16 lg:gap-56">
            {/* company image */}
            <img className=" hidden md:block md:px-14 lg:px-20 xl:px-48" src={logo} alt="logo" />
            <img className="md:hidden px-8 " src={logoSm} alt="logo" />
        </div>
    </div>
    </div>
  )
}

export default Company