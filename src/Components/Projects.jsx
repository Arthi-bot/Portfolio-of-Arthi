import assets from "../assets/assets"

const Projects =()=>{
    return(
        <div id="projects" className="max-w-full overflow-hidden py-20 md:py-28">

            <div className="flex flex-col items-center">
                <h1 className="text-(--primary-text-color) text-4xl uppercase font-bold tracking-widest">Projects</h1>
                <div className=" w-12 h-[5px] my-4 rounded-full bg-blue-600"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 rounded-md p-6 min-h-[620px] gap-10 xl:gap-20 xl:mx-10">
                <div className="flex flex-col justify-around rounded-md bg-(--project-bg-color) min-h-[600px]">
                    <div className="flex flex-row justify-center ">
                        <img loading="lazy" src={assets.Project_1} alt="" className="object-cover w-full h-full rounded-t-md"/>
                    </div>
                    <div className="flex flex-col justify- gap-1 px-6 py-4 flex-1">
                        <h3 className="text-lg lg:text-2xl font-bold text-(--primary-text-color) tracking-wide">Bug Solver</h3>
                        <p className="text-sm lg:text-base text-(--secondary-text-color) tracking-wide">
                            Architected and shipped a frontend debugging web app that takes user-submitted code, detects bugs via Google 
                            Gemini AI, returns AI-generated fixes, and executes corrected code in real time using the Judge0 API reducing the 
                            typical debug-and-test loop to a single interface. Solved a key UX challenge by integrating Monaco Editor (VS Code's editor engine) to create a familiar, distraction
                            free coding environment inside the browser, improving usability for developer users. 
                            Deployed via Vercel Serverless Functions to handle API calls securely on the server side demonstrating awareness of 
                            client-side security and production deployment practices.
                        </p>
                    </div>
                    <div className="flex flex-row gap-4 px-6 py-2 mt-auto">
                        <a href="https://github.com/Arthi-bot/Bug_solver" target="_blank" rel="noopener noreferrer" className="mb-2 bg-(--primary-color) text-(--primary-text-color) px-2 sm:px-4 lg:px-6 py-2 rounded-lg hover:bg-(--secondary-color) active:tracking-wide font-medium text-md transition-all duration-200 ease-in-out">GitHub Repo</a>
                        <a href="https://bug-solver.vercel.app/" target="_blank" rel="noopener noreferrer" className="mb-2 bg-(--primary-color) text-(--primary-text-color) px-2 sm:px-4 lg:px-6 py-2 rounded-lg hover:bg-(--secondary-color) active:tracking-wide font-medium text-md transition-all duration-200 ease-in-out">Live Preview</a>
                    </div>
                </div>

                <div className="flex flex-col justify-around rounded-md bg-(--project-bg-color) min-h-[600px]">
                    <div className="flex flex-row justify-center ">
                        <img loading="lazy" src={assets.Project_2} alt="" className="object-cover w-full h-full rounded-t-md"/>
                    </div>
                    <div className="flex flex-col justify- gap-1 px-6 py-4 flex-1">
                        <h3 className="text-lg lg:text-2xl font-bold text-(--primary-text-color) tracking-wide">Forever (E-commerce)</h3>
                        <p className="text-sm lg:text-base text-(--secondary-text-color) tracking-wide">
                            Built a fully responsive, multi-page e-commerce application featuring a catalog of 50+ products with dynamic 
                            filtering by gender, category, and price range, implementing component-level state management to ensure seamless, 
                            flicker-free filter interactions. Designed and developed the complete UI from scratch with a focus on mobile-first responsiveness and cross-browser 
                            consistency, applying Tailwind utility classes to create a scalable, maintainable styling architecture.                                
                        </p> 
                    </div>
                    <div className="flex flex-row gap-4 px-6 py-2 mt-auto">
                        <a href="https://github.com/Arthi-bot/Forever-E-commerce-Website" target="_blank" rel="noopener noreferrer" className="mb-2 bg-(--primary-color) text-(--primary-text-color) px-2 sm:px-4 lg:px-6 py-2 rounded-lg hover:bg-(--secondary-color) active:tracking-wide font-medium text-md transition-all duration-200 ease-in-out">GitHub Repo</a>
                        <a href="https://forever-e-commerce-website-yu6o.vercel.app/" target="_blank" rel="noopener noreferrer" className="mb-2 bg-(--primary-color) text-(--primary-text-color) px-2 sm:px-4 lg:px-6 py-2 rounded-lg hover:bg-(--secondary-color) active:tracking-wide font-medium text-md transition-all duration-200 ease-in-out">Live Preview</a>
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default Projects