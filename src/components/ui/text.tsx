import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const textVariants = cva("text-foreground", {
  variants: {
    variant: {
      // Headings
      h1: "scroll-m-20 text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight",
      h2: "scroll-m-20 text-3xl md:text-4xl font-bold tracking-tight",
      h3: "scroll-m-20 text-2xl md:text-3xl font-bold tracking-tight",
      h4: "scroll-m-20 text-xl md:text-2xl font-semibold tracking-tight",
      h5: "scroll-m-20 text-lg md:text-xl font-semibold tracking-tight",
      h6: "scroll-m-20 text-base md:text-lg font-semibold tracking-tight",

      // Body text
      body: "text-base leading-relaxed",
      large: "text-lg leading-relaxed",
      small: "text-sm leading-relaxed",

      // Specialized variants
      lead: "text-lg md:text-xl text-muted-foreground leading-relaxed",
      muted: "text-muted-foreground text-base",
      subtitle: "text-xl md:text-2xl text-muted-foreground font-medium",

      // Stats and numbers
      stat: "text-2xl font-bold text-primary",

      // Gradient text
      gradient:
        "bg-gradient-to-r from-blue-600 via-purple-600 to-green-600 bg-clip-text text-transparent font-bold",
      "gradient-muted":
        "bg-gradient-to-r from-gray-600 to-gray-800 bg-clip-text text-transparent font-bold",
    },
    size: {
      xs: "text-xs",
      sm: "text-sm",
      base: "text-base",
      lg: "text-lg",
      xl: "text-xl",
      "2xl": "text-2xl",
      "3xl": "text-3xl",
      "4xl": "text-4xl",
      "5xl": "text-5xl",
      "6xl": "text-6xl",
    },
    weight: {
      normal: "font-normal",
      medium: "font-medium",
      semibold: "font-semibold",
      bold: "font-bold",
    },
    align: {
      left: "text-left",
      center: "text-center",
      right: "text-right",
    },
  },
  defaultVariants: {
    variant: "body",
    align: "left",
  },
});

export interface TextProps
  extends React.HTMLAttributes<HTMLElement>,
    VariantProps<typeof textVariants> {
  as?: keyof React.JSX.IntrinsicElements;
  children: React.ReactNode;
}

const Text = React.forwardRef<HTMLElement, TextProps>(
  (
    { className, variant, size, weight, align, as, children, ...props },
    ref
  ) => {
    // Determine the HTML element based on variant or as prop
    const getElement = () => {
      if (as) return as;

      switch (variant) {
        case "h1":
          return "h1";
        case "h2":
          return "h2";
        case "h3":
          return "h3";
        case "h4":
          return "h4";
        case "h5":
          return "h5";
        case "h6":
          return "h6";
        case "lead":
        case "body":
        case "large":
          return "p";
        case "small":
        case "muted":
          return "span";
        case "stat":
          return "div";
        default:
          return "p";
      }
    };

    const Element = getElement() as keyof React.JSX.IntrinsicElements;

    return React.createElement(
      Element,
      {
        className: cn(
          textVariants({ variant, size, weight, align, className })
        ),
        ref,
        ...props,
      },
      children
    );
  }
);

Text.displayName = "Text";

export { Text, textVariants };
