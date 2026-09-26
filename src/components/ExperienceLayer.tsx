import type { ReactNode } from "react";
import CustomCursor from "@/components/CustomCursor";
import SmoothScroll from "@/components/SmoothScroll";

type ExperienceLayerProps = {
  children: ReactNode;
};

export default function ExperienceLayer({ children }: ExperienceLayerProps) {
  return (
    <>
      <SmoothScroll />
      {children}
      <div className="grain" aria-hidden="true" />
      <CustomCursor />
    </>
  );
}
