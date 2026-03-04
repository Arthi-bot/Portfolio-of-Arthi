import { useState } from "react";

const Contact =()=>{

    const [status, setStatus] = useState(""); 
    const [loading, setLoading] = useState(false);

    const onSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setStatus("");

        const formData = new FormData(e.target);
        formData.append("access_key", "51b74d5f-1f5a-44e3-a25f-491df88718d1");

        try {
        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });

        const data = await response.json();

        if (data.success) {
            setStatus("success");
            e.target.reset();
        } else {
            setStatus("error");
        }
        } catch (error) {
        setStatus("error");
        }

        setLoading(false);
    };

    return(
        <div id="contact" className="max-w-full overflow-hidden py-15 md:py-22">

            <div>
                <div className="flex flex-col items-center">
                    <h1 className="text-(--primary-text-color) text-4xl uppercase font-bold tracking-widest">Contact</h1>
                    <div class=" w-12 h-[5px] my-4 rounded-full bg-blue-600"></div>
                </div>
                <div className="flex flex-col items-center">
                    <p className="wrap-break-word px-3 tracking-wider my-4 text-sm lg:text-lg font-medium w-11/12 text-center text-(--secondary-text-color)">
                        Don't hesitate to reach out me by filling out the form below. I'll respond to your message promptly.
                    </p>
                </div>
            </div>

            <div className="px-4 lg:px-20 my-6 flex flex-col items-center">
                
                <form onSubmit={onSubmit} className="w-full lg:w-3/5 bg-(--contact-bg-color) rounded-lg px-8 flex flex-col gap-4 py-6 justify-start">
                    <label htmlFor="name" className="text-(--secondary-text-color) text-lg tracking-wider">Name</label>
                    <input type="text" required id="name" placeholder="Enter your name" className="bg-(--contact-box-color) w-full h-12 rounded-md border-0 outline-0 px-4 text-(--primary-text-color)"/>
                    <label htmlFor="email" className="text-(--secondary-text-color) text-lg tracking-wider">Email</label>
                    <input type="email" required id="email" placeholder="Enter your Email" className="bg-(--contact-box-color) w-full h-12 rounded-md border-0 outline-0 px-4 text-(--primary-text-color)"/>
                    <label htmlFor="message" className="text-(--secondary-text-color) text-lg tracking-wider">Message</label>
                    <textarea name="message" required id="message" rows={8} placeholder="Enter your message" className="bg-(--contact-box-color) w-full rounded-md border-0 outline-0 px-4 py-4 text-(--primary-text-color)"></textarea> 
                    
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