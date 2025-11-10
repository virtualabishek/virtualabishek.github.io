import React, { useState, useEffect, useRef } from "react";
import { X, Lightbulb, ExternalLink, ChevronRight } from "lucide-react";
import perspectives from "../assets/json/Perspective.json";

const Notify = () => {
  const [showNotifications, setShowNotifications] = useState(true);
  const [currentNotificationIndex, setCurrentNotificationIndex] = useState(0);
  const [isNearFooter, setIsNearFooter] = useState(false);
  const notificationRef = useRef(null);

  const latestPerspectives = [...perspectives]
    .sort((a, b) => new Date(b.date) - new Date(a.date))
    .slice(0, 4);

  useEffect(() => {
    const handleScroll = () => {
      const footer = document.querySelector("footer");
      const notification = notificationRef.current;

      if (footer && notification) {
        const footerRect = footer.getBoundingClientRect();
        const notificationRect = notification.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        const footerVisible = footerRect.top < windowHeight;
        setIsNearFooter(footerVisible);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowNotifications(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const handleCloseNotifications = () => {
    setShowNotifications(false);
  };

  const nextNotification = () => {
    if (currentNotificationIndex < latestPerspectives.length - 1) {
      setCurrentNotificationIndex((prev) => prev + 1);
    }
  };

  const prevNotification = () => {
    if (currentNotificationIndex > 0) {
      setCurrentNotificationIndex((prev) => prev - 1);
    }
  };

  const formatDate = (dateString) => {
    const options = { month: "long", day: "numeric", year: "numeric" };
    return new Date(dateString).toLocaleDateString("en-US", options);
  };

  return (
    <>
      {showNotifications && (
        <div
          ref={notificationRef}
          className={`fixed right-4 z-30 w-[calc(100%-2rem)] sm:w-96 max-w-md transition-all duration-500 ${
            isNearFooter
              ? "opacity-0 translate-y-8 pointer-events-none"
              : "opacity-100 translate-y-0 bottom-4 sm:bottom-6 animate-slideUp"
          }`}
        >
          <div className="bg-gray-800 rounded-2xl shadow-2xl border-2 border-emerald-300/20 overflow-hidden backdrop-blur-sm">
            {/* Header */}
            <div className="bg-gradient-to-r from-emerald-500/20 to-sky-500/20 px-4 sm:px-5 py-3 sm:py-4 border-b border-white/10 flex items-center justify-between">
              <div className="flex items-center gap-2 sm:gap-3 min-w-0 flex-1">
                <div className="bg-gradient-to-br from-emerald-600 to-sky-600 p-1.5 sm:p-2 rounded-lg flex-shrink-0">
                  <Lightbulb className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                </div>
                <div className="min-w-0 flex-1">
                  <h3 className="font-bold text-white text-sm sm:text-base md:text-lg truncate">
                    Latest Thoughts
                  </h3>
                  <p className="text-xs text-white/60">Fresh perspectives</p>
                </div>
              </div>
              <button
                onClick={handleCloseNotifications}
                className="p-1.5 sm:p-2 hover:bg-white/10 rounded-lg transition-colors flex-shrink-0"
                aria-label="Close notifications"
              >
                <X className="w-4 h-4 sm:w-5 sm:h-5 text-white/70" />
              </button>
            </div>

            <div className="p-4 sm:p-5">
              <div className="relative min-h-[120px] sm:min-h-[140px]">
                {latestPerspectives.map((perspective, index) => (
                  <div
                    key={index}
                    className={`transition-all duration-500 ${
                      index === currentNotificationIndex
                        ? "opacity-100 translate-x-0"
                        : "opacity-0 absolute inset-0 translate-x-4 pointer-events-none"
                    }`}
                  >
                    <p className="text-white/90 leading-relaxed mb-4 text-sm sm:text-base">
                      "{perspective.text}"
                    </p>
                    <p className="text-xs sm:text-sm text-emerald-400 font-semibold">
                      {formatDate(perspective.date)}
                    </p>
                  </div>
                ))}
              </div>

              <div className="flex items-center justify-between mt-4 sm:mt-6 pt-4 border-t border-white/10 gap-3">
                <div className="flex gap-1.5 flex-shrink-0">
                  {latestPerspectives.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentNotificationIndex(index)}
                      className={`transition-all duration-300 rounded-full ${
                        index === currentNotificationIndex
                          ? "w-6 sm:w-8 h-2 bg-gradient-to-r from-emerald-400 to-sky-400"
                          : "w-2 h-2 bg-white/30 hover:bg-white/50"
                      }`}
                      aria-label={`Go to notification ${index + 1}`}
                    />
                  ))}
                </div>

                <div className="flex gap-2 flex-shrink-0">
                  <button
                    onClick={prevNotification}
                    disabled={currentNotificationIndex === 0}
                    className="px-2 sm:px-3 py-1 sm:py-1.5 rounded-lg bg-white/10 text-white/70 text-xs sm:text-sm font-semibold hover:bg-white/20 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
                  >
                    Prev
                  </button>
                  <button
                    onClick={nextNotification}
                    disabled={
                      currentNotificationIndex === latestPerspectives.length - 1
                    }
                    className="px-2 sm:px-3 py-1 sm:py-1.5 rounded-lg bg-white/10 text-white/70 text-xs sm:text-sm font-semibold hover:bg-white/20 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
                  >
                    Next
                  </button>
                </div>
              </div>

              <a
                href="/perspective"
                className="mt-4 flex items-center justify-center gap-2 text-xs sm:text-sm font-semibold text-emerald-400 hover:text-emerald-300 transition-colors group"
              >
                View all perspectives
                <ChevronRight className="w-3 h-3 sm:w-4 sm:h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
        </div>
      )}

      <style>{`
        @keyframes slideDown {
          from {
            transform: translateY(-100%);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }

        @keyframes slideUp {
          from {
            transform: translateY(100%);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }

        .animate-slideDown {
          animation: slideDown 0.5s ease-out;
        }

        .animate-slideUp {
          animation: slideUp 0.5s ease-out;
        }
      `}</style>
    </>
  );
};

export default Notify;
