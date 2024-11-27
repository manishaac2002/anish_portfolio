import Alpha from "../images/Alpha.webp"
import CartRabbit from "../images/CartRabbit.webp"
import Vichithram from "../images/Vichithram.webp"
import Atre from "../images/Atre.webp"
const Company = () => {
  return (
    <div className="whiteContainerSm font-sans">
        <div className="mt-16 md:mt-24 text-center">
            {/* company quote */}
            <p className="text-chalk-400 text-2xl md:text-3xl ">From Code to Collaboration</p>
            <p className="text-coal text-5xl md:text-8xl mt-5">My Career Story</p>
        </div>
        <div className="flex flex-wrap justify-center mt-24 sm:grid-cols-2 sm:gap-12 md:grid-cols-4 md:gap-16 lg:gap-56">
            {/* company image */}
            <img className="" src={Alpha} alt="Alpha" />
            <img className="" src={CartRabbit} alt="CartRabbit" />
            <img className="" src={Vichithram} alt="Vichithram" />
            <img className="" src={Atre} alt="Atre" />
        </div>
    </div>
  )
}

export default Company