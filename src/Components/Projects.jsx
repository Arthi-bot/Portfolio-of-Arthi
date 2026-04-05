import assets from "../assets/assets"

const Projects =()=>{
    return(
        <div id="projects" className="max-w-full overflow-hidden py-20 md:py-28">

            <div className="flex flex-col items-center">
                <h1 className="text-(--primary-text-color) text-4xl uppercase font-bold tracking-widest">Projects</h1>
                <div class=" w-12 h-[5px] my-4 rounded-full bg-blue-600"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 px-4 my-16">
                <div className="grid grid-rows-1 px-6 py-2 rounded-md bg-(--project-bg-color) gap-10 ">
                    <div className="flex flex-row justify-center">
                        <img loading="lazy" src={assets.Project_1} alt="" className="object-cover py-3 w-100 h-70 lg:w-130"/>
                    </div>
                    <div className="flex flex-col gap-3">
                        <h3 className="text-lg lg:text-2xl font-bold text-(--primary-text-color) tracking-wide">Forever</h3>
                        <p className="text-sm lg:text-base text-(--secondary-text-color) tracking-wide">
                            Built a e-commerce web application that enables users to browse products, add items to the cart and 
                            manage purchases efficiently. Utilized React.js for the frontend, implemented state management for 
                            dynamic user interactions and used Tailwind CSS for responsive user-friendly UI design.
                        </p>
                    </div>
                    <div className="flex flex-row gap-4 mt-2">
                        <a href="https://github.com/Arthi-bot/Forever-E-commerce-Website" target="_blank" rel="noopener noreferrer" className="mb-2 bg-(--primary-color) text-(--primary-text-color) px-6 py-2 rounded-lg hover:bg-(--secondary-color) tracking-wide font-medium text-md transition-colors duration-200 ease-in-out">GitHub Repo</a>
                        <a href="https://forever-e-commerce-website-yu6o.vercel.app/" target="_blank" rel="noopener noreferrer" className="mb-2 bg-(--primary-color) text-(--primary-text-color) px-6 py-2 rounded-lg hover:bg-(--secondary-color) tracking-wide font-medium text-md transition-colors duration-200 ease-in-out">Live Preview</a>
                    </div>
                </div>

                <div className="grid grid-rows-1 px-6 py-2 rounded-md bg-(--project-bg-color) gap-10 ">
                    <div className="flex flex-row justify-center">
                        <img loading="lazy" src={assets.Project_2} alt="" className="object-cover py-3 w-100 h-70 lg:w-130"/>
                    </div>
                    <div className="flex flex-col gap-3">
                        <h3 className="text-lg lg:text-2xl font-bold text-(--primary-text-color) tracking-wide">Agency.ai</h3>
                        <p className="text-sm lg:text-base text-(--secondary-text-color) tracking-wide">
                            Built a responsive landing page that presents company services and added dark/ light theme to 
                            improve user accessibility. implemented web3forms for users to connect or request services in simple 
                            way. Utilized React.js for the UI and Tailwind CSS for user-friendly design.
                        </p> 
                    </div>
                    <div className="flex flex-row gap-4 mt-2">
                        <a href="https://github.com/Arthi-bot/AGENCY-AI" target="_blank" rel="noopener noreferrer" className="mb-2 bg-(--primary-color) text-(--primary-text-color) px-6 py-2 rounded-lg hover:bg-(--secondary-color) tracking-wide font-medium text-md transition-colors duration-200 ease-in-out">GitHub Repo</a>
                        <a href="https://agency-ai-pink.vercel.app/" target="_blank" rel="noopener noreferrer" className="mb-2 bg-(--primary-color) text-(--primary-text-color) px-6 py-2 rounded-lg hover:bg-(--secondary-color) tracking-wide font-medium text-md transition-colors duration-200 ease-in-out">Live Preview</a>
                    </div>
                </div>

                <div className="grid grid-rows-1 px-6 py-2 rounded-md bg-(--project-bg-color) gap-10 ">
                    <div className="flex flex-row justify-center">
                        <img loading="lazy" src={assets.Project_3} alt="" className="object-cover py-3 w-100 h-70 lg:w-130"/>
                    </div>
                    <div className="flex flex-col gap-3">
                        <h3 className="text-lg lg:text-2xl font-bold text-(--primary-text-color) tracking-wide">Expense Tracker</h3>
                        <p className="text-sm lg:text-base text-(--secondary-text-color) tracking-wide">
                            Built a expense tracker web application that helps users to monitor income and expenses and gain 
                            better insights into their spending. Implemented dynamic UI updates and real-time balance 
                            calculations using Vanilla JavaScript, ensuring a responsive and user-friendly experience.
                        </p>
                    </div>
                    <div className="flex flex-row gap-4 mt-2">
                        <a href="https://github.com/Arthi-bot/Expense_Tracker" target="_blank" rel="noopener noreferrer" className="mb-2 bg-(--primary-color) text-(--primary-text-color) px-6 py-2 rounded-lg hover:bg-(--secondary-color) tracking-wide font-medium text-md transition-colors duration-200 ease-in-out">GitHub Repo</a>
                        <a href="https://expense-tracker-sigma-fawn.vercel.app/" target="_blank" rel="noopener noreferrer" className="mb-2 bg-(--primary-color) text-(--primary-text-color) px-6 py-2 rounded-lg hover:bg-(--secondary-color) tracking-wide font-medium text-md transition-colors duration-200 ease-in-out">Live Preview</a>
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default Projects