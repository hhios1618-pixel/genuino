"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

gsap.registerPlugin(ScrollTrigger);

declare global {
  interface Window {
    __lenis?: Lenis;
  }
}

/*
  Motor de movimiento del sitio. Declarativo por atributos:
  data-split        titular con <Words>: cada palabra sube desde su máscara
  data-fade         fade + subida al entrar
  data-stagger      los hijos directos entran en cascada
  data-clip         imagen que se destapa de abajo hacia arriba
  data-speed="0.1"  parallax vertical
  data-scrub-words  párrafo que se ilumina palabra por palabra con el scroll
  data-rule         línea que se dibuja de izquierda a derecha
*/
export default function SmoothScroll() {
  const pathname = usePathname();

  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion) return;

    const lenis = new Lenis({ lerp: 0.11, wheelMultiplier: 0.95, anchors: { offset: -80 } });
    window.__lenis = lenis;
    lenis.on("scroll", ScrollTrigger.update);
    const tick = (time: number) => lenis.raf(time * 1000);
    gsap.ticker.add(tick);
    gsap.ticker.lagSmoothing(0);

    return () => {
      gsap.ticker.remove(tick);
      lenis.destroy();
      delete window.__lenis;
    };
  }, []);

  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const lenis = window.__lenis;

    if (window.location.hash) {
      const target = document.querySelector<HTMLElement>(window.location.hash);
      if (target) window.setTimeout(() => lenis?.scrollTo(target, { offset: -80 }), 300);
    } else {
      lenis?.scrollTo(0, { immediate: true });
    }

    if (reduceMotion) return;

    const ease = "expo.out";

    const context = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>("[data-split]").forEach((element) => {
        const words = element.querySelectorAll(".si");
        gsap.fromTo(
          words,
          { yPercent: 108 },
          {
            yPercent: 0,
            duration: 1.25,
            stagger: 0.055,
            ease,
            scrollTrigger: { trigger: element, start: "top 88%", once: true },
          },
        );
      });

      gsap.utils.toArray<HTMLElement>("[data-fade]").forEach((element) => {
        gsap.fromTo(
          element,
          { y: 36, autoAlpha: 0 },
          {
            y: 0,
            autoAlpha: 1,
            duration: 1.2,
            delay: Number(element.dataset.fade) || 0,
            ease,
            scrollTrigger: { trigger: element, start: "top 90%", once: true },
          },
        );
      });

      gsap.utils.toArray<HTMLElement>("[data-stagger]").forEach((group) => {
        gsap.fromTo(
          group.children,
          { y: 40, autoAlpha: 0 },
          {
            y: 0,
            autoAlpha: 1,
            duration: 1.1,
            stagger: 0.08,
            ease,
            scrollTrigger: { trigger: group, start: "top 88%", once: true },
          },
        );
      });

      gsap.utils.toArray<HTMLElement>("[data-clip]").forEach((element) => {
        const inner = element.querySelector("img, video");
        const timeline = gsap.timeline({
          scrollTrigger: { trigger: element, start: "top 85%", once: true },
        });
        timeline.fromTo(
          element,
          { clipPath: "inset(100% 0% 0% 0%)" },
          { clipPath: "inset(0% 0% 0% 0%)", duration: 1.5, ease: "expo.inOut" },
        );
        if (inner) {
          timeline.fromTo(inner, { scale: 1.3 }, { scale: 1, duration: 1.9, ease }, 0);
        }
      });

      gsap.utils.toArray<HTMLElement>("[data-speed]").forEach((element) => {
        const speed = Number(element.dataset.speed) || 0.1;
        gsap.fromTo(
          element,
          { yPercent: speed * 100 },
          {
            yPercent: -speed * 100,
            ease: "none",
            scrollTrigger: {
              trigger: element.parentElement ?? element,
              start: "top bottom",
              end: "bottom top",
              scrub: true,
            },
          },
        );
      });

      gsap.utils.toArray<HTMLElement>("[data-scrub-words]").forEach((element) => {
        gsap.fromTo(
          element.querySelectorAll(".sw"),
          { opacity: 0.14 },
          {
            opacity: 1,
            stagger: 0.1,
            ease: "none",
            scrollTrigger: {
              trigger: element,
              start: "top 78%",
              end: "bottom 45%",
              scrub: 0.6,
            },
          },
        );
      });

      gsap.utils.toArray<HTMLElement>("[data-rule]").forEach((element) => {
        gsap.fromTo(
          element,
          { scaleX: 0, transformOrigin: "0% 50%" },
          {
            scaleX: 1,
            duration: 1.6,
            ease: "expo.inOut",
            scrollTrigger: { trigger: element, start: "top 92%", once: true },
          },
        );
      });
    });

    const refresh = window.setTimeout(() => ScrollTrigger.refresh(), 400);
    const onLoad = () => ScrollTrigger.refresh();
    window.addEventListener("load", onLoad);

    return () => {
      window.clearTimeout(refresh);
      window.removeEventListener("load", onLoad);
      context.revert();
    };
  }, [pathname]);

  return null;
}
