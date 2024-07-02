import React from 'react';
import { motion } from 'framer-motion';

const DraggableWindow = ({ dragConstraints, windowPosition, children, className }) => {
  return (
    <motion.div
      className={className}
      drag
      dragMomentum={false}
      dragConstraints={dragConstraints}
      dragElastic={0}
      dragTransition={{ bounceDamping: 10 }}
      style={{ x: windowPosition.x, y: windowPosition.y, position: 'absolute', zIndex: 1 }}
    >
      {children}
    </motion.div>
  );
};

export default DraggableWindow;
