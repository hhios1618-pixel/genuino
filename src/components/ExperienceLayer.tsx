import type { ReactNode } from "react";
import AmbientPlayer from "@/components/AmbientPlayer";
import CustomCursor from "@/components/CustomCursor";
import PageTransition from "@/components/PageTransition";
import SmoothScroll from "@/components/SmoothScroll";

type ExperienceLayerProps = {
  children: ReactNode;
};

export default function ExperienceLayer({ children }: ExperienceLayerProps) {
  return (
    <>
      <SmoothScroll />
      <PageTransition>{children}</PageTransition>
      <AmbientPlayer />
      <div className="grain-overlay" aria-hidden="true" />
      <div className="scanline-overlay" aria-hidden="true" />
      <CustomCursor />
    </>
  );
}
