"use client";
import Lightning from "./Lightning";

export const AuroraBackgroundDemo = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <>
      <Lightning
        hue={190}
        xOffset={0.7}
        speed={0.8}
        intensity={1.2}
        size={0.7}
        />
        {children}
    </>
  );
};
