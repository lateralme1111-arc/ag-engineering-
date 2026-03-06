import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/src/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-full text-sm font-medium transition-all focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-accent-mint disabled:pointer-events-none disabled:opacity-50 active:scale-95",
  {
    variants: {
      variant: {
        default: "bg-accent-mint text-background hover:bg-accent-mint/90 shadow-[0_0_20px_rgba(184,242,230,0.3)]",
        outline: "border border-accent-teal/30 bg-transparent hover:bg-accent-teal/10 text-accent-mint",
        ghost: "hover:bg-accent-teal/10 text-white",
        premium: "bg-gradient-to-r from-accent-teal to-accent-mint text-background font-semibold hover:opacity-90",
      },
      size: {
        default: "h-12 px-8 py-2",
        sm: "h-9 px-4 py-1 text-xs",
        lg: "h-14 px-10 py-3 text-base",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
