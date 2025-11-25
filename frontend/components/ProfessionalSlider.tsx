"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import Button, { ArrowRightIcon, ArrowLeftIcon } from "@/components/ui/Button";

type Slide = {
  id: string;
  title: string;
  cta: { label: string; href: string };
  image: string;
  indicatorColor: string;
};

const SLIDES: Slide[] = [
  {
    id: "public-voice1",
    title: "Negotiating peace through research-backed diplomacy.",
    cta: { label: "Read More", href: "/platform" },
    image: "/slider-images/slider-1.jpg",
    indicatorColor: "#0EA5E9",
  },
  {
    id: "public-voice",
    title: "Elevating peace studies with actionable scholarship.",
    cta: { label: "Read More", href: "/teaching" },
    image: "/slider-images/slider-2.jpg",
    indicatorColor: "#8B5CF6",
  },
];

const AUTO_PLAY_INTERVAL = 3000;

export default function ProfessionalSlider() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const activeSlide = SLIDES[activeIndex];

  const next = useCallback(() => setActiveIndex((i) => (i + 1) % SLIDES.length), []);
  const prev = useCallback(() => setActiveIndex((i) => (i === 0 ? SLIDES.length - 1 : i - 1)), []);

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(next, AUTO_PLAY_INTERVAL);
    return () => clearInterval(timer);
  }, [isPaused, next]);

  return (
    <section className="bg-white py-8 md:py-12 lg:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 md:space-y-10">

        {/* Header */}
        <div className="text-center space-y-3">
          <p className="text-xs sm:text-sm uppercase tracking-[0.25em] text-blue-600">Latest talk</p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 leading-tight px-4">
            Guiding change across education, policy, and public life.
          </h2>
        </div>

        {/* Slider Container with 8px padding */}
        <div
          className="group relative rounded-2xl lg:rounded-3xl overflow-hidden shadow-2xl ring-1 ring-slate-200/60 p-2"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Inner container with aspect ratio */}
          <div className="relative aspect-[4/3] sm:aspect-[16/9] lg:aspect-[21/9] rounded-xl lg:rounded-2xl overflow-hidden">

            {/* Background Images - All Screens */}
            {SLIDES.map((slide, i) => (
              <div
                key={slide.id}
                className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                  i === activeIndex ? "opacity-100" : "opacity-0"
                }`}
              >
                <Image
                  src={slide.image}
                  alt={slide.title}
                  fill
                  className="object-contain"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 1280px"
                  quality={90}
                  priority={i === 0}
                />
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/50 to-black/20" />
              </div>
            ))}

            {/* Content */}
            <div className="relative h-full flex flex-col justify-end p-6 sm:p-8 lg:p-12 xl:p-16 text-white">
              <div className="max-w-4xl space-y-4 sm:space-y-6 lg:space-y-7">

                {/* Title */}
                <h3 className="text-xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight drop-shadow-2xl">
                  {activeSlide.title}
                </h3>

                {/* CTA Button */}
                <Button
                  href={activeSlide.cta.href}
                  variant="gradient"
                  size="lg"
                  icon={<ArrowRightIcon />}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="shadow-xl hover:shadow-2xl text-[10px]  sm:text-base"
                >
                  {activeSlide.cta.label}
                </Button>
              </div>

              {/* Navigation Arrows */}
              <div className="absolute right-4 bottom-4 sm:right-6 sm:bottom-6 flex gap-2 sm:gap-3">
                <button
                  onClick={prev}
                  className="p-2.5 sm:p-3 rounded-full bg-white/20 backdrop-blur-md border border-white/40 text-white hover:bg-white/30 transition-all opacity-0 group-hover:opacity-100"
                  aria-label="Previous"
                >
                  <ArrowLeftIcon />
                </button>
                <button
                  onClick={next}
                  className="p-2.5 sm:p-3 rounded-full bg-white/20 backdrop-blur-md border border-white/40 text-white hover:bg-white/30 transition-all opacity-0 group-hover:opacity-100"
                  aria-label="Next"
                >
                  <ArrowRightIcon />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Image Guidelines */}
        {/* <div className="text-center text-sm text-slate-500 italic">
          <p>Recommended image dimensions: <strong>1920×1080px (16:9)</strong> or <strong>2100×900px (21:9)</strong></p>
          <p className="mt-1">Images will be displayed with 8px padding on all sides to prevent cropping</p>
        </div> */}
      </div>
    </section>
  );
}