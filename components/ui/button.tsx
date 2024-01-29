// ui/button.tsx

import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "dark:bg-blue-500 dark:text-white bg-blue-500 text-white hover:bg-blue-600",
        destructive: "dark:bg-red-500 dark:text-white bg-red-500 text-white hover:bg-red-600",
        outline: "dark:border-gray-300 dark:bg-white dark:text-gray-700 border border-gray-300 bg-white text-gray-700 hover:bg-gray-50",
        secondary: "dark:bg-gray-300 dark:text-gray-700 bg-gray-300 text-gray-700 hover:bg-gray-400",
        ghost: "dark:hover:bg-gray-100 hover:bg-gray-100",
        link: "dark:text-blue-500 dark:underline-offset-4 text-blue-500 underline-offset-4 hover:underline",
        // Add your custom variant here:
        custom: "dark:bg-blue-500 dark:text-white bg-blue-500 text-white hover:bg-blue-600",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };