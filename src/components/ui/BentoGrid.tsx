import React from "react"
import { cn } from "@/src/lib/utils"

const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid md:auto-rows-[18rem] grid-cols-1 md:grid-cols-3 gap-4 max-w-7xl mx-auto",
        className
      )}
    >
      {children}
    </div>
  );
};

interface BentoGridItemProps {
  key?: React.Key;
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  header?: React.ReactNode;
  icon?: React.ReactNode;
  label?: string;
}

const BentoGridItem = ({
  className,
  title,
  description,
  header,
  icon,
  label,
}: BentoGridItemProps) => {
  return (
    <div
      className={cn(
        "row-span-1 rounded-3xl group/bento hover:shadow-xl transition duration-200 shadow-input p-4 bg-white/[0.02] border border-white/[0.05] justify-between flex flex-col space-y-4",
        className
      )}
    >
      {header}
      <div className="group-hover/bento:translate-x-2 transition duration-200">
        {label && (
          <div className="font-mono text-[10px] uppercase tracking-widest text-accent-mint mb-2">
            {label}
          </div>
        )}
        {icon}
        <div className="font-display font-bold text-white mb-2 mt-2 text-2xl uppercase tracking-tighter">
          {title}
        </div>
        <div className="font-sans font-normal text-white/50 text-sm">
          {description}
        </div>
      </div>
    </div>
  );
};

export { BentoGrid, BentoGridItem };
