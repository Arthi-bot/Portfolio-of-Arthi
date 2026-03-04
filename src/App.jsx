import About from "./Components/About";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import Projects from "./Components/Projects";

const App = ()=>{
    return(
        <div className="bg-(--bg-color) min-w-[240px] overflow-hidden">
            <Navbar />
            <Home />
            <About />
            <Projects />
            <Contact />
            <Footer />
        </div>
    )
}

export default App;