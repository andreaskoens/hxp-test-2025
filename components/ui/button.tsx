"use client";

import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-[color,box-shadow] disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
  {
    variants: {
      variant: {
        default:
          "text-light text-xl font-normal cursor-pointer rounded-[14px] order-2 xl:order-3 border bg-dark hover:bg-dark-faded transition-all duration-150",
        outline:
          "border-dark text-xl font-normal cursor-pointer rounded-[14px] order-2 xl:order-3 border border-input bg-background hover:bg-light transition-all duration-150",
        brand:
          "text-dark text-xl font-normal cursor-pointer rounded-[14px] order-2 xl:order-3 border bg-brand hover:bg-brand-hover transition-all duration-150",
        link: "!m-0 !p-0 text-xl font-normal cursor-pointer text-primary underline-offset-4 hover:underline hover:opacity-75 transition-all duration-150",
        logo: "!m-0 !p-0 w-fit text-xl font-normal cursor-pointer text-primary underline-offset-4 hover:opacity-75 transition-all duration-150",
      },
      size: {
        default: "h-auto py-5 px-9 has-[>svg]:px-3",
        sm: "h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",
        lg: "h-10 rounded-md px-6 has-[>svg]:px-4",
        icon: "size-9",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  }) {
  const Comp = asChild ? Slot : "button";

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  );
}

export { Button, buttonVariants };
