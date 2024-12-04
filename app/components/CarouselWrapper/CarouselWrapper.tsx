import { AnimatePresence, motion } from "framer-motion";
import { FunctionComponent, ReactNode } from "react";

type TProps = {
  direction: number;
  currentIndex: number;
  children: ReactNode;
};

export const CarouselWrapper: FunctionComponent<TProps> = ({
  direction,
  currentIndex,
  children,
}) => {
  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 500 : -500,
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 500 : -500,
      opacity: 0,
    }),
  };

  return (
    <div className="relative">
      <div className="overflow-hidden flex">
        <AnimatePresence mode="wait" initial={false} custom={direction}>
          <motion.div
            key={currentIndex}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: {
                type: "spring",
                stiffness: 300,
                damping: 30,
                duration: 0.4,
              },
              opacity: { duration: 0.3 },
            }}
            className="flex items-center justify-center w-full"
          >
            {children}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};
