import mobileApp from '../images/MobileApp.webp'
import extension from '../images/Extension.webp'

const Project = () => {
  return (
    <div className="blueContainerXl">

      {/* company quote */}
      <div className=" text-center">
        <p className="text-chalk-200 text-2xl md:text-3xl pt-10 md:pt-16 ">Design Develop Deliver in </p>
        <p className="text-chalk-100 text-5xl md:text-8xl pt-10 md:pt-6">My Project Journey</p>
      </div >

      {/* software project content */}
      <p className="text-chalk-200 ml-10 lg:ml-20 text-2xl lg:text-3xl mt-5 md:mt-20">
        <span className="text-chalk-100 text-4xl lg:text-6xl">Software
        </span> that Powers Ideas and Drives Change.
      </p>
      <div className='mt-14 md:mt-24 lg:mt-32 mx-6 lg:mx-40 md:grid md:grid-cols-2 gap-12'>
        <div className=''>
          <img className="h-32 md:h-56 xl:h-80 lg:ml-16 xl:ml-24" src={mobileApp} alt="mobileApp" />
          <p className='text-chalk-200 pt-6 text-sm md:text-lg xl:text-2xl text-justify md:pt-6 lg:ml-16 xl:ml-24 lg:mr-28'>
            Developed <span>Vapor</span> a secure chat application designed with a strong focus on privacy and data protection.
            Integrated advanced encryption features to ensure secure communication and safeguard user data.</p>
        </div>
        <div className='mt-10 md:mt-0'>
          <img className="h-32 md:h-56 xl:h-80 lg:ml-16 xl:ml-24" src={extension} alt="mobileApp" />
          <p className='text-chalk-200 pt-6 text-sm md:text-lg xl:text-2xl text-justify md:pt-6 lg:ml-16 xl:ml-24 lg:mr-28'>
            Created a Chrome extension, <span>Keyword Redirector</span> to  streamline browsing with keyword-based redirects to predefined URLs.
            It features a Tailwind CSS interface for customization and syncs settings across devices.</p>
        </div>
      </div>

      {/* behance project content */}
      <p className="text-chalk-200 ml-10 lg:ml-20 text-2xl lg:text-3xl mt-10 md:mt-20">
        Creative Excellence Captured on <span className="text-chalk-100 text-4xl lg:text-6xl">Behance.
        </span>
      </p>
      <div className='mt-10 md:mt-24 mx-16 lg:mx-20 md:grid grid-cols-2 md:gap-12 lg:grid lg:grid-cols-3 lg:gap-4  '>
        <div className='mt-6 md:mt-0 '>
          <iframe className='lg:w-[500px] lg:h-[400px]' src="https://www.behance.net/embed/project/144422749?ilo0=1"  allowfullscreen allow="clipboard-write" ></iframe>
        </div>
        <div className='mt-6 md:mt-0 '>
          <iframe className='lg:w-[500px] lg:h-[400px]' src="https://www.behance.net/embed/project/147368377?ilo0=1"  allowfullscreen allow="clipboard-write" ></iframe>
        </div>
        <div className='mt-6 md:mt-0 md:ml-44 lg:ml-0'>
          <iframe className='lg:w-[500px] lg:h-[400px]' src="https://www.behance.net/embed/project/146993251?ilo0=1"  allowfullscreen allow="clipboard-write" ></iframe>
        </div>
      </div>

    </div>
  )
}

export default Project

