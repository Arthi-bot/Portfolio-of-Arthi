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
                            I'm a self-taught developer transitioning into Frontend development, focused on building clean, 
                            interactive, and user-centered web applications. I enjoy turning complex ideas into simple, 
                            intuitive digital experiences using modern frontend technologies and thoughtful design.
                        </p>
                        <p className="text-(--secondary-text-color) my-3 text-base">
                            My approach goes beyond building interfaces, I focus on performance, scalability, and writing 
                            maintainable code that works well in real-world products. Through hands-on projects, I've developed 
                            strong problem-solving skills and a product mindset, always aiming to build solutions that are both 
                            functional and impactful.
                        </p>
                        <p className="text-(--secondary-text-color) my-3 text-base">
                           Currently, I'm looking for opportunities to contribute, learn, and grow as a Full Stack Developer.
                        </p>
                    </div>
                </div>

                <div className="lg:w-1/2 md:px-8">
                    <h1 className="text-(--primary-text-color) mb-6 text-2xl font-bold capitalize tracking-wider">my skills</h1>
                    <div className="text-(--secondary-text-color) flex flex-wrap gap-5 ">
                        <span className="px-5 py-3 bg-(--skills-bg-color) rounded-lg font-medium">HTML</span>
                        <span className="px-5 py-3 bg-(--skills-bg-color) rounded-lg font-medium">CSS</span>
                        <span className="px-5 py-3 bg-(--skills-bg-color) rounded-lg font-medium">JavaScript</span>
                        <span className="px-5 py-3 bg-(--skills-bg-color) rounded-lg font-medium">React.js</span>
                        <span className="px-5 py-3 bg-(--skills-bg-color) rounded-lg font-medium">Tailwind css</span>
                        <span className="px-5 py-3 bg-(--skills-bg-color) rounded-lg font-medium">Git/GitHub</span>
                        <span className="px-5 py-3 bg-(--skills-bg-color) rounded-lg font-medium">VS Code</span>
                        <span className="px-5 py-3 bg-(--skills-bg-color) rounded-lg font-medium">Chrome DevTools</span>
                        <span className="px-5 py-3 bg-(--skills-bg-color) rounded-lg font-medium">Figma(Basics)</span>
                        <span className="px-5 py-3 bg-(--skills-bg-color) rounded-lg font-medium">Affinity Photo</span>
                        <span className="px-5 py-3 bg-(--skills-bg-color) rounded-lg font-medium">GIMP</span>
                    </div>
                </div>

            </div>
            
        </div>
    )
}

export default About;