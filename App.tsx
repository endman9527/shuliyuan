import React, { useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight, Menu, Maximize2 } from 'lucide-react';
import { SlideFactory } from './components/SlideFactory';

const TOTAL_SLIDES = 19;

const App: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => Math.min(prev + 1, TOTAL_SLIDES - 1));
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => Math.max(prev - 1, 0));
  }, []);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === 'Space') {
        nextSlide();
      } else if (e.key === 'ArrowLeft') {
        prevSlide();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [nextSlide, prevSlide]);

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().then(() => setIsFullscreen(true));
    } else {
      document.exitFullscreen().then(() => setIsFullscreen(false));
    }
  };

  return (
    <div className="w-screen h-screen flex flex-col bg-zinc-900 text-white relative font-sans overflow-hidden">
      
      {/* Top Bar */}
      <div className="h-12 bg-black/40 backdrop-blur-md flex items-center justify-between px-6 border-b border-white/10 z-20 absolute top-0 w-full">
        <div className="flex items-center space-x-2">
          <div className="w-6 h-6 bg-brand rounded-sm flex items-center justify-center font-bold text-xs text-white">
            S
          </div>
          <span className="text-sm font-medium tracking-wide opacity-80">成都蜀利元机电有限公司</span>
        </div>
        <div className="flex items-center space-x-4">
           <span className="text-xs text-zinc-400">
            {currentSlide + 1} / {TOTAL_SLIDES}
          </span>
          <button 
            onClick={toggleFullscreen}
            className="p-1.5 hover:bg-white/10 rounded-md transition-colors"
            title="全屏模式"
          >
            <Maximize2 size={16} />
          </button>
        </div>
      </div>

      {/* Main Slide Stage */}
      <div className="flex-1 relative flex items-center justify-center bg-zinc-900 overflow-hidden">
        {/* Render only the current slide for performance, or wrap in a transition group if using a library */}
        <div className="w-full h-full max-w-[1920px] max-h-[1080px] aspect-video bg-white text-zinc-800 shadow-2xl relative">
          <SlideFactory index={currentSlide} />
        </div>
      </div>

      {/* Navigation Controls (Overlay) */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center space-x-6 z-30 bg-black/60 backdrop-blur-lg px-6 py-3 rounded-full border border-white/10 shadow-xl">
        <button 
          onClick={prevSlide}
          disabled={currentSlide === 0}
          className="p-2 hover:bg-white/20 rounded-full disabled:opacity-30 disabled:hover:bg-transparent transition-all"
        >
          <ChevronLeft size={24} color="white" />
        </button>

        <div className="text-white text-sm font-medium tabular-nums select-none">
          {currentSlide === 0 ? '封面' : currentSlide === TOTAL_SLIDES - 1 ? '结束' : `Page ${currentSlide + 1}`}
        </div>

        <button 
          onClick={nextSlide}
          disabled={currentSlide === TOTAL_SLIDES - 1}
          className="p-2 hover:bg-white/20 rounded-full disabled:opacity-30 disabled:hover:bg-transparent transition-all"
        >
          <ChevronRight size={24} color="white" />
        </button>
      </div>

      {/* Progress Bar */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-zinc-800 z-30">
        <div 
          className="h-full bg-brand transition-all duration-500 ease-out"
          style={{ width: `${((currentSlide + 1) / TOTAL_SLIDES) * 100}%` }}
        />
      </div>

    </div>
  );
};

export default App;