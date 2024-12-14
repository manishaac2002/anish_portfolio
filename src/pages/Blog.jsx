import iconBlog from "../images/IconBlog.webp"
import mousePointerBlog from "../images/MousePointerBlog.webp"
import touchScreenBlog from "../images/TouchScreenBlog.webp"


const Blog = () => {
    return (
        <div className="bg-navyBlue">

            <div className=" h-[1000px] md:h-[600px] lg:h-[1000px] bg-chalk-300 rounded-b-4xl md:rounded-b-5xl font-sans">

                {/* company quote */}
                <div className=" text-center">
                    <p className="text-chalk-400 text-2xl md:text-3xl mt-5 md:mt-20">
                        Every <span className="text-coal text-5xl md:text-8xl">Blog
                        </span>is a story waiting to be told.
                    </p>
                </div>

                {/* blog posts */}
                <div className="hidden md:hidden lg:grid lg:grid-cols-3 xl:pt-20 xl:mx-12  ">
                    <div className=''>
                        <iframe
                            className='shadow-lg rounded-2xl ml-8'
                            src="https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7248290668337373184"
                            height="720"
                            width="504"
                            allowfullscreen=""
                            title="Embedded post">
                        </iframe>
                    </div>
                    <div>
                        <iframe
                            className='shadow-lg rounded-2xl ml-8'
                            src="https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7234065982300807168"
                            height="716"
                            width="504"
                            allowfullscreen=""
                            title="Embedded post">
                        </iframe>
                    </div>
                    <div>
                        <iframe
                            className='shadow-lg rounded-2xl ml-8'
                            src="https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7251841149294817280"
                            height="737"
                            width="504"
                            allowfullscreen=""
                            title="Embedded post">
                        </iframe>
                    </div>
                </div>

                <div className="  md:block lg:hidden ">
                    <div className=" mt- md:grid grid-cols-3 gap-5 md:mt-20 md:mx-8 ">
                        <div>
                            <img className="w-72 shadow-lg rounded-2xl ml-16 md:ml-0"
                                src={iconBlog}
                                alt="Icon Blog" />
                            <p className="text-justify text-sm md:text-base  ml-3 mb-3 mt-3">
                                The hamburger menu, designed by Norm Cox in 1981, is a timeless icon that saves space and simplifies navigation.</p>
                            <a className="underline underline-offset-4 text-blue-800 ml-3 md:ml-0"
                                href="https://www.linkedin.com/pulse/hamburger-menu-compact-icon-changed-ui-design-anish-bala-sachin-cruoc/">The Hamburger Menu: A Compact Icon That </a>
                        </div>
                        <div>
                            <img
                                className="w-72 shadow-lg rounded-2xl ml-16 md:ml-0"
                                src={mousePointerBlog}
                                alt="Mouse Pointer Blog" />
                            <p className="text-justify text-sm md:text-base ml-3 mb-3 mt-3">
                                The tilted mouse pointer, designed at Xerox PARC for visibility on low-res screens, remains a timeless and universal standard.</p>
                            <a className="underline underline-offset-4 text-blue-800 ml-3 md:ml-0"
                                href="https://www.linkedin.com/pulse/why-mouse-pointer-tilted-throwback-computings-early-days-bala-sachin-hqejc/">Why the Mouse Pointer is Tilted</a>
                        </div>
                        <div className=" ">
                            <img
                                className="w-72 shadow-lg rounded-2xl ml-16 mt-3 md:mt-0 md:ml-0"
                                src={touchScreenBlog}
                                alt="Touch Screen Blog" />
                            <p className="text-justify text-sm md:text-base ml-3 mb-3 mt-3">
                                Optimized touchscreen interfaces use large targets, clear visuals, and consistent, accessible designs to enhance
                                usability and reduce errors in fields like healthcare.</p>
                            <a className="underline underline-offset-4 text-blue-800 ml-3 md:ml-0"
                                href="https://www.linkedin.com/pulse/skeuomorphism-how-early-ui-design-bridged-gap-between-bala-sachin-yrhpc/">
                                Optimizing Touchscreen Interfaces  </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Blog