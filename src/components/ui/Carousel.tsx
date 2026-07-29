import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import type { ReactNode } from "react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

interface CarouselProps<T> {
  items: T[];
  renderItem: (item: T, index: number) => ReactNode;
  slidesPerView?: number;
  autoplay?: boolean;
  className?: string;
}

export function Carousel<T>({ items, renderItem, slidesPerView = 1, autoplay = true, className }: CarouselProps<T>) {
  return (
    <Swiper
      modules={[Autoplay, Navigation, Pagination]}
      spaceBetween={24}
      slidesPerView={1}
      breakpoints={{
        768: { slidesPerView: Math.min(2, slidesPerView) },
        1024: { slidesPerView },
      }}
      autoplay={autoplay ? { delay: 5000, disableOnInteraction: false } : false}
      pagination={{ clickable: true }}
      navigation
      className={className}
    >
      {items.map((item, i) => (
        <SwiperSlide key={i} className="h-auto pb-12">
          {renderItem(item, i)}
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
