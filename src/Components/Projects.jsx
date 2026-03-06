import assets from "../assets/assets"

const Projects =()=>{
    return(
        <div id="projects" className="max-w-full overflow-hidden py-20 md:py-28">

            <div>
                <div className="flex flex-col items-center">
                    <h1 className="text-(--primary-text-color) text-4xl uppercase font-bold tracking-widest">Projects</h1>
                    <div class=" w-12 h-[5px] my-4 rounded-full bg-blue-600"></div>
                </div>
                <div className="flex flex-col items-center">
                    <p className="wrap-break-word px-3 tracking-wider my-4 text-sm lg:text-lg font-medium w-11/12 text-center text-(--secondary-text-color)">
                        Explore projects supported by focused and well-structured case studies.
                    </p>
                </div>
            </div>

            <div className="px-4 lg:px-20 my-16">
                <div className="flex flex-col lg:flex-row px-6 py-2 rounded-md bg-(--project-bg-color) gap-10 ">
                    <div className="lg:w-1/2 flex flex-row justify-center">
                        <img loading="lazy" src={assets.Project_1} alt="" className="object-cover py-3 w-100 h-70 lg:w-130"/>
                    </div>
                    <div className="lg:w-1/2 flex flex-col items-start justify-start gap-3">
                        <h3 className="text-lg lg:text-2xl font-bold text-(--primary-text-color) tracking-wide">Agency.ai</h3>
                        <p className="text-sm lg:text-base text-(--secondary-text-color) tracking-wide">
                            Agency.ai is a responsive landing page crafted to present digital services with clarity and impact. 
                            The project emphasizes reusable components, structured layouts, theme customization and conversion-focused design 
                            principles to deliver a seamless user experience.
                        </p>
                        <a href="https://agency-ai-pink.vercel.app/" target="_blank" rel="noopener noreferrer" className="mb-2 bg-(--primary-color) text-(--primary-text-color) px-8 py-3 rounded-lg hover:bg-(--secondary-color) uppercase tracking-wide font-medium text-lg transition-colors duration-200 ease-in-out">Visit project</a>
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default Projects