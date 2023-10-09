import { motion,  } from "framer-motion"



export const fadeinAnimationsVariants = {
    initial: {
        opacity: 0,
        y:-50
    },
    animate: {
        opacity: 1,
        y: 0,
        transition: {
            delay: .1,
            duration: .8
        }
    }
}