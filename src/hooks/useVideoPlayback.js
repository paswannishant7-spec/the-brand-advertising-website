import { useEffect, useRef } from "react";

export default function useVideoPlayback() {
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return undefined;

    let visible = true;
    const syncPlayback = () => {
      if (document.hidden || !visible) {
        video.pause();
        return;
      }
      video.play().catch(() => undefined);
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        visible = entry.isIntersecting;
        syncPlayback();
      },
      { threshold: 0.05 }
    );

    observer.observe(video);
    document.addEventListener("visibilitychange", syncPlayback);
    syncPlayback();

    return () => {
      observer.disconnect();
      document.removeEventListener("visibilitychange", syncPlayback);
    };
  }, []);

  return videoRef;
}
