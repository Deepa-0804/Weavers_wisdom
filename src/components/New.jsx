import { CheckCircle2 } from "lucide-react";
import codeImg from "../assets/code.png";
import { checklistItems1 } from "../constants";

import { motion } from "framer-motion"; // Import Framer Motion

const New = () => {
  return (
    <div className="mt-40" id="market">
      {/* Heading Section */}
      <motion.h2
        className="sm:text-3xl lg:text-4xl mt-5 lg:mt-20 tracking-wide text-center"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <span className="bg-gradient-to-r from-orange-500 to-orange-800 text-transparent bg-clip-text">
          தொழில்நுட்ப வளர்ச்சிகள்{" "}
        </span>
        மற்றும்{" "}
        <span className="bg-gradient-to-r from-orange-500 to-orange-800 text-transparent bg-clip-text">
          புதிய பரிமாணங்கள்
        </span>
      </motion.h2>
      <motion.p
        className="text-center pt-5"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
      >
        Technological Advancements and New Dimensions
      </motion.p>

      <br />

      <div className="flex flex-wrap justify-center">
        {/* Text Section */}
        <motion.div
          className="pt-12 w-full lg:w-1/2"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          {checklistItems1.map((item, index) => (
            <motion.div
              key={index}
              className="flex mb-12"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.5,
                delay: index * 0.2, // Staggered animation for list items
              }}
            >
              <motion.div
                className="text-orange-400 mx-6 bg-neutral-900 h-10 w-10 p-2 justify-center items-center rounded-full"
                initial={{ rotate: -180 }}
                animate={{ rotate: 0 }}
                transition={{ duration: 0.6, type: "spring" }}
              >
                <CheckCircle2 />
              </motion.div>
              <div>
                <motion.h5
                  className="mt-1 mb-2 text-xl"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                >
                  {item.title}
                </motion.h5>
                <motion.p
                  className="text-md text-neutral-500"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.3 }}
                >
                  {item.description}
                </motion.p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Image Section */}
        <motion.div
          className="p-2 w-full lg:w-1/2 mt-10"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
        >
          <motion.img
            src={codeImg}
            alt="Coding"
            style={{
              width: "600px",
              height: "500px",
              borderRadius: "10px",
              boxShadow: "10px 10px 20px gray",
            }}
            whileHover={{
              scale: 1.05, // Slight zoom-in on hover
              boxShadow: "15px 15px 30px gray",
            }}
            transition={{ duration: 0.3 }}
          />
        </motion.div>
      </div>
    </div>
  );
};

export default New;
