const About = ()=>{
    return(
        <div id="about" className="max-w-full overflow-hidden py-20 md:py-28">

            <div className="flex flex-col items-center">
                <h1 className="text-(--primary-text-color) text-4xl uppercase font-bold tracking-widest">About Me</h1>
                <div className=" w-12 h-[5px] my-4 rounded-full bg-blue-600"></div>
            </div>

            <div className="px-6 flex flex-col justify-start lg:flex-row lg:mx-10 my-16 gap-10">
                <div className="lg:w-1/2 md:px-8">
                    <h1 className="text-(--primary-text-color) text-2xl font-bold capitalize tracking-wider">know about me!</h1>
                    <div>
                        <p className="text-(--secondary-text-color) my-3 text-base">
                            Frontend Developer specializing in React.js, JavaScript, Tailwind CSS, REST API integration, and AI-powered web applications. 
                            Experienced in building and deploying responsive, scalable, and user-focused products, including an AI-powered debugging platform 
                            using Google Gemini and Judge0 APIs and a production-grade e-commerce application with advanced filtering, seamless user experiences, 
                            and mobile-first responsive design.
                        </p>
                        <p className="text-(--secondary-text-color) my-3 text-base">
                            Strong foundation in modern frontend development, with experience translating design requirements into clean, maintainable, 
                            and high-performance user interfaces. Skilled in component-based architecture, API integration, responsive development, and 
                            performance optimization, with a focus on creating intuitive digital experiences that balance functionality, usability, and visual quality.
                        </p>
                        <p className="text-(--secondary-text-color) my-3 text-base">
                           Backed by three years of professional experience in production-quality visual delivery, bringing a unique combination of frontend 
                           engineering skills and design sensibility.
                        </p>
                    </div>
                </div>

                <div className="lg:w-1/2 md:px-8">
                    <h1 className="text-(--primary-text-color) mb-6 text-2xl font-bold capitalize tracking-wider">my skills</h1>
                    <div className="text-(--secondary-text-color) flex flex-wrap gap-3 ">
                        <span className="px-3 py-2 bg-(--skills-bg-color) rounded-lg font-medium">React.js</span>
                        <span className="px-3 py-2 bg-(--skills-bg-color) rounded-lg font-medium">JavaScript(ES6+)</span>
                        <span className="px-3 py-2 bg-(--skills-bg-color) rounded-lg font-medium">Context API</span>
                        <span className="px-3 py-2 bg-(--skills-bg-color) rounded-lg font-medium">REST API</span>
                        <span className="px-3 py-2 bg-(--skills-bg-color) rounded-lg font-medium">AI-integration</span>
                        <span className="px-3 py-2 bg-(--skills-bg-color) rounded-lg font-medium">Tailwind CSS</span>                   
                        <span className="px-3 py-2 bg-(--skills-bg-color) rounded-lg font-medium">HTML5</span>
                        <span className="px-3 py-2 bg-(--skills-bg-color) rounded-lg font-medium">CSS3</span>
                        <span className="px-3 py-2 bg-(--skills-bg-color) rounded-lg font-medium">Web Service Integration</span>
                        <span className="px-3 py-2 bg-(--skills-bg-color) rounded-lg font-medium">Git/GitHub</span>
                        <span className="px-3 py-2 bg-(--skills-bg-color) rounded-lg font-medium">VS Code</span>
                        <span className="px-3 py-2 bg-(--skills-bg-color) rounded-lg font-medium">Chrome DevTools</span>
                        <span className="px-3 py-2 bg-(--skills-bg-color) rounded-lg font-medium">Vercel</span>
                        <span className="px-3 py-2 bg-(--skills-bg-color) rounded-lg font-medium">Figma</span>
                        <span className="px-3 py-2 bg-(--skills-bg-color) rounded-lg font-medium">Affinity Photo</span>
                        <span className="px-3 py-2 bg-(--skills-bg-color) rounded-lg font-medium">GIMP</span>
                    </div>
                </div>

            </div>
            
        </div>
    )
}

export default About;