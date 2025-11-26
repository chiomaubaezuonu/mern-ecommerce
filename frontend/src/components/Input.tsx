import { cn } from "@sglara/cn";
export type InputSize = "tiny" | "small" | "medium" | "large";
export type InputType = "checkbox" | "password" | "email" | "number" | "text";

interface Input {
  placeholder?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  htmlType: InputType;
  name?: string;
  size: InputSize;
  checked?: boolean;
  label?: string;
  value?: string | number;
  required?: boolean;
  inputClassName?: string;
  wrapperClassName?: string;
}

const baseStyles = "cursor-pointer";
const inputSizes = {
  tiny: "w-3",
  small: "border border-gray-200 p-1 max-w-10 sm:max-w-20 sm:px-2",
  medium: "border-[0.063rem] px-3 py-2 border-gray-800 w-full",
  large: "w-full font-bold border border-gray-300 outline-0 rounded",
};

const Input = ({
  placeholder,
  checked,
  onChange,
  htmlType = "text",
  inputClassName = "",
  wrapperClassName = "",
  name,
  size,
  label,
  value,
  required,
}: Input) => {
  return (
    <label className={cn("gap-2 flex cursor-pointer w-full", wrapperClassName)}>
      <input
        placeholder={placeholder}
        checked={checked}
        onChange={onChange}
        type={htmlType}
        name={name}
        value={value}
        required={required}
        className={cn(
          htmlType === "checkbox" ? "w-3" : inputSizes[size],
          inputClassName,
          baseStyles
        )}
      />
      {label && <span>{label}</span>}
    </label>
  );
};

export default Input;
