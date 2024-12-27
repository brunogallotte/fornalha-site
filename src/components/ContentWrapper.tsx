import { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

export const ContentWrapper = (props: TContentWrapperProps) => {
  return (
    <section
      className={twMerge(
        "flex flex-col w-full px-4 xl:px-6 xl:max-w-7xl lg:mx-auto",
        props.className
      )}
    >
      {props.children}
    </section>
  );
};

type TContentWrapperProps = {
  children: ReactNode;
  className?: string;
};
