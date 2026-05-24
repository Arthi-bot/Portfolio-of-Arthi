import { useEffect, useState } from "react";

const Contact =()=>{

    const [status, setStatus] = useState(""); 
    const [loading, setLoading] = useState(false);

      const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

/*   const [status, setStatus] = useState(""); */

  const handleChange = (e) => {
    
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

   const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus("Sending...");

    const res = await fetch("/api/solve", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    const data = await res.json();

    if (data.success) {
      setStatus("success");
      setTimeout(() => {
        setFormData({
          name: "",
          email: "",
          message: "",
        });
      }, 500);
    } else {
      setStatus("error");
    }
    setLoading(false);
  };

    useEffect(() => {
        setTimeout(() => {
                setStatus("");
            }, 500);
    }, [status]);

    return(
        <div id="contact" className="max-w-full overflow-hidden py-20 md:py-28">

            <div>
                <div className="flex flex-col items-center">
                    <h1 className="text-(--primary-text-color) text-4xl uppercase font-bold tracking-widest">Contact</h1>
                    <div className=" w-12 h-[5px] my-4 rounded-full bg-blue-600"></div>
                </div>
                <div className="flex flex-col items-center">
                    <p className="wrap-break-word px-3 tracking-wider my-4 text-sm lg:text-lg font-medium w-11/12 text-center text-(--secondary-text-color)">
                        Don't hesitate to reach out me by filling out the form below. I'll respond to your message promptly.
                    </p>
                </div>
            </div>

            <div className="px-4 lg:px-20 my-6 flex flex-col items-center">
                
                <form onSubmit={handleSubmit} className="w-full lg:w-3/5 bg-(--contact-bg-color) rounded-lg px-8 flex flex-col gap-4 py-6 justify-start">
                    <label htmlFor="name" className="text-(--secondary-text-color) text-lg tracking-wider">Name</label>
                    <input name="name" type="text" required id="name" placeholder="Enter your name" className="bg-(--contact-box-color) w-full h-12 rounded-md border-0 outline-0 px-4 text-(--primary-text-color)" value={formData.name} onChange={handleChange}/>
                    <label htmlFor="email" className="text-(--secondary-text-color) text-lg tracking-wider">Email</label>
                    <input name="email" type="email" required id="email" placeholder="Enter your Email" className="bg-(--contact-box-color) w-full h-12 rounded-md border-0 outline-0 px-4 text-(--primary-text-color)" value={formData.email} onChange={handleChange}/>
                    <label htmlFor="message" className="text-(--secondary-text-color) text-lg tracking-wider">Message</label>
                    <textarea name="message" required id="message" rows={8} placeholder="Enter your message" className="bg-(--contact-box-color) w-full rounded-md border-0 outline-0 px-4 py-4 text-(--primary-text-color)" value={formData.message} onChange={handleChange}></textarea> 
                    
                    <div className="w-full lg:w-[30%] bg-(--primary-color) cursor-pointer text-center py-3 rounded-md text-lg font-semibold tracking-wide text-(--primary-text-color) hover:bg-(--secondary-color) transition-colors duration-200 ease-in-out">
                        <button type="submit" disabled={loading} className="uppercase">
                            {loading ? "Submitting..." : status === "success" ? "Submitted" : "Submit"}
                        </button>
                    </div>
                    {status === "error" && (
                        <p className="text-red-500 text-sm text-center">
                        Something went wrong. Please try again.
                        </p>
                    )}
                </form>

            </div>

        </div>
    )
}
export default Contact;