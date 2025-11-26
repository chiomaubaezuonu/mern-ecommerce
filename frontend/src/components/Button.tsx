import { ReactNode } from "react";
import { cn } from "@sglara/cn";

export type ButtonType = "primary" | "transparent";
export type ButtonSize = "tiny" | "small" | "medium" | "large";

interface ButtonProps {
  className?: string;
  children?: ReactNode;
  onClick?: (e?: any) => void;
  size?: ButtonSize;
  type?: ButtonType;
  buttonType?: "button" | "submit";
  disabled?: boolean;
  loading?: boolean;
}
const Button = ({
  className = "",
  children,
  onClick,
  size,
  disabled,
  type = "primary",
  loading,
  buttonType = "button",
}: ButtonProps) => {
  const baseStyles = "cursor-pointer";
  const typeStyles = {
    primary:
      "py-2 text-white bg-black active:bg-gray-700 px-8 text-base cursor-pointer",

    transparent:
      "px-2 py-2 text-sm font-medium border border-gray-200 rounded-sm cursor-pointer",
  };
  const buttonSizes = {
    tiny: "px-4 py-2 border rounded-md bg-gray-100 text-black",
    small: "flex items-center gap-2",
    medium:
      "py-3 text-white bg-black active:bg-gray-700 px-8 w-[9.7rem] text-sm",
    large: "rounded-3xl mt-4 px-8 py-3 font-light",
  };
  const disabledStyles = disabled
    ? "opacity-50 cursor-not-allowed pointer-events-none"
    : "cursor-pointer";

  return (
    <button
      onClick={disabled ? undefined : onClick}
      className={cn(
        baseStyles,
        typeStyles[type],
        buttonSizes[size || "medium"],
        disabledStyles,
        className
      )}
      type={buttonType}
      disabled={disabled}
    >
      {children}
      {loading && (
        <img
          src="/images/loading-icon.svg"
          className="w-6"
          alt="loading-icon"
        />
      )}
    </button>
  );
};

export default Button;
