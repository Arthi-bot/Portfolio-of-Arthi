import assets from "../assets/assets"

const Projects =()=>{
    return(
        <div id="projects" className="max-w-full overflow-hidden py-20 md:py-28">

            <div className="flex flex-col items-center">
                <h1 className="text-(--primary-text-color) text-4xl uppercase font-bold tracking-widest">Projects</h1>
                <div className=" w-12 h-[5px] my-4 rounded-full bg-blue-600"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 rounded-md p-6 min-h-[620px] gap-10">
                <div className="px-6 py-2 rounded-md bg-(--project-bg-color) min-h-[600px] ">
                    <div className="flex flex-row justify-center h-[280px]">
                        <img loading="lazy" src={assets.Project_1} alt="" className="object-cover py-3 w-full max-w-[400px] h-full"/>
                    </div>
                    <div className="flex flex-col gap-1 py-3 flex-1">
                        <h3 className="text-lg lg:text-2xl font-bold text-(--primary-text-color) tracking-wide">Bug Solver</h3>
                        <p className="text-sm lg:text-base text-(--secondary-text-color) tracking-wide">
                            Reduced debugging time for developers by enabling faster identification and understanding of code errors
                            through AI-generated explanations. Improved developer productivity by integrating instant code execution and suggested fixes within a
                            single workflow. Enhanced learning outcomes by turning complex programming errors into simple, actionable insights for
                            users.

                            
                        </p>
                    </div>
                    <div className="flex flex-row gap-4 mt-auto">
                        <a href="https://github.com/Arthi-bot/Bug_solver" target="_blank" rel="noopener noreferrer" className="mb-2 bg-(--primary-color) text-(--primary-text-color) px-2 sm:px-4 lg:px-6 py-2 rounded-lg hover:bg-(--secondary-color) active:tracking-wide font-medium text-md transition-all duration-200 ease-in-out">GitHub Repo</a>
                        <a href="https://bug-solver.vercel.app/" target="_blank" rel="noopener noreferrer" className="mb-2 bg-(--primary-color) text-(--primary-text-color) px-2 sm:px-4 lg:px-6 py-2 rounded-lg hover:bg-(--secondary-color) active:tracking-wide font-medium text-md transition-all duration-200 ease-in-out">Live Preview</a>
                    </div>
                </div>

                <div className="px-6 py-2 rounded-md bg-(--project-bg-color) min-h-[600px]">
                    <div className="flex flex-row justify-center h-[280px]">
                        <img loading="lazy" src={assets.Project_2} alt="" className="object-cover py-3 w-full max-w-[400px] h-full"/>
                    </div>
                    <div className="flex flex-col gap-1 py-3 flex-1">
                        <h3 className="text-lg lg:text-2xl font-bold text-(--primary-text-color) tracking-wide">Forever (E-commerce)</h3>
                        <p className="text-sm lg:text-base text-(--secondary-text-color) tracking-wide">
                            Improved shopping efficiency by enabling faster product discovery through filtering, sorting, and
                            category-based browsing across 50+ products. Increased user engagement by designing intuitive cart and checkout workflows that simplified
                            purchasing decisions. Strengthened mobile usability by delivering a fully responsive shopping experience across devices.
                            
                        </p> 
                    </div>
                    <div className="flex flex-row gap-4 mt-auto">
                        <a href="https://github.com/Arthi-bot/Forever-E-commerce-Website" target="_blank" rel="noopener noreferrer" className="mb-2 bg-(--primary-color) text-(--primary-text-color) px-2 sm:px-4 lg:px-6 py-2 rounded-lg hover:bg-(--secondary-color) active:tracking-wide font-medium text-md transition-all duration-200 ease-in-out">GitHub Repo</a>
                        <a href="https://forever-e-commerce-website-yu6o.vercel.app/" target="_blank" rel="noopener noreferrer" className="mb-2 bg-(--primary-color) text-(--primary-text-color) px-2 sm:px-4 lg:px-6 py-2 rounded-lg hover:bg-(--secondary-color) active:tracking-wide font-medium text-md transition-all duration-200 ease-in-out">Live Preview</a>
                    </div>
                </div>

                <div className="px-6 py-2 rounded-md bg-(--project-bg-color) min-h-[600px]">
                    <div className="flex flex-row justify-center h-[280px]">
                        <img loading="lazy" src={assets.Project_3} alt="" className="object-cover py-3 w-full max-w-[400px] h-full"/>
                    </div>
                    <div className="flex flex-col gap-1 py-3 flex-1">
                        <h3 className="text-lg lg:text-2xl font-bold text-(--primary-text-color) tracking-wide">Expense Tracker</h3>
                        <p className="text-sm lg:text-base text-(--secondary-text-color) tracking-wide">
                            Improved personal finance visibility by enabling users to track income, expenses, and overall balance.
                            Simplified expense management through an intuitive interface for adding transactions and monitoring spending history efficiently.
                            Enhanced user experience by building a clean, responsive application that makes day-to-day financial tracking easier and more accessible.
                            
                        </p>
                    </div>
                    <div className="flex flex-row gap-4 mt-auto">
                        <a href="https://github.com/Arthi-bot/Expense_Tracker" target="_blank" rel="noopener noreferrer" className="mb-2 bg-(--primary-color) text-(--primary-text-color) px-2 py-2 sm:px-4 lg:px-6 rounded-lg hover:bg-(--secondary-color) active:tracking-wide font-medium text-md transition-all duration-200 ease-in-out">GitHub Repo</a>
                        <a href="https://expense-tracker-sigma-fawn.vercel.app/" target="_blank" rel="noopener noreferrer" className="mb-2 bg-(--primary-color) text-(--primary-text-color) px-2 sm:px-4 lg:px-6 py-2 rounded-lg hover:bg-(--secondary-color) active:tracking-wide font-medium text-md transition-all duration-200 ease-in-out">Live Preview</a>
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default Projects