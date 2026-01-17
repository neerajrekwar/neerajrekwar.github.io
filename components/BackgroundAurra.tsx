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
        xOffset={0}
        speed={0}
        intensity={0}
        size={0}
        />
        {children}
    </>
  );
};
