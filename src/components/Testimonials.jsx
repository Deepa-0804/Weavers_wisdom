import { testimonials } from "../constants";  

const Testimonials = () => {  
  return (  
    <motion.div
    className="p-1 w-full lg:w-1/2 mt-10"
    initial={{ opacity: 0, scale: 0.8 }}
    whileInView={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.8 }}
    viewport={{ once: true }}
  >
    <div className="flex flex-col min-h-screen mt-10">  

      {/* Header */}  
      <h2 className="sm:text-3xl lg:text-4xl mt-5 lg:mt-20 tracking-wide text-center ">  
            <span className="bg-gradient-to-r from-orange-500 to-orange-800 text-transparent bg-clip-text">  
              தொழில்நுட்ப வளர்ச்சிகள்{" "}  
            </span>  
            மற்றும்{" "}  
            <span className="bg-gradient-to-r from-orange-500 to-orange-800 text-transparent bg-clip-text">  
              புதிய பரிமாணங்கள்  
            </span>  
          </h2>  
    
      {/* Main Content */}  
      <main className="flex-1 bg-gradient-to-r from-orange-200 to-orange-400 p-6 mt-10 rounded-lg ">  
        <div className="mt-10 tracking-wide">  
         
          <br />  
          <div className="flex flex-wrap justify-center">  
            {testimonials.map((testimonial, index) => (  
              <div key={index} className="w-full sm:w-1/2 lg:w-1/3 px-4 py-2">  
                <div className="bg-neutral-100 rounded-md p-6 text-md border border-neutral-100 font-thin">  
                  <p>{testimonial.text}</p>  
                  <div className="flex mt-8 items-start">  
                    <img  
                      className="w-12 h-12 mr-6 rounded-full border border-neutral-300"  
                      src={testimonial.image}  
                      alt=""  
                    />  
                    <div>  
                      <h6>{testimonial.user}</h6>  
                      <span className="text-sm font-normal italic text-neutral-600">  
                        {testimonial.company}  
                      </span>  
                    </div>  
                  </div>  
                </div>  
              </div>  
            ))}  
          </div>  
        </div>  
      </main>  
    </div>  
    </motion.div>





  );  
};  

export default Testimonials;