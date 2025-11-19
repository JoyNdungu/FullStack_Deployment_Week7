import { useState, useEffect } from "react";
import { Droplet, Sparkles, Zap, Heart, Star } from "lucide-react";

const Tips = ({ darkMode }) => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [currentDidTip, setCurrentDidTip] = useState(0);
  const [fade, setFade] = useState(true);

  const tips = [
    {
      text: "Fix leaky faucets - they can waste up to 3,000 liters per year",
      icon: Droplet,
      color: darkMode ? "from-cyan-400 to-blue-500" : "from-cyan to-blue-dark",
      bgColor: darkMode ? "bg-cyan-dark" : "bg-sky-light",
      savings: "Save 3000L/year",
    },
    {
      text: "Take shorter showers - reduce by 2 minutes to save 37 liters per shower",
      icon: Sparkles,
      color: darkMode ? "from-purple-400 to-pink-500" : "from-purple-500 to-pink-400",
      bgColor: darkMode ? "bg-indigo-dark" : "bg-purple-100",
      savings: "Save 37L/shower",
    },
    {
      text: "Run dishwasher only when full - saves up to 15 liters per load",
      icon: Zap,
      color: darkMode ? "from-yellow-400 to-orange-400" : "from-yellow-300 to-yellow-400",
      bgColor: darkMode ? "bg-yellow-700" : "bg-yellow-100",
      savings: "Save 15L/load",
    },
    {
      text: "Use a bucket while waiting for shower water to warm up",
      icon: Heart,
      color: darkMode ? "from-red-400 to-pink-500" : "from-red-400 to-red-500",
      bgColor: darkMode ? "bg-red-700" : "bg-red-100",
      savings: "Save 10L/day",
    },
    {
      text: "Install low-flow showerheads and faucet aerators",
      icon: Star,
      color: darkMode ? "from-green-400 to-teal-500" : "from-green-500 to-teal-400",
      bgColor: darkMode ? "bg-green-700" : "bg-green-100",
      savings: "Save 40%",
    },
  ];

  const didYouKnowTips = [
    "The average household can save over 30% on water bills with simple conservation.",
    "Fixing a single leaky faucet can save up to 3,000 liters of water per year.",
    "Shortening showers by just 2 minutes can save 37 liters each time.",
    "Collecting water while waiting for it to warm up can be reused for plants.",
    "Installing low-flow showerheads and aerators can reduce water usage by up to 40%.",
  ];

  // Rotate Did You Know tips every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false); // fade out
      setTimeout(() => {
        setCurrentDidTip((prev) => (prev + 1) % didYouKnowTips.length);
        setFade(true); // fade in
      }, 500);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const textColor = darkMode ? "text-gray-100" : "text-gray-800";
  const subTextColor = darkMode ? "text-gray-300" : "text-gray-700";

  return (
    <div className={`flex flex-col p-4 ${darkMode ? "bg-gray-900" : "bg-sky-lightest"}`}>
      {/* Header */}
      <div className="mb-8 text-center animate-fade-in">
        <h2 className={`text-4xl font-bold mb-2 animate-bounce-in ${textColor}`}>
          💧 Water Saving Tips
        </h2>
        <p className={`text-lg ${subTextColor}`}>
          Small changes, big impact! Start saving today.
        </p>
      </div>

      {/* Tips Grid */}
      <div className="grid grid-cols-1 gap-6">
        {tips.map((tip, idx) => {
          const Icon = tip.icon;
          return (
            <div
              key={idx}
              onMouseEnter={() => setHoveredIndex(idx)}
              onMouseLeave={() => setHoveredIndex(null)}
              className={`
                ${tip.bgColor} rounded-xl shadow-lg p-6
                transform transition-all duration-500 ease-out
                ${hoveredIndex === idx ? "scale-105 shadow-2xl -rotate-1" : "scale-100 rotate-0"}
                animate-slide-in
              `}
              style={{ animationDelay: `${idx * 150}ms` }}
            >
              <div className="flex items-start gap-4">
                <div
                  className={`
                    bg-gradient-to-br ${tip.color}
                    rounded-full p-4 flex-shrink-0 shadow-lg
                    transform transition-all duration-500
                    ${hoveredIndex === idx ? "scale-110 rotate-12 animate-pulse" : "scale-100 rotate-0"}
                  `}
                >
                  <Icon className="text-white" size={32} />
                </div>
                <div className="flex-1">
                  <p className={`text-lg leading-relaxed font-medium ${textColor}`}>
                    {tip.text}
                  </p>
                  <div
                    className={`
                      mt-3 inline-block px-4 py-2 rounded-full
                      bg-gradient-to-r ${tip.color}
                      text-white font-semibold text-sm shadow-md
                      transform transition-all duration-300
                      ${hoveredIndex === idx ? "translate-x-2 scale-110" : "translate-x-0 scale-100"}
                    `}
                  >
                    ✨ {tip.savings}
                  </div>
                </div>
                <div
                  className={`
                    flex-shrink-0 w-12 h-12 rounded-full
                    bg-gradient-to-br ${tip.color}
                    flex items-center justify-center text-white font-bold text-xl
                    shadow-lg transform transition-all duration-500
                    ${hoveredIndex === idx ? "rotate-[360deg] scale-125" : "rotate-0 scale-100"}
                  `}
                >
                  {idx + 1}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Did You Know Section */}
      <div
        className={`
          mt-8 rounded-xl shadow-2xl p-8
          ${darkMode
            ? "bg-gradient-to-r from-cyan-dark via-blue-dark to-indigo-dark text-gray-100"
            : "bg-gradient-to-r from-sky via-blue to-indigo text-white"}
          relative overflow-hidden transition-opacity duration-500
          ${fade ? "opacity-100" : "opacity-0"}
        `}
      >
        <div className="relative z-10 text-center">
          <h3 className="text-3xl font-bold mb-4 flex items-center justify-center gap-2">
            <Sparkles className="animate-spin-slow" size={32} />
            Did you know?
          </h3>
          <p className="text-xl leading-relaxed">{didYouKnowTips[currentDidTip]}</p>
        </div>
      </div>

      <style>{`
        @keyframes fade-in { from { opacity: 0; transform: translateY(-20px);} to { opacity:1; transform: translateY(0);} }
        @keyframes bounce-in { 0% { opacity:0; transform: scale(0.3);} 50% { transform: scale(1.05);} 70% { transform: scale(0.9);} 100% { opacity:1; transform: scale(1);} }
        @keyframes slide-in { from { opacity:0; transform: translateX(-50px);} to { opacity:1; transform: translateX(0);} }
        @keyframes spin-slow { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
        .animate-fade-in { animation: fade-in 0.8s ease-out; }
        .animate-bounce-in { animation: bounce-in 1s ease-out; }
        .animate-slide-in { animation: slide-in 0.6s ease-out; animation-fill-mode: both; }
        .animate-spin-slow { animation: spin-slow 8s linear infinite; }
      `}</style>
    </div>
  );
};

export default Tips;
