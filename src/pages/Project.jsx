import mobileApp from '../images/MobileApp.webp'
import extension from '../images/Extension.webp'

const Project = () => {
  return (
    <div className="blueContainer">
      <div className=" text-center">
        {/* company quote */}
        <p className="text-chalk-200 text-2xl md:text-3xl pt-5 md:pt-16 ">Design Develop Deliver in </p>
        <p className="text-chalk-100 text-5xl md:text-8xl pt-3 md:pt-6">My Project Journey</p>
      </div >

      <div className='mt-2 md:mt-6 lg:mt-16 mx-6 lg:mx-40 md:grid md:grid-cols-2 gap-12  '>
        <div className=''>
          <img className="h-32 md:h-56 xl:h-80" src={mobileApp} alt="mobileApp" />
          <p className='text-chalk-200 pt-3 text-sm md:text-lg xl:text-2xl text-justify md:pt-6'>
          Developed <span>Vapor</span> a secure chat application designed with a strong focus on privacy and data protection. 
          Integrated advanced encryption features to ensure secure communication and safeguard user data.</p>
        </div>
        <div className='mt-2 md:mt-0'>
          <img className="h-32 md:h-56 xl:h-80" src={extension} alt="mobileApp" />
          <p className='text-chalk-200 pt-3 text-sm md:text-lg xl:text-2xl md:pt-6'>
            Created a Chrome extension, <span>Keyword Redirector</span> to  streamline browsing with keyword-based redirects to predefined URLs. 
            It features a Tailwind CSS interface for customization and syncs settings across devices.</p>
        </div>
      </div>

    </div>
  )
}

export default Project