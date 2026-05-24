const About = ()=>{
    return(
        <div id="about" className="max-w-full overflow-hidden py-20 md:py-28">

            <div className="flex flex-col items-center">
                <h1 className="text-(--primary-text-color) text-4xl uppercase font-bold tracking-widest">About Me</h1>
                <div class=" w-12 h-[5px] my-4 rounded-full bg-blue-600"></div>
            </div>

            <div className="px-6 flex flex-col justify-start lg:flex-row lg:mx-10 my-16 gap-10">
                <div className="lg:w-1/2 md:px-8">
                    <h1 className="text-(--primary-text-color) text-2xl font-bold capitalize tracking-wider">know about me!</h1>
                    <div>
                        <p className="text-(--secondary-text-color) my-3 text-base">
                            I'm a self-taught Frontend Developer focused on building clean, scalable, and user-centered web applications that solve real-world 
                            problems. I enjoy turning complex ideas into simple, intuitive digital experiences that improve usability, simplify workflows, and 
                            create meaningful product impact.
                        </p>
                        <p className="text-(--secondary-text-color) my-3 text-base">
                            My focus goes beyond building interfaces, I aim to understand user needs, solve problems with practical solutions, and build 
                            responsive, maintainable applications using React, JavaScript, Tailwind CSS, and API integration. I value performance, scalability, 
                            and writing code that works well in real-world products.
                        </p>
                        <p className="text-(--secondary-text-color) my-3 text-base">
                           Currently, I'm expanding toward Full Stack Development and looking for opportunities to contribute, grow, and build impactful digital 
                           products while continuously learning and improving.
                        </p>
                    </div>
                </div>

                <div className="lg:w-1/2 md:px-8">
                    <h1 className="text-(--primary-text-color) mb-6 text-2xl font-bold capitalize tracking-wider">my skills</h1>
                    <div className="text-(--secondary-text-color) flex flex-wrap gap-3 ">
                        <span className="px-3 py-2 bg-(--skills-bg-color) rounded-lg font-medium">HTML5</span>
                        <span className="px-3 py-2 bg-(--skills-bg-color) rounded-lg font-medium">CSS3</span>
                        <span className="px-3 py-2 bg-(--skills-bg-color) rounded-lg font-medium">JavaScript(ES6+)</span>
                        <span className="px-3 py-2 bg-(--skills-bg-color) rounded-lg font-medium">React.js</span>
                        <span className="px-3 py-2 bg-(--skills-bg-color) rounded-lg font-medium">Tailwind CSS</span>
                        <span className="px-3 py-2 bg-(--skills-bg-color) rounded-lg font-medium">REST API</span>
                        <span className="px-3 py-2 bg-(--skills-bg-color) rounded-lg font-medium">Fetch</span>
                        <span className="px-3 py-2 bg-(--skills-bg-color) rounded-lg font-medium">Axios</span>
                        <span className="px-3 py-2 bg-(--skills-bg-color) rounded-lg font-medium">Context API</span>
                        <span className="px-3 py-2 bg-(--skills-bg-color) rounded-lg font-medium">Web Service Integration</span>
                        <span className="px-3 py-2 bg-(--skills-bg-color) rounded-lg font-medium">Prompt Engineering</span>
                        <span className="px-3 py-2 bg-(--skills-bg-color) rounded-lg font-medium">Git/GitHub</span>
                        <span className="px-3 py-2 bg-(--skills-bg-color) rounded-lg font-medium">VS Code</span>
                        <span className="px-3 py-2 bg-(--skills-bg-color) rounded-lg font-medium">Chrome DevTools</span>
                        <span className="px-3 py-2 bg-(--skills-bg-color) rounded-lg font-medium">Vercel</span>
                        <span className="px-3 py-2 bg-(--skills-bg-color) rounded-lg font-medium">Figma(Basics)</span>
                        <span className="px-3 py-2 bg-(--skills-bg-color) rounded-lg font-medium">Affinity Photo</span>
                        <span className="px-3 py-2 bg-(--skills-bg-color) rounded-lg font-medium">GIMP</span>
                    </div>
                </div>

            </div>
            
        </div>
    )
}

export default About;