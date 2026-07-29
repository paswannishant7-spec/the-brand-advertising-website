import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";

export default function MotionExperience() {
  const location = useLocation();
  const glowRef = useRef(null);
  const progressRef = useRef(null);
  const canvasRef = useRef(null);

  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion) return undefined;

    const cards = [...document.querySelectorAll("article, .shadow-card, .shadow-soft")];
    cards.forEach((card, index) => {
      card.classList.add("motion-card");
      card.style.setProperty("--motion-order", index % 6);
    });

    const cardPointerHandlers = cards.map((card) => {
      const onMove = (event) => {
        const bounds = card.getBoundingClientRect();
        const x = event.clientX - bounds.left;
        const y = event.clientY - bounds.top;
        card.style.setProperty("--spot-x", `${x}px`);
        card.style.setProperty("--spot-y", `${y}px`);
        card.style.setProperty("--tilt-y", `${((x / bounds.width) - 0.5) * 8}deg`);
        card.style.setProperty("--tilt-x", `${((y / bounds.height) - 0.5) * -8}deg`);
      };
      const onLeave = () => {
        card.style.removeProperty("--spot-x");
        card.style.removeProperty("--spot-y");
        card.style.setProperty("--tilt-y", "0deg");
        card.style.setProperty("--tilt-x", "0deg");
      };
      card.addEventListener("pointermove", onMove, { passive: true });
      card.addEventListener("pointerleave", onLeave);
      return { card, onMove, onLeave };
    });

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

    const updateScroll = () => {
      const maximum = document.documentElement.scrollHeight - window.innerHeight;
      const ratio = maximum > 0 ? window.scrollY / maximum : 0;
      document.documentElement.style.setProperty("--page-scroll", ratio);
      if (progressRef.current) progressRef.current.style.transform = `scaleX(${ratio})`;
    };

    const updatePointer = (event) => {
      if (!glowRef.current) return;
      glowRef.current.style.transform = `translate3d(${event.clientX}px, ${event.clientY}px, 0)`;
    };

    updateScroll();
    window.addEventListener("scroll", updateScroll, { passive: true });
    window.addEventListener("pointermove", updatePointer, { passive: true });

    return () => {
      observer.disconnect();
      cardPointerHandlers.forEach(({ card, onMove, onLeave }) => {
        card.removeEventListener("pointermove", onMove);
        card.removeEventListener("pointerleave", onLeave);
      });
      window.removeEventListener("scroll", updateScroll);
      window.removeEventListener("pointermove", updatePointer);
    };
  }, [location.pathname]);

  useEffect(() => {
    const canvas = canvasRef.current;
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!canvas || reduceMotion) return undefined;

    const context = canvas.getContext("2d");
    let frame;
    let width;
    let height;
    let dpr;
    const pointer = { x: -1000, y: -1000 };
    let particles = [];

    const createParticles = () => {
      const count = window.innerWidth < 700 ? 22 : 48;
      particles = Array.from({ length: count }, (_, index) => ({
        x: (index * 173) % width,
        y: (index * 97) % height,
        vx: ((index % 5) - 2) * 0.08,
        vy: -0.08 - (index % 4) * 0.035,
        radius: 0.8 + (index % 3) * 0.55,
      }));
    };

    const resize = () => {
      dpr = Math.min(window.devicePixelRatio || 1, 1.5);
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      context.setTransform(dpr, 0, 0, dpr, 0, 0);
      createParticles();
    };

    const onPointer = (event) => {
      pointer.x = event.clientX;
      pointer.y = event.clientY;
    };

    const draw = () => {
      context.clearRect(0, 0, width, height);
      particles.forEach((particle, index) => {
        const dx = particle.x - pointer.x;
        const dy = particle.y - pointer.y;
        const distance = Math.hypot(dx, dy);
        if (distance < 130 && distance > 0) {
          particle.x += (dx / distance) * 0.7;
          particle.y += (dy / distance) * 0.7;
        }
        particle.x += particle.vx;
        particle.y += particle.vy;
        if (particle.y < -8) particle.y = height + 8;
        if (particle.x < -8) particle.x = width + 8;
        if (particle.x > width + 8) particle.x = -8;

        context.beginPath();
        context.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
        context.fillStyle = index % 3 === 0 ? "rgba(56,189,248,.36)" : "rgba(242,169,0,.34)";
        context.shadowBlur = 12;
        context.shadowColor = index % 3 === 0 ? "#38bdf8" : "#f2a900";
        context.fill();
      });
      frame = requestAnimationFrame(draw);
    };

    resize();
    draw();
    window.addEventListener("resize", resize);
    window.addEventListener("pointermove", onPointer, { passive: true });
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("resize", resize);
      window.removeEventListener("pointermove", onPointer);
    };
  }, []);

  return (
    <>
      <div className="route-cinematic-curtain" key={location.pathname} aria-hidden="true">
        <i /><i /><i />
      </div>
      <div className="site-scroll-progress" ref={progressRef} aria-hidden="true" />
    </>
  );
}
