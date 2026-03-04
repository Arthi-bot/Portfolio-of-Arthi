const Home = ()=>{
    return(
        <div id="#" className="max-w-full h-screen relative overflow-hidden z-0">

            <div class="absolute shadow-[0_0_3000px_65px_rgba(0,0,240,1)] top-[40%] left-0"></div>
            <div class="absolute shadow-[0_0_3000px_65px_rgba(100,20,100,1)] top-[70%] right-0"></div>

            <div className="flex flex-col py-2 px-2 items-center justify-center h-full">

                <div className="my-5 text-3xl lg:text-6xl uppercase font-extrabold wrap-break-word tracking-wider text-center">
                    <h1 className="text-(--primary-text-color)">Hey I'm <span className="text-(--primary-color)">Arthi</span></h1>
                </div>
                <div className="wrap-break-word px-6 tracking-wider my-5 text-base lg:text-xl lg:w-3/5 text-center text-(--secondary-text-color)">
                    <p>
                        A skilled web developer, crafting and managing websites and web applications to ensure the success of the 
                        entire product with finesse.
                    </p>
                </div>

                <div className="my-5">
                    <a href="./Arthi_M_FD.pdf" target="_blank" rel="noopener noreferrer">
                        <button className="bg-(--primary-color) tracking-wide text-(--primary-text-color) rounded-md  
                        uppercase ease-linear duration-200 hover:-translate-y-1 hover:bg-(--secondary-color) 
                        font-semibold py-4 px-8 text-xl hover:tracking-widest cursor-pointer">Resume</button>
                    </a>
                </div>
                
            </div>
        </div>
    )
}

export default Home;