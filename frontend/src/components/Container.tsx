import { type ReactNode } from "react";
interface Container {
  children: ReactNode;
  className?: string;
}

const Container = ({ children, className = "" }: Container) => {
  return (
    <div className={`px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw] ${className}`}>
      {children}
    </div>
  );
};

export default Container;
