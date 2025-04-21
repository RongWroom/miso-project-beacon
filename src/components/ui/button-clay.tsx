
import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonClayVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-xl text-sm font-medium ring-offset-background transition-all duration-300 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-white text-miso-black shadow-claymorphism hover:shadow-claymorphism-lg active:shadow-claymorphism-inset active:translate-y-0.5",
        primary: "bg-miso-yellow text-miso-black shadow-claymorphism hover:shadow-claymorphism-lg active:shadow-claymorphism-inset active:translate-y-0.5",
        secondary: "bg-miso-platinum text-miso-black shadow-claymorphism hover:shadow-claymorphism-lg active:shadow-claymorphism-inset active:translate-y-0.5",
        accent: "bg-miso-red text-white shadow-claymorphism hover:shadow-claymorphism-lg active:shadow-claymorphism-inset active:translate-y-0.5",
        outline: "border border-miso-platinum bg-white hover:bg-miso-platinum/10 text-miso-black shadow-claymorphism hover:shadow-claymorphism-lg active:shadow-claymorphism-inset active:translate-y-0.5",
      },
      size: {
        default: "h-12 px-6 py-3",
        sm: "h-9 rounded-md px-4",
        lg: "h-14 rounded-xl px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonClayProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonClayVariants> {
  asChild?: boolean
}

const ButtonClay = React.forwardRef<HTMLButtonElement, ButtonClayProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonClayVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
ButtonClay.displayName = "ButtonClay"

export { ButtonClay, buttonClayVariants }
