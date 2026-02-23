import { useState } from 'react';
import { Heart, Flower2 } from 'lucide-react';

function App() {
  const [showApology, setShowApology] = useState(false);

  const handleNameClick = () => {
    setShowApology(true);
  };

  // Generate 30 blue flowers with random positions
  const flowers = Array.from({ length: 30 }, (_, i) => ({
    id: i,
    top: Math.random() * 100,
    left: Math.random() * 100,
    size: 16 + Math.random() * 16, // Random size between 16-32px
    delay: Math.random() * 3, // Random animation delay
    duration: 3 + Math.random() * 2, // Random duration between 3-5s
  }));

  return (
    <div className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden">
      {/* Animated background hearts */}
      <div className="absolute inset-0 pointer-events-none">
        <Heart className="background-heart absolute top-10 left-10 w-12 h-12 animate-pulse" style={{ animationDelay: '0s' }} />
        <Heart className="background-heart absolute top-20 right-20 w-8 h-8 animate-pulse" style={{ animationDelay: '1s' }} />
        <Heart className="background-heart absolute bottom-20 left-20 w-10 h-10 animate-pulse" style={{ animationDelay: '2s' }} />
        <Heart className="background-heart absolute bottom-10 right-10 w-12 h-12 animate-pulse" style={{ animationDelay: '1.5s' }} />
        <Heart className="background-heart absolute top-1/2 left-1/4 w-6 h-6 animate-pulse" style={{ animationDelay: '0.5s' }} />
        <Heart className="background-heart absolute top-1/3 right-1/3 w-8 h-8 animate-pulse" style={{ animationDelay: '2.5s' }} />
      </div>

      {/* Blue flowers - visible at all times */}
      <div className="absolute inset-0 pointer-events-none">
        {flowers.map((flower) => (
          <Flower2
            key={flower.id}
            className="blue-flower absolute"
            style={{
              top: `${flower.top}%`,
              left: `${flower.left}%`,
              width: `${flower.size}px`,
              height: `${flower.size}px`,
              animationDelay: `${flower.delay}s`,
              animationDuration: `${flower.duration}s`,
            }}
          />
        ))}
      </div>

      {/* Main content */}
      <main className="relative z-10 flex flex-col items-center justify-center px-4 max-w-4xl mx-auto">
        {!showApology ? (
          <div className="text-center space-y-8 fade-in">
            <div className="space-y-4">
              <Heart className="w-16 h-16 text-white mx-auto mb-8 animate-pulse" />
              <h1 className="text-white text-2xl md:text-3xl font-light tracking-wide mb-4">
                To someone special...
              </h1>
              <button
                onClick={handleNameClick}
                className="name-button text-white text-7xl md:text-9xl font-serif font-bold tracking-tight hover:scale-105 transition-all duration-300 cursor-pointer focus:outline-none focus:ring-4 focus:ring-white/30 rounded-lg px-8 py-4"
              >
                Maham
              </button>
              <p className="text-white/80 text-lg md:text-xl font-light mt-8">
                click your name
              </p>
            </div>
          </div>
        ) : (
          <div className="text-center space-y-8 apology-reveal max-w-3xl">
            <Heart className="w-20 h-20 text-white mx-auto mb-8 animate-bounce" />
            <h1 className="text-white text-6xl md:text-8xl font-serif font-bold mb-8">
              I'm Sorry
            </h1>
            <div className="space-y-6 text-white text-lg md:text-2xl font-light leading-relaxed">
              <p>
                Dear Maham,
              </p>
              <p>
                I know I messed up, and I can't stop thinking about how much I hurt you. 
                You mean the world to me, and seeing you upset breaks my heart.
              </p>
              <p>
                I'm truly sorry for what I did. I wish I could take it back, but all I can do now 
                is promise to be better and to never make the same mistake again.
              </p>
              <p className="text-2xl md:text-3xl font-serif mt-8">
                ♥️♥️💗💗❤️❤️ I'm sorry from the deepest part of my heart ❤️❤️💗💗♥️♥️
              </p>
            </div>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="absolute bottom-4 left-0 right-0 text-center text-white/60 text-sm z-10">
        <p>
          © {new Date().getFullYear()} · Built with <Heart className="inline w-4 h-4 text-white/60" /> using{' '}
          <a
            href={`https://caffeine.ai/?utm_source=Caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(
              typeof window !== 'undefined' ? window.location.hostname : 'maham-apology'
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors underline"
          >
            caffeine.ai
          </a>
        </p>
      </footer>
    </div>
  );
}

export default App;
