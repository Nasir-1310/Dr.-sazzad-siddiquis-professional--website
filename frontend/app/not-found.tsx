"use client";

import Link from "next/link";
import { Home, Search, ArrowLeft, FileQuestion } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100 flex items-center justify-center px-4 py-12">
      <div className="max-w-2xl w-full text-center space-y-8">
        
        {/* Icon */}
        <div className="flex justify-center">
          <div className="relative">
            <div className="absolute inset-0 bg-blue-500/20 blur-3xl rounded-full animate-pulse" />
            <div className="relative bg-white rounded-full p-8 shadow-xl ring-1 ring-slate-200">
              <FileQuestion className="w-20 h-20 text-blue-600" strokeWidth={1.5} />
            </div>
          </div>
        </div>

        {/* Message */}
        <div className="space-y-2">
          <h1 className="text-5xl sm:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
            Page In Progress
          </h1>
          <p className="text-xl sm:text-2xl font-semibold text-slate-800">
            This page is currently under construction
          </p>
        </div>

        {/* Description */}
        <p className="text-base sm:text-lg text-slate-600 max-w-md mx-auto leading-relaxed">
          We’re actively building this section of our website.  
          Some routes and features may not be available yet.  
          Please check back soon!
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
          <Link
            href="/"
            className="group inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
          >
            <Home className="w-5 h-5" />
            Back to Home
          </Link>
          
          <button
            onClick={() => window.history.back()}
            className="group inline-flex items-center gap-2 px-6 py-3 bg-white text-slate-700 font-medium rounded-lg shadow-md hover:shadow-lg transition-all duration-300 ring-1 ring-slate-200 hover:ring-slate-300"
          >
            <ArrowLeft className="w-5 h-5" />
            Go Back
          </button>
        </div>

        {/* Search Suggestion */}
        <div className="pt-8 border-t border-slate-200">
          <p className="text-sm text-slate-500 mb-4">
            Looking for something specific?
          </p>
          <div className="max-w-md mx-auto relative">
            <input
              type="text"
              placeholder="Search our site..."
              className="w-full px-4 py-3 pl-11 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-slate-700"
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  const query = e.currentTarget.value;
                  if (query.trim()) {
                    window.location.href = `/search?q=${encodeURIComponent(query)}`;
                  }
                }
              }}
            />
            <Search className="w-5 h-5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
          </div>
        </div>

        {/* Quick Links */}
        <div className="pt-8">
          <p className="text-sm font-medium text-slate-700 mb-4">Quick Links</p>
          <div className="flex flex-wrap gap-3 justify-center">
            <Link href="/" className="text-sm text-blue-600 hover:text-blue-700 hover:underline">
              Home
            </Link>
            <span className="text-slate-300">•</span>
            <Link href="/contact" className="text-sm text-blue-600 hover:text-blue-700 hover:underline">
              Contact
            </Link>
            <span className="text-slate-300">•</span>
            <Link href="/about" className="text-sm text-blue-600 hover:text-blue-700 hover:underline">
              About
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}
