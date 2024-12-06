import iconBlog from '../images/IconBlog.webp'
const Blog = () => {
    return (
        <div className="bg-navyBlue">

            <div className="whiteContainer font-sans">
                <div className=" text-center">
                    {/* company quote */}
                    <p className="text-chalk-400 text-2xl md:text-3xl mt-16 md:mt-20">Every   <span className="text-coal text-5xl md:text-8xl">Blog </span>is a story waiting to be told.</p>

                </div>
                <div className="border border-black gap-12 mt-36 lg:mt-32 mx-6 lg:mx-40 md:grid md:grid-cols-3 md:px-32 ">
                    {/* blog posts */}
                    <div>
                        <img className='md:h-56 ' src={iconBlog} alt="iconBlog" /> 
                        <p className='text-sm md:text-lg xl:text-2xl'>The Hamburger Menu: A Compact Icon That </p>
                        <p className='text-justify text-sm md:text-lg xl:text-2xl'>The hamburger menu, designed by Norm Cox in 1981, is a timeless icon that saves space and simplifies navigation.</p>
                    </div>
                    <div>
                        <img className='md:h-56 ' src={iconBlog} alt="iconBlog" />
                        <p className='text-sm md:text-lg xl:text-2xl'>The Hamburger Menu: A Compact Icon That </p>
                        <p className='text-justify text-sm md:text-lg xl:text-2xl'>The hamburger menu, designed by Norm Cox in 1981, is a timeless icon that saves space and simplifies navigation.</p>
                    </div>
                    <div>
                        <img className='md:h-56 ' src={iconBlog} alt="iconBlog" />
                        <p className='text-sm md:text-lg xl:text-2xl'>The Hamburger Menu: A Compact Icon That </p>
                        <p className='text-justify text-sm md:text-lg xl:text-2xl'>The hamburger menu, designed by Norm Cox in 1981, is a timeless icon that saves space and simplifies navigation.</p>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Blog