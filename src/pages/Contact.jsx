import handShake from "../images/HandShake.webp";

const Contact = () => {
  return (
    <div >

    <div className="whiteContainer">
        
        <div>
            {/* img */}
            <img className="w-48 mx-auto pt-32" src={handShake} alt="handShake" />
        </div>
        <div className="text-center mt-8">
            {/* content */}
            <p className="text-navyBlue text-center  text-6xl font-semibold">Tell me about your next project</p>
            <button className=" bg-cloud text-coal text-xl font-medium px-3 py-1 rounded-full mt-14 md:px-6 md:py-3 md:font-semibold">Contact Me</button>
        </div>
        <div>
            {/* footer */}
        </div>
    </div>
    </div>
  )
}

export default Contact