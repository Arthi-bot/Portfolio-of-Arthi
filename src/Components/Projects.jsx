import assets from "../assets/assets"

const Projects =()=>{
    return(
        <div id="projects" className="max-w-full overflow-hidden py-20 md:py-28">

            <div className="flex flex-col items-center">
                <h1 className="text-(--primary-text-color) text-4xl uppercase font-bold tracking-widest">Projects</h1>
                <div class=" w-12 h-[5px] my-4 rounded-full bg-blue-600"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 px-4 my-16">
                <div className="px-6 py-2 rounded-md bg-(--project-bg-color) h-150 ">
                    <div className="flex flex-row justify-center">
                        <img loading="lazy" src={assets.Project_1} alt="" className="object-cover py-3 w-100 h-70 lg:w-130"/>
                    </div>
                    <div className="flex flex-col gap-3 py-3">
                        <h3 className="text-lg lg:text-2xl font-bold text-(--primary-text-color) tracking-wide">Bug Solver</h3>
                        <p className="text-sm lg:text-base text-(--secondary-text-color) tracking-wide">
                            Built an AI-powered debugging web application that helps developers quickly identify, fix, and understand 
                            code errors with simple explanations and allows users to run the code to see the results.
                            Developed using React, Tailwind CSS, Monaco Editor, Judge0, Google Gemini API, and Vercel 
                            Serverless Functions.
                            <div className="h-[24px]"></div>
                        </p>
                    </div>
                    <div className="flex flex-row gap-4 mt-2">
                        <a href="https://github.com/Arthi-bot/Bug_solver" target="_blank" rel="noopener noreferrer" className="mb-2 bg-(--primary-color) text-(--primary-text-color) px-6 py-2 rounded-lg hover:bg-(--secondary-color) tracking-wide font-medium text-md transition-colors duration-200 ease-in-out">GitHub Repo</a>
                        <a href="https://bug-solver.vercel.app/" target="_blank" rel="noopener noreferrer" className="mb-2 bg-(--primary-color) text-(--primary-text-color) px-6 py-2 rounded-lg hover:bg-(--secondary-color) tracking-wide font-medium text-md transition-colors duration-200 ease-in-out">Live Preview</a>
                    </div>
                </div>

                <div className="px-6 py-2 rounded-md bg-(--project-bg-color) h-150">
                    <div className="flex flex-row justify-center">
                        <img loading="lazy" src={assets.Project_2} alt="" className="object-cover py-3 w-100 h-70 lg:w-130"/>
                    </div>
                    <div className="flex flex-col gap-3 py-3">
                        <h3 className="text-lg lg:text-2xl font-bold text-(--primary-text-color) tracking-wide">Forever (E-commerce)</h3>
                        <p className="text-sm lg:text-base text-(--secondary-text-color) tracking-wide">
                            Built a responsive e-commerce web application to enhance online shopping experience. It helps users easily 
                            browse 50+ products, filter and sort items by gender and price, manage carts, and complete purchases through an 
                            intuitive interface. Developed using React, Tailwind CSS and efficient state management for better performance 
                            and user interaction.
                        </p> 
                    </div>
                    <div className="flex flex-row gap-4 mt-2">
                        <a href="https://github.com/Arthi-bot/Forever-E-commerce-Website" target="_blank" rel="noopener noreferrer" className="mb-2 bg-(--primary-color) text-(--primary-text-color) px-6 py-2 rounded-lg hover:bg-(--secondary-color) tracking-wide font-medium text-md transition-colors duration-200 ease-in-out">GitHub Repo</a>
                        <a href="https://forever-e-commerce-website-yu6o.vercel.app/" target="_blank" rel="noopener noreferrer" className="mb-2 bg-(--primary-color) text-(--primary-text-color) px-6 py-2 rounded-lg hover:bg-(--secondary-color) tracking-wide font-medium text-md transition-colors duration-200 ease-in-out">Live Preview</a>
                    </div>
                </div>

                <div className="px-6 py-2 rounded-md bg-(--project-bg-color) h-150">
                    <div className="flex flex-row justify-center">
                        <img loading="lazy" src={assets.Project_3} alt="" className="object-cover py-3 w-100 h-70 lg:w-130"/>
                    </div>
                    <div className="flex flex-col gap-3 py-3">
                        <h3 className="text-lg lg:text-2xl font-bold text-(--primary-text-color) tracking-wide">Expense Tracker</h3>
                        <p className="text-sm lg:text-base text-(--secondary-text-color) tracking-wide">
                            Built a web application to simplify personal finance management by helping users track income, expenses, and 
                            overall balance in one place. It enables users to easily add transactions and monitor spending history through a 
                            clean, responsive interface. Developed using HTML, CSS and Javascript.
                            <div className="h-[24px]"></div>
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