"use client";
//app/components/HeroSection.tsx
import Button, { ArrowRightIcon, MailIcon } from "@/components/ui/Button";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section
      className="relative bg-gradient-to-br from-slate-50 via-white to-blue-50 overflow-hidden"
      aria-label="Hero section"
    >
      {/* Subtle background decoration */}
      <div className="absolute inset-0 overflow-hidden opacity-40">
        <div className="absolute top-20 right-20 w-96 h-96 bg-blue-100 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-slate-100 rounded-full filter blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-3 sm:px-4 lg:px-8 py-8 sm:py-12 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-6 lg:gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="text-center lg:text-left space-y-3 sm:space-y-4 lg:space-y-6">
            {/* Main Heading */}
            <h1 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 leading-tight">
              Empowering Through
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-slate-700 mt-1">
                Education & Service
              </span>
            </h1>

            {/* Description */}
            <p className="text-sm sm:text-base lg:text-lg text-gray-600 leading-relaxed max-w-xl mx-auto lg:mx-0">
              Muhammad Sazzad Hossain Siddiqui, Ph.D., preferably known as Dr. Sazzad Siddiqui, is an Associate Professor & Chairman (Acting) Department of Peace and Conflict Studies in the Department of Peace and Conflict Studies (PACS) at the University of Dhaka, Bangladesh. His academic career began in 2008 when he joined the Department as a Lecturer. His dedication to teaching and research ...
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-2 sm:gap-3 lg:gap-4 py-3 lg:py-4">
              <div className="text-center lg:text-left">
                <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-blue-600">
                  20+
                </div>
                <div className="text-[10px] sm:text-xs lg:text-sm text-gray-600 mt-0.5 lg:mt-1">
                  Years Teaching
                </div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-slate-700">
                  15
                </div>
                <div className="text-[10px] sm:text-xs lg:text-sm text-gray-600 mt-0.5 lg:mt-1">
                  Published Books
                </div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-blue-500">
                  50K+
                </div>
                <div className="text-[10px] sm:text-xs lg:text-sm text-gray-600 mt-0.5 lg:mt-1">
                  Students Impacted
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 justify-center lg:justify-start pt-1 lg:pt-2">
              <Button
                href="/about"
                variant="primary"
                size="lg"
                icon={<ArrowRightIcon />}
              >
                Learn More
              </Button>

              <Button
                href="/contact"
                variant="outline"
                size="lg"
                icon={<MailIcon />}
              >
                Get In Touch
              </Button>
            </div>

            {/* Credentials */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 sm:gap-4 lg:gap-5 pt-2 lg:pt-3">
              <div className="flex items-center gap-1.5 sm:gap-2">
                <svg
                  className="w-3.5 h-3.5 sm:w-4 sm:h-4 lg:w-5 lg:h-5 text-blue-600"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="text-[10px] sm:text-xs lg:text-sm text-gray-700 font-medium">
                  TEDx Speaker
                </span>
              </div>
              <div className="flex items-center gap-1.5 sm:gap-2">
                <svg
                  className="w-3.5 h-3.5 sm:w-4 sm:h-4 lg:w-5 lg:h-5 text-blue-600"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <span className="text-[10px] sm:text-xs lg:text-sm text-gray-700 font-medium">
                  Featured in Forbes
                </span>
              </div>
            </div>
          </div>

          {/* Right Column - Image (Desktop: Circle, Mobile: Rectangle) */}
          <div className="relative order-first lg:order-last">
            <div className="relative mx-auto max-w-[280px] sm:max-w-sm lg:max-w-lg">
              {/* Desktop: Circular image with decorative ring */}
              <div className="hidden lg:block">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-slate-600 rounded-full transform scale-105 opacity-10"></div>
                <div className="relative w-full aspect-square rounded-full overflow-hidden shadow-2xl border-8 border-white">
                  <Image
                    src="/images/hero-images/Sazzad.jpg"
                    alt="Dr. Sazzad Siddiqui - Educator, Author, and Public Servant"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 280px, 500px"
                    priority
                  />
                </div>
              </div>

              {/* Mobile: Rectangle image */}
              <div className="lg:hidden">
                <div className="relative w-full aspect-[4/5] rounded-2xl overflow-hidden shadow-xl">
                  <Image
                    src="/images/hero-images/Sazzad.jpg"
                    alt="Dr. Sazzad Siddiqui - Educator, Author, and Public Servant"
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 280px, (max-width: 1024px) 400px, 500px"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
