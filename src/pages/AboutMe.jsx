import NavBar from "../component/NavBar"
import AnishBalaSachinPic from "../images/AnishBalaSachin.webp"


const AboutMe = () => {
    return (
        <>
            <div className="blueContainer">

                <NavBar />

                {/* image */}
                <div className="my-24 mx-auto">

                    <div className="w-56 md:w-96 lg:w-72 mx-auto ">
                        <img className="" src={AnishBalaSachinPic} alt="Anish Bala Sachin" />
                    </div>

                    <div className="text-center my-10">
                        {/* about content */}
                        <p className="text-chalk-200 text-xl md:text-4xl">
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

export default AboutMe