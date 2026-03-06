import { cn } from "@/src/lib/utils";
import React from "react";

export function FeaturesSection({ features }: { features: { title: string; description: string; icon: React.ReactNode }[] }) {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 relative z-10 py-10 max-w-7xl mx-auto border border-white/5 rounded-3xl bg-black/20 backdrop-blur-sm">
            {features.map((feature, index) => (
                <Feature key={feature.title} title={feature.title} description={feature.description} icon={feature.icon} index={index} />
            ))}
        </div>
    );
}

const Feature = ({
    title,
    description,
    icon,
    index,
}: {
    title: string;
    description: string;
    icon: React.ReactNode;
    index: number;
}) => {
    return (
        <div
            className={cn(
                "flex flex-col lg:border-r py-10 relative group/feature border-white/5",
                (index === 0 || index === 4) && "lg:border-l border-white/5",
                index < 4 && "lg:border-b border-white/5"
            )}
        >
            {index < 4 && (
                <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-t from-white/5 to-transparent pointer-events-none" />
            )}
            {index >= 4 && (
                <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-b from-white/5 to-transparent pointer-events-none" />
            )}
            <div className="mb-4 relative z-10 px-10 text-white/40 group-hover/feature:text-accent-peach transition-colors duration-200">
                {icon}
            </div>
            <div className="text-lg font-display font-bold mb-2 relative z-10 px-10">
                <div className="absolute left-0 inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-white/10 group-hover/feature:bg-accent-peach transition-all duration-200 origin-center" />
                <span className="group-hover/feature:translate-x-2 transition duration-200 inline-block text-white/90">
                    {title}
                </span>
            </div>
            <p className="text-sm text-white/40 max-w-xs relative z-10 px-10 group-hover/feature:text-white/60 transition-colors">
                {description}
            </p>
        </div>
    );
};
