const Blog = () => {
    return (
        <div className="bg-navyBlue">

            <div className="h-[700px] md:h-[1000px] bg-chalk-300 rounded-b-4xl md:rounded-b-5xl font-sans">
                <div className=" text-center">
                    {/* company quote */}
                    <p className="text-chalk-400 text-2xl md:text-3xl mt-16 md:mt-20">Every <span className="text-coal text-5xl md:text-8xl">Blog </span>is a story waiting to be told.</p>

                </div>
                <div className=" grid grid-cols-3 pt-20 mx-12 ">
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
                        height="725" width="504" allowfullscreen="" title="Embedded post"></iframe>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Blog