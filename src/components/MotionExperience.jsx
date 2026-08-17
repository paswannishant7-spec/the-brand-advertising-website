import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";

export default function MotionExperience() {
  const location = useLocation();
  const progressRef = useRef(null);

  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion) return undefined;

    const cards = [...document.querySelectorAll("article, .shadow-card, .shadow-soft")];
    cards.forEach((card, index) => {
      card.classList.add("motion-card");
      card.style.setProperty("--motion-order", index % 6);
    });

    const canHover = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    const cardPointerHandlers = canHover
      ? cards.map((card) => {
          let bounds;
          let pointerFrame = 0;
          let pointerX = 0;
          let pointerY = 0;

          const onEnter = () => {
            bounds = card.getBoundingClientRect();
          };
          const onMove = (event) => {
            pointerX = event.clientX;
            pointerY = event.clientY;
            if (pointerFrame) return;
            pointerFrame = window.requestAnimationFrame(() => {
              pointerFrame = 0;
              if (!bounds) bounds = card.getBoundingClientRect();
              const x = pointerX - bounds.left;
              const y = pointerY - bounds.top;
              card.style.setProperty("--spot-x", `${x}px`);
              card.style.setProperty("--spot-y", `${y}px`);
              card.style.setProperty("--tilt-y", `${((x / bounds.width) - 0.5) * 6}deg`);
              card.style.setProperty("--tilt-x", `${((y / bounds.height) - 0.5) * -6}deg`);
            });
          };
          const onLeave = () => {
            bounds = undefined;
            if (pointerFrame) window.cancelAnimationFrame(pointerFrame);
            pointerFrame = 0;
            card.style.removeProperty("--spot-x");
            card.style.removeProperty("--spot-y");
            card.style.setProperty("--tilt-y", "0deg");
            card.style.setProperty("--tilt-x", "0deg");
          };

          card.addEventListener("pointerenter", onEnter, { passive: true });
          card.addEventListener("pointermove", onMove, { passive: true });
          card.addEventListener("pointerleave", onLeave, { passive: true });
          return { card, onEnter, onMove, onLeave };
        })
      : [];

    const observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("motion-visible");
          observer.unobserve(entry.target);
        }
      }),
      { threshold: 0.12, rootMargin: "0px 0px -6% 0px" }
    );

    cards.forEach((card) => observer.observe(card));

    let scrollFrame = 0;
    const updateScroll = () => {
      scrollFrame = 0;
      const maximum = document.documentElement.scrollHeight - window.innerHeight;
      const ratio = maximum > 0 ? window.scrollY / maximum : 0;
      if (progressRef.current) progressRef.current.style.transform = `scaleX(${ratio})`;
    };
    const requestScrollUpdate = () => {
      if (!scrollFrame) scrollFrame = window.requestAnimationFrame(updateScroll);
    };

    updateScroll();
    window.addEventListener("scroll", requestScrollUpdate, { passive: true });

    return () => {
      observer.disconnect();
      if (scrollFrame) window.cancelAnimationFrame(scrollFrame);
      cardPointerHandlers.forEach(({ card, onEnter, onMove, onLeave }) => {
        card.removeEventListener("pointerenter", onEnter);
        card.removeEventListener("pointermove", onMove);
        card.removeEventListener("pointerleave", onLeave);
      });
      window.removeEventListener("scroll", requestScrollUpdate);
    };
  }, [location.pathname]);

  return (
    <>
      <div className="route-cinematic-curtain" key={location.pathname} aria-hidden="true">
        <i /><i /><i />
      </div>
      <div className="site-scroll-progress" ref={progressRef} aria-hidden="true" />
    </>
  );
}
