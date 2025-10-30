import { useState, useEffect, useRef, useCallback } from 'react';
import { Heart, List, User, Users, Image } from 'lucide-react';

const OnboardingScreens = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const containerRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (containerRef.current) {
        const scrollTop = window.scrollY;
        const windowHeight = window.innerHeight;
        const documentHeight = document.documentElement.scrollHeight;
        
        // Calculate scroll progress (0 to 2 for 3 screens)
        const maxScroll = documentHeight - windowHeight;
        const progress = Math.min((scrollTop / maxScroll) * 2, 2);
        setScrollProgress(progress);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const screens = [
    {
      id: 'goals',
      title: 'Stay motivated and reach your goals',
      description: 'Speak Tutor keeps you motivated and accountable to achieve your goals. Learning a language is better with someone by your side.',
      content: (
        <div className="flex flex-col items-center md:gap-4 w-full max-w-md mx-auto">
          <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center mb-4">
            <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center">
              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
              <div className="w-1.5 h-1.5 bg-blue-500 rounded-full ml-1"></div>
            </div>
          </div>
          
          <div className="flex flex-col md:flex-row gap-4 w-full">
            <div className="flex-1 bg-pink-500 rounded-3xl p-6 text-white transition-transform duration-300 hover:scale-105 hover:shadow-xl cursor-pointer">
              <Heart className="w-8 h-8 mb-3" />
              <p className="text-base font-medium">You're interested in traveling, and exploring new cultures.</p>
            </div>
            
            <div className="flex-1 bg-blue-600 rounded-3xl p-6 text-white transition-transform duration-300 hover:scale-105 hover:shadow-xl cursor-pointer">
              <List className="w-8 h-8 mb-3" />
              <p className="text-base font-medium">We've created unique lessons and conversations based on those goals.</p>
            </div>
          </div>
          
          <button className="w-full bg-blue-600 text-white rounded-2xl py-3 px-8 text-base font-semibold mt-4 hover:bg-blue-700 transition-colors">
            Get Started
          </button>
        </div>
      )
    },
    {
      id: 'topics',
      title: 'Talk about anything, anytime, anywhere',
      description: 'Speak Tutor is your on-the-go conversational partner. Practice speaking on any topic, anytime, no matter how niche.',
      content: (
        <div className="flex flex-col items-center gap-4 w-full max-w-md mx-auto">
          <div className="bg-gray-50 rounded-3xl p-6 w-full space-y-3">
            <div className="text-sm text-gray-500 text-right mb-4">Create your own</div>
            
            <div className="flex items-center gap-4 p-4 bg-white rounded-2xl cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-lg">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                <User className="w-6 h-6 text-blue-600" />
              </div>
              <span className="text-base font-medium text-gray-800">Tourist</span>
            </div>
            
            <div className="flex items-center gap-4 p-4 bg-white rounded-2xl cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-lg">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                <Users className="w-6 h-6 text-blue-600" />
              </div>
              <span className="text-base font-medium text-gray-800">New friend</span>
            </div>
            
            <div className="flex items-center gap-4 p-4 bg-white rounded-2xl cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-lg">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                <Image className="w-6 h-6 text-blue-600" />
              </div>
              <span className="text-base font-medium text-gray-800">Talking about the best places to grab dinner in San Francisco.</span>
            </div>
            
            <button className="w-full bg-blue-600 text-white rounded-2xl py-3 px-8 text-base font-semibold mt-3 hover:bg-blue-700 transition-colors">
              Start chatting
            </button>
          </div>
        </div>
      )
    },
    {
      id: 'relationship',
      title: 'Build a relationship with your tutor',
      description: 'Speak Tutor designs a personalized curriculum as unique as you are by getting to know you on a surprisingly deep level.',
      content: (
        <div className="flex flex-col items-center gap-4 w-full max-w-md mx-auto">
          <div className="bg-white rounded-3xl shadow-xl overflow-hidden w-full max-w-sm border border-gray-200">
            <div className="bg-gray-50 px-6 py-3 flex justify-between items-center border-b border-gray-200">
              <span className="text-sm font-semibold">9:41</span>
              <div className="flex gap-1">
                <div className="w-4 h-3 bg-gray-800 rounded-sm"></div>
                <div className="w-4 h-3 bg-gray-800 rounded-sm"></div>
                <div className="w-4 h-3 bg-gray-800 rounded-sm"></div>
              </div>
            </div>
            
            <div className="p-6 space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <div className="w-5 h-5 bg-white rounded-full flex items-center justify-center">
                    <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                    <div className="w-1 h-1 bg-blue-500 rounded-full ml-0.5"></div>
                  </div>
                </div>
                
                <div className="flex-1">
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-semibold text-gray-900">Speak</span>
                    <span className="text-xs text-gray-400">now</span>
                  </div>
                  <p className="text-gray-700 text-sm">Hey Audrey, your trip to Mexico is in 6 days! Let's practice some vocabulary for your trip!</p>
                  
                  <div className="mt-4 bg-gradient-to-r from-blue-500 to-blue-400 rounded-2xl p-4 text-white cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-lg">
                    <div className="flex items-center gap-2 text-xs opacity-90 mb-2">
                      <div className="w-5 h-5 bg-white bg-opacity-20 rounded flex items-center justify-center">
                        <div className="w-3 h-2 border-b-2 border-white"></div>
                      </div>
                      <span>MADE FOR YOU</span>
                    </div>
                    <p className="font-semibold">Phrases to go through customs and air travel</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    }
  ];

  const getCardStyle = useCallback((index: number) => {
    const cardSpacing = 40; // How much of the next card peeks out
    
    if (scrollProgress < index) {
      // Card is still in stack
      return {
        transform: `translateY(${index * cardSpacing}px) scale(${1 - index * 0.05})`,
        opacity: 1,
        zIndex: 10 - index
      };
    } else if (scrollProgress >= index && scrollProgress < index + 1) {
      // Card is currently active/transitioning
      const progress = scrollProgress - index;
      const translateY = index * cardSpacing - (progress * (window.innerHeight + cardSpacing));
      const scale = 1 - index * 0.05 + (progress * index * 0.05);
      
      return {
        transform: `translateY(${translateY}px) scale(${scale})`,
        opacity: 1 - progress * 0.3,
        zIndex: 10 - index
      };
    } else {
      // Card has passed
      return {
        transform: `translateY(-${window.innerHeight}px)`,
        opacity: 0,
        zIndex: 10 - index
      };
    }
  },[scrollProgress, window.innerHeight]);

  return (
    <div ref={containerRef} className="bg-gradient-to-br from-gray-50 to-blue-50">
      {/* Spacer to enable scrolling */}
      <div style={{ height: '300vh' }}>
        {/* Fixed container for cards */}
        <div className="fixed inset-0 flex items-start justify-center pt-24 px-4 overflow-hidden pointer-events-none">
          <div className="relative w-full max-w-6xl" style={{ height: '80vh' }}>
            {screens.map((screen, index) => (
              <div
                key={screen.id}
                className="absolute inset-0 transition-all duration-500 ease-out pointer-events-auto"
                style={getCardStyle(index)}
              >
                <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 h-full flex items-center justify-center overflow-hidden">
                  <div className="max-w-4xl mx-auto w-full">
                    <div className="space-y-4 mb-6">
                      <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                        {screen.title}
                      </h1>
                      <p className="text-base md:text-lg text-gray-500 leading-relaxed">
                        {screen.description}
                      </p>
                    </div>
                    
                    <div className="md:mt-8">
                      {screen.content}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 text-gray-400 text-sm animate-bounce pointer-events-none">
        {scrollProgress < 1.9 && '↓ Scroll to continue'}
      </div>
    </div>
  );
};

export default OnboardingScreens;