import type { ReactNode } from "react";
import CustomCursor from "@/components/CustomCursor";
import SmoothScroll from "@/components/SmoothScroll";
import { SoundProvider } from "@/components/SoundToggle";

type ExperienceLayerProps = {
  children: ReactNode;
};

export default function ExperienceLayer({ children }: ExperienceLayerProps) {
  return (
    <SoundProvider>
      <SmoothScroll />
      {children}
      <div className="grain" aria-hidden="true" />
      <CustomCursor />
    </SoundProvider>
  );
}
