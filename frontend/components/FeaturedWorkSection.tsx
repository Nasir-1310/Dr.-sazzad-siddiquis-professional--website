"use client";
import { useState } from "react";
import Image from "next/image";

const FeaturedWorkSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const categories = [
    { id: "all", label: "All Work" },
    { id: "books", label: "Books" },
    { id: "research", label: "Research" },
    { id: "talks", label: "Talks & Media" },
  ];

  const featuredWorks = [
    {
      id: 1,
      category: "books",
      title: "Peace and Conflict in South Asia",
      subtitle: "Contemporary Perspectives",
      description: "An in-depth exploration of regional security dynamics, conflict resolution mechanisms, and peacebuilding strategies in South Asian contexts.",
      image: "/images/featured/book-1.jpg",
      year: "2022",
      type: "Book",
      link: "/publications/peace-conflict-south-asia",
      featured: true,
      stats: { downloads: "5K+", citations: "120+" }
    },
    {
      id: 2,
      category: "research",
      title: "Rethinking Peacebuilding Strategies",
      subtitle: "Journal of Peace Studies",
      description: "Groundbreaking research on innovative approaches to sustainable peace in fragile states, examining case studies from Southeast Asia.",
      image: "/images/featured/research-1.jpg",
      year: "2023",
      type: "Research Paper",
      link: "/publications/rethinking-peacebuilding",
      featured: true,
      stats: { citations: "85+", impact: "High" }
    },
    {
      id: 3,
      category: "talks",
      title: "TEDx Talk: Building Bridges",
      subtitle: "Education as a Tool for Peace",
      description: "Inspiring talk on how education can transform conflict zones and create lasting peace through community engagement and empowerment.",
      image: "/images/featured/tedx-talk.jpg",
      year: "2023",
      type: "TEDx Talk",
      link: "/media/tedx-building-bridges",
      featured: true,
      stats: { views: "250K+", reach: "Global" }
    },
    {
      id: 4,
      category: "books",
      title: "Development and Security Nexus",
      subtitle: "Bangladesh Perspectives",
      description: "Comprehensive analysis of the interconnections between development initiatives and security challenges in Bangladesh's evolving landscape.",
      image: "/images/featured/book-2.jpg",
      year: "2020",
      type: "Book",
      link: "/publications/development-security-nexus",
      featured: false,
      stats: { downloads: "3.5K+", citations: "90+" }
    },
    {
      id: 5,
      category: "research",
      title: "Youth Engagement in Peacebuilding",
      subtitle: "International Peace Research",
      description: "Examining the critical role of youth participation in conflict prevention and peace processes across South Asian communities.",
      image: "/images/featured/research-2.jpg",
      year: "2022",
      type: "Research",
      link: "/publications/youth-peacebuilding",
      featured: false,
      stats: { citations: "65+", impact: "Medium" }
    },
    {
      id: 6,
      category: "talks",
      title: "Forbes Feature Interview",
      subtitle: "Future of Peace Education",
      description: "Featured discussion on innovative approaches to peace education and the role of academia in addressing global conflicts.",
      image: "/images/featured/forbes-feature.jpg",
      year: "2023",
      type: "Media Feature",
      link: "/media/forbes-interview",
      featured: false,
      stats: { reach: "International", platform: "Forbes" }
    },
  ];

  const filteredWorks = activeCategory === "all" 
    ? featuredWorks 
    : featuredWorks.filter(work => work.category === activeCategory);

  return (
    <section 
      className="relative bg-gradient-to-b from-white via-slate-50 to-white py-12 sm:py-16 lg:py-24"
      aria-label="Featured work section"
    >
      <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <div className="inline-block">
            <div className="flex items-center gap-2 mb-3 sm:mb-4">
              <div className="h-px w-8 sm:w-12 bg-gradient-to-r from-transparent to-blue-600"></div>
              <span className="text-xs sm:text-sm font-semibold text-blue-600 uppercase tracking-wider">
                Featured Work
              </span>
              <div className="h-px w-8 sm:w-12 bg-gradient-to-l from-transparent to-blue-600"></div>
            </div>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 mb-3 sm:mb-4">
            Notable Contributions to
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-slate-700 mt-1">
              Peace & Conflict Studies
            </span>
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Explore a selection of influential publications, research papers, and media appearances 
            that have shaped discourse in peace education and conflict resolution
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 lg:gap-4 mb-8 sm:mb-10 lg:mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`
                px-4 sm:px-5 lg:px-6 py-2 sm:py-2.5 lg:py-3 
                rounded-full text-xs sm:text-sm lg:text-base font-medium 
                transition-all duration-300 ease-in-out
                ${
                  activeCategory === category.id
                    ? "bg-gradient-to-r from-blue-600 to-slate-700 text-white shadow-lg scale-105"
                    : "bg-white text-gray-700 hover:bg-slate-100 hover:shadow-md border border-slate-200"
                }
              `}
              aria-label={`Filter by ${category.label}`}
            >
              {category.label}
            </button>
          ))}
        </div>

        {/* Featured Works Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 lg:gap-6 xl:gap-8">
          {filteredWorks.map((work) => (
            <article
              key={work.id}
              className="group bg-white rounded-2xl sm:rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
            >
              {/* Image Container */}
              <div className="relative w-full aspect-[4/3] overflow-hidden bg-gradient-to-br from-blue-100 to-slate-100">
                <div className="absolute inset-0 flex items-center justify-center">
                  {/* Placeholder - Replace with actual images */}
                  <div className="w-full h-full bg-gradient-to-br from-blue-200 via-slate-200 to-blue-100 flex items-center justify-center">
                    <div className="text-center p-4">
                      <div className="text-4xl sm:text-5xl lg:text-6xl mb-2">
                        {work.type === "Book" ? "📚" : work.type === "Research Paper" || work.type === "Research" ? "📊" : "🎤"}
                      </div>
                      <p className="text-xs sm:text-sm text-gray-600 font-medium">{work.type}</p>
                    </div>
                  </div>
                </div>
                
                {/* Overlay on Hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Featured Badge */}
                {work.featured && (
                  <div className="absolute top-3 sm:top-4 right-3 sm:right-4 z-10">
                    <span className="inline-flex items-center gap-1 bg-gradient-to-r from-blue-600 to-slate-700 text-white text-[10px] sm:text-xs font-bold px-2 sm:px-3 py-1 rounded-full shadow-lg">
                      <svg className="w-2.5 h-2.5 sm:w-3 sm:h-3" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                      Featured
                    </span>
                  </div>
                )}

                {/* Year Badge */}
                <div className="absolute top-3 sm:top-4 left-3 sm:left-4 z-10">
                  <span className="inline-block bg-white/95 backdrop-blur-sm text-gray-900 text-[10px] sm:text-xs font-bold px-2 sm:px-3 py-1 rounded-full shadow-md">
                    {work.year}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-4 sm:p-5 lg:p-6">
                {/* Type Tag */}
                <span className="inline-block text-[10px] sm:text-xs font-semibold text-blue-600 bg-blue-50 px-2 sm:px-3 py-1 rounded-full mb-2 sm:mb-3">
                  {work.type}
                </span>

                {/* Title */}
                <h3 className="text-base sm:text-lg lg:text-xl font-bold text-gray-900 mb-1 sm:mb-2 line-clamp-2 group-hover:text-blue-600 transition-colors duration-300">
                  {work.title}
                </h3>

                {/* Subtitle */}
                <p className="text-xs sm:text-sm text-gray-600 font-medium mb-2 sm:mb-3">
                  {work.subtitle}
                </p>

                {/* Description */}
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed mb-3 sm:mb-4 line-clamp-3">
                  {work.description}
                </p>

                {/* Stats */}
                <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-3 sm:mb-4 pt-3 sm:pt-4 border-t border-slate-100">
                  {Object.entries(work.stats).map(([key, value]) => (
                    <div key={key} className="flex items-center gap-1 sm:gap-1.5">
                      <svg className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span className="text-[10px] sm:text-xs text-gray-700">
                        <span className="font-semibold capitalize">{key}:</span> {value}
                      </span>
                    </div>
                  ))}
                </div>

                {/* CTA Button */}
                <a
                  href={work.link}
                  className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-blue-600 hover:text-blue-700 transition-colors duration-300 group/link"
                  aria-label={`Learn more about ${work.title}`}
                >
                  <span>Learn More</span>
                  <svg 
                    className="w-3.5 h-3.5 sm:w-4 sm:h-4 transform group-hover/link:translate-x-1 transition-transform duration-300" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </article>
          ))}
        </div>

        {/* View All CTA */}
        <div className="text-center mt-8 sm:mt-10 lg:mt-14">
          <a
            href="/publications"
            className="inline-flex items-center gap-2 sm:gap-3 px-6 sm:px-8 lg:px-10 py-3 sm:py-3.5 lg:py-4 
                     bg-gradient-to-r from-blue-600 to-slate-700 text-white 
                     rounded-full font-semibold text-sm sm:text-base lg:text-lg
                     shadow-xl hover:shadow-2xl transform hover:scale-105 
                     transition-all duration-300"
            aria-label="View all publications"
          >
            <span>View All Publications</span>
            <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default FeaturedWorkSection;