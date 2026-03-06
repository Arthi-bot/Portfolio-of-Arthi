const About = ()=>{
    return(
        <div id="about" className="max-w-full overflow-hidden py-20 md:py-28">

            <div>
                <div className="flex flex-col items-center">
                    <h1 className="text-(--primary-text-color) text-4xl uppercase font-bold tracking-widest">About Me</h1>
                    <div class=" w-12 h-[5px] my-4 rounded-full bg-blue-600"></div>
                </div>
                <div className="flex flex-col items-center">
                    <p className="wrap-break-word px-3 tracking-wider my-4 text-sm lg:text-lg font-medium w-11/12 text-center text-(--secondary-text-color)">
                        Here you will find more information about me, what I do and my current skills mostly in terms of programming and technology.
                    </p>
                </div>
            </div>

            <div className="px-6 flex flex-col justify-start lg:flex-row lg:mx-10 my-16 gap-10">
                <div className="lg:w-1/2">
                    <h1 className="text-(--primary-text-color) text-2xl font-bold capitalize tracking-wider">know about me!</h1>
                    <div>
                        <p className="text-(--secondary-text-color) my-3 text-base">
                            I'm a Frontend developer focused on building clean, interactive and 
                            user-centric web experiences. I enjoy turning complex ideas into simple, 
                            intuitive interfaces using modern frontend tools and thoughtful motion design.
                        </p>
                        <p className="text-(--secondary-text-color) my-3 text-base">
                            I have a strong foundation in Frontend Development, which helps me 
                            understand how frontend decisions impact performance, scalability 
                            and real-world usage. My work is driven by attention to detail, 
                            smooth interactions and writing maintainable code rather than just 
                            making things look good.
                        </p>
                        <p className="text-(--secondary-text-color) my-3 text-base">
                           I build real-world frontend projects using modern UI patterns and 
                           animations with production-level thinking. I'm looking to contribute 
                           and grow as a Fullstack Developer. 
                        </p>
                    </div>
                </div>

                <div className="lg:w-1/2">
                    <h1 className="text-(--primary-text-color) mb-6 text-2xl font-bold capitalize tracking-wider">my skills</h1>
                    <div className="text-(--secondary-text-color) flex flex-wrap gap-5 ">
                        <span className="px-5 py-3 bg-(--skills-bg-color) rounded-lg font-medium">JavaScript</span>
                        <span className="px-5 py-3 bg-(--skills-bg-color) rounded-lg font-medium">React.js</span>
                        <span className="px-5 py-3 bg-(--skills-bg-color) rounded-lg font-medium">React Router</span>
                        <span className="px-5 py-3 bg-(--skills-bg-color) rounded-lg font-medium">HTML</span>
                        <span className="px-5 py-3 bg-(--skills-bg-color) rounded-lg font-medium">CSS</span>
                        <span className="px-5 py-3 bg-(--skills-bg-color) rounded-lg font-medium">Tailwind css</span>
                        <span className="px-5 py-3 bg-(--skills-bg-color) rounded-lg font-medium">Framer Motion</span>
                    </div>
                </div>

            </div>
            
        </div>
    )
}

export default About;