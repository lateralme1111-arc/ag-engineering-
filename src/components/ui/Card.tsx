import React from "react"
import { cn } from "@/src/lib/utils"

const Card = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
    ({ className, ...props }, ref) => (
        <div
            ref={ref}
            className={cn(
                "rounded-xl border bg-white/[0.02] border-white/[0.05] text-white shadow-sm",
                className
            )}
            {...props}
        />
    )
)
Card.displayName = "Card"

const CardContent = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
    ({ className, ...props }, ref) => (
        <div ref={ref} className={cn("p-6", className)} {...props} />
    )
)
CardContent.displayName = "CardContent"

export { Card, CardContent }
