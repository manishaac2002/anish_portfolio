import researchIcon from "../images/ResearchIcon.webp"
import productDesignIcon from "../images/ProductDesignIcon.webp"
import uiux from "../images/UIUXIcon.webp";
import developmentIcon from "../images/DevelopmentIcon.webp";
const Services = () => {
  return (
    <div className="blueContainer ">

      <div className=" text-center">
        {/* company quote */}
        <p className="text-chalk-200 text-2xl md:text-3xl pt-3 md:pt-16 ">Empathy is the foundation of exceptional</p>
        <p className="text-chalk-100 text-5xl md:text-8xl pt-2 md:pt-6">Services</p>
      </div >

      <div className="flex justify-center">
        {/* services button */}
        <div className="relative border-b-2 border-gray-300 w-3/4 h-6 md:h-16">
          <button className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 rotate-6 bg-cloud text-coal md:font-semibold px-4 md:px-5 py-2 md:py-3 rounded-full ">
            Services
          </button>
        </div>
      </div>

      <div className="mt-1 ml-6 md:ml-16 md:mt-4 xl:mt-24 md:grid md:gap-8 grid-cols-2 xl:grid xl:grid-cols-4 md:mx-20 ">
        {/* skills */}
        <div className="text-chalk-300 pt-4 ml-5">
          <img className="w-10 md:w-12 lg:w-16 " src={researchIcon} alt="Research icon" />
          <p className="text-2xl font-semibold md:text-3xl lg:text-4xl pt-4 ">Research</p>
          <p className="text-chalk-200 md:text-2xl  mt-3">Research driving meaningful solutions.</p>
        </div>
        <div className="text-chalk-300 pt-4 ml-5">
          <img className="w-10 md:w-12 lg:w-16 " src={productDesignIcon} alt="Product design icon" />
          <p className="text-2xl font-semibold md:text-3xl lg:text-4xl pt-4">Product design</p>
          <p className="text-chalk-200 md:text-2xl  mt-3">Crafting intuitive, precise designs</p>
        </div>
        <div className="text-chalk-300 pt-4 ml-5">
          <img className="w-10 md:w-12 lg:w-16 " src={uiux} alt="UI/UX icon" />
          <p className="text-2xl font-semibold md:text-3xl lg:text-4xl pt-4">UI/UX</p>
          <p className="text-chalk-200 md:text-2xl  mt-3">Designing intuitive, engaging experiences.</p>
        </div>
        <div className="text-chalk-300 pt-4 ml-5">
          <img className="w-10 md:w-12 lg:w-16 " src={developmentIcon} alt="Development icon" />
          <p className="text-2xl font-semibold md:text-3xl lg:text-4xl pt-4">Development</p>
          <p className="text-chalk-200 md:text-2xl  mt-3">Building innovative, high-quality solutions.</p>
        </div>

      </div>

    </div>
  )
}

export default Services


