import { CheckCircle2 } from "lucide-react";
import codeImg from "../assets/code2.jpeg";
import { checklistItems } from "../constants";
import { motion } from "framer-motion";

const Safe = () => {
  return (
    <div className="mt-40" id="safe">
      <h2 className="text-xl sm:text-2xl lg:text-3xl text-center mt-6 tracking-wide">
        அன்பின் நூல்கள்:{" "}
        <span className="bg-gradient-to-r from-orange-500 to-orange-800 text-transparent bg-clip-text">
          நெசவாளர்களுக்கான ஆரோக்கியம் மற்றும் பாதுகாப்பு
        </span>
      </h2>
      <p className="text-center pt-5">
        Threads of Care: Weaving Health and Safety for Artisans
      </p>
      <div className="flex flex-wrap justify-center">
        <motion.div
          className="p-1 w-full lg:w-1/2 mt-10"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <img
            src={codeImg}
            alt="Coding"
            className="w-96 h-96 rounded-full shadow-lg"
          />
        </motion.div>
        <div className="pt-12 w-full lg:w-1/2">
          {checklistItems.map((item, index) => (
            <motion.div
              key={index}
              className="flex mb-12"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <div className="text-orange-400 mx-6 bg-neutral-900 h-10 w-10 p-2 justify-center items-center rounded-full">
                <CheckCircle2 />
              </div>
              <div>
                <h5 className="mt-1 mb-2 text-xl">{item.title}</h5>
                <p className="text-md text-neutral-500">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Safe;
