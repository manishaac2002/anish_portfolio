import iconBlog from "../images/IconBlog.webp"
import mousePointerBlog from "../images/MousePointerBlog.webp"
import touchScreenBlog from "../images/TouchScreenBlog.webp"


const Blog = () => {
    return (
        <div className="bg-navyBlue">

            <div className="h-[600px] md:h-[800px] lg:h-[1000px] bg-chalk-300 rounded-b-4xl md:rounded-b-5xl font-sans">
                <div className=" text-center">
                    {/* company quote */}
                    <p className="text-chalk-400 text-2xl md:text-3xl mt-16 md:mt-20">Every <span className="text-coal text-5xl md:text-8xl">Blog </span>is a story waiting to be told.</p>

                </div>
                <div className="hidden md:hidden lg:grid lg:grid-cols-3 xl:pt-20 xl:mx-12  ">
                    {/* blog posts */}
                    <div className=''>
                        <iframe className='shadow-lg rounded-2xl ml-8' src="https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7248290668337373184"
                            height="720" width="504" allowfullscreen="" title="Embedded post"></iframe>
                    </div>
                    <div>
                        <iframe className='shadow-lg rounded-2xl ml-8' src="https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7234065982300807168"
                            height="716" width="504" allowfullscreen="" title="Embedded post"></iframe>
                    </div>
                    <div>
                        <iframe className='shadow-lg rounded-2xl ml-8' src="https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7251841149294817280"
                            height="737" width="504" allowfullscreen="" title="Embedded post"></iframe>
                    </div>
                </div>
                <div className="  md:block lg:hidden ">
                    <div className="grid grid-cols-3 gap-4 mt-12 mx-12">

                        <div>
                            <img className="w-80" src={iconBlog} alt="Icon Blog" />
                            <a href="https://www.linkedin.com/pulse/hamburger-menu-compact-icon-changed-ui-design-anish-bala-sachin-cruoc/">The Hamburger Menu: A Compact Icon That </a>
                        </div>
                        <div>
                            <img className="w-72" src={mousePointerBlog} alt="Mouse Pointer Blog" />
                            <a href="https://www.linkedin.com/pulse/why-mouse-pointer-tilted-throwback-computings-early-days-bala-sachin-hqejc/">Why the Mouse Pointer is Tilted</a>
                        </div>
                        <div className=" ">
                            <img className="w-72 " src={touchScreenBlog} alt="Touch Screen Blog" />
                            <a className="" href="https://www.linkedin.com/pulse/skeuomorphism-how-early-ui-design-bridged-gap-between-bala-sachin-yrhpc/">Optimizing Touchscreen Interfaces  </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Blog