import { type ReactNode } from "react";
import { useGlobalContext } from "../GlobalContext";
interface Container {
  children: ReactNode;
  className?: string;
}

 const Container = ({ children, className = "" }: Container) => {

  const { setIsUserDetailOpen } = useGlobalContext()
  return (
    <div onClick={() => setIsUserDetailOpen(false)} className={`px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw] ${className}`}>
      {children}
    </div>
  );
};

export default Container;
