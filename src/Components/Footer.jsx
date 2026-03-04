import assets from "../assets/assets";

const Footer =()=>{
    return(
        <footer className="w-full bg-black py-8 px-6 lg:px-30">
            <div className="flex flex-col-reverse lg:flex-row gap-5">
                <div className="lg:w-1/2">
                    <div>
                        <h1 className="text-xl lg:text-2xl tracking-wider uppercase font-bold text-(--primary-text-color)">Arthi</h1>
                    </div>
                    <div>
                        <p className="text-md text-(--secondary-text-color) mt-3 tracking-wide wrap-break-word">As a frontend-oriented web developer, I specialize in crafting the user-facing aspects of websites and web applications, contributing to the overall success of the product.</p>
                    </div>
                </div>

                <div className="lg:w-1/2">
                    <h1 className="text-xl lg:text-2xl tracking-wider uppercase font-bold text-(--primary-text-color)">Social</h1>
                    <div className="flex flex-row gap-5 mt-2">

                        <a href="https://www.linkedin.com/in/arthi-m13/" target="_blank" rel="noopener noreferrer">
                            <img src={assets.Logo_linkedin} alt="" className="w-7"/>
                        </a>
                        
                        <a href="https://github.com/Arthi-bot" target="_blank" rel="noopener noreferrer">
                            <img src={assets.Logo_Github} alt="" className="w-7"/>
                        </a>
                    </div>
                </div>
            </div>

            <div className="bg-gray-700 h-[0.5px] w-full mt-14"></div>
            
            <div>
                <p className="text-(--secondary-text-color) text-xs font-normal my-6 lg:my-10 text-center tracking-wider">©Copyright 2025. Made by Arthi</p>
            </div>
        </footer>
    )
}
export default Footer;