
import React from "react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface TipCardProps {
  title: string;
  description: string;
  index: number;
  className?: string;
}

const TipCard: React.FC<TipCardProps> = ({
  title,
  description,
  index,
  className,
}) => {
  // Array of colorful card classes
  const cardColors = [
    "colorful-card-purple",
    "colorful-card-blue",
    "colorful-card-orange", 
    "colorful-card-green"
  ];
  
  // Select a color based on the index (cycling through)
  const colorClass = cardColors[index % cardColors.length];
  
  return (
    <motion.div 
      className={cn(
        "colorful-card p-6", 
        colorClass,
        className
      )}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
    >
      <h3 className="text-lg font-bold mb-2">{title}</h3>
      <p className="text-sm opacity-90">{description}</p>
    </motion.div>
  );
};

export default TipCard;
