import { useGlobalContext } from "../../GlobalContext";
import { cn } from "@sglara/cn";

interface SpinnerProps {
  text?: string;
  size?: "small" | "medium";
  className?: string;
}

const LoadingSpinner = ({
  text = "Fetching products",
  size = "medium",
  className = "",
}: SpinnerProps) => {
  const { loading } = useGlobalContext();
  const sizeClasses = {
    small: "w-6 brightness-35 invert-100",
    medium: "w-10 brightness-35 invert-100",
  };

  return (
    <div>
      {loading && (
        <div className="flex items-center justify-center">
          <span className="mr-2 text-gray-700 text-xl">{text}</span>
          <img
            src="/images/loading-icon.svg"
            
            className={cn(sizeClasses[size], className)}

            alt="loading-icon"
          />
        </div>
      )}
    </div>
  );
};

export default LoadingSpinner;
