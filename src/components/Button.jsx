import { cva } from "cva";

const buttonVariants = cva(
  "rounded focus:outline-none focus:shadow-outline font-bold text-white",
  {
    variants: {
      variant: {
        primary: "bg-blue-500 hover:bg-blue-700",
        secondary: "bg-gray-500 hover:bg-gray-700",
        danger: "bg-red-500 hover:bg-red-700",
      },
      size: {
        md: "py-3 px-4",
        sm: "py-1 px-2",
        lg: "py-4 px-8",
      },
      fullWidth: {
        true: "w-full",
      },
      outline: {
        true: "border-2 border-green-600 text-gray-700 hover:bg-red-500 hover:text-white",
      },
    },
    compoundVariants: [
      {
        variant: "primary",
        size: "md",
        outline: true,
        class: "uppercase",
      },
      {
        variant: "secondary",
        size: "sm",
        class: "rounded-full",
      },
    ],
    defaultVariants: {
      variant: "primary",
      size: "md",
      outline: false,
      fullWidth: false,
    },
  }
);

const Button = ({
  title,
  variant,
  size,
  outline,
  fullWidth,
  className,
  ...props
}) => {
  return (
    <button
      className={buttonVariants({
        variant,
        size,
        outline,
        fullWidth,
        className,
      })}
      {...props}
    >
      {title}
    </button>
  );
};

export default Button;
