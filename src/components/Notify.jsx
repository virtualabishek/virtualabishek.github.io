import React, { useState, useEffect, useRef } from "react";
import { X, Lightbulb, ChevronRight } from "lucide-react";
import toast from "react-hot-toast";
import perspectives from "../assets/json/Perspective.json";

const Notify = () => {
  const [showNotifications, setShowNotifications] = useState(false);
  const [currentNotificationIndex, setCurrentNotificationIndex] = useState(0);
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 768);

  const autoSlideRef = useRef(null);
  const autoHideRef = useRef(null);

  const latestPerspectives = [...perspectives]
    .sort((a, b) => new Date(b.date) - new Date(a.date))
    .slice(0, 4);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsDesktop(window.innerWidth >= 768);
    };
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  useEffect(() => {
    const showDelay = setTimeout(() => {
      if (isDesktop) {
        setShowNotifications(true);
      } else {
        toast.custom(
          (t) => (
            <div
              className={`${
                t.visible ? "animate-enter" : "animate-leave"
              } max-w-md w-full bg-gray-800 shadow-lg rounded-lg pointer-events-auto flex ring-1 ring-black ring-opacity-5`}
            >
              <div className="flex-1 w-0 p-4">
                <div className="flex items-start">
                  <div className="flex-shrink-0 pt-0.5">
                    <div className="bg-gradient-to-br from-emerald-600 to-sky-600 p-2 rounded-lg">
                      <Lightbulb className="h-5 w-5 text-white" />
                    </div>
                  </div>
                  <div className="ml-3 flex-1">
                    <p className="text-sm font-bold text-white">
                      Latest Perspective
                    </p>
                    <p className="mt-1 text-sm text-white/80">
                      Check out my latest thoughts!
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex border-l border-gray-700">
                <a
                  href="/perspective"
                  onClick={() => toast.dismiss(t.id)}
                  className="w-full border border-transparent rounded-none rounded-r-lg p-4 flex items-center justify-center text-sm font-medium text-emerald-400 hover:text-emerald-300 focus:outline-none"
                >
                  View
                </a>
              </div>
            </div>
          ),
          {
            duration: 5000,
            position: "bottom-center",
          },
        );
      }
    }, 2000);

    return () => clearTimeout(showDelay);
  }, [isDesktop]);

  useEffect(() => {
    if (showNotifications && isDesktop) {
      autoSlideRef.current = setInterval(() => {
        setCurrentNotificationIndex((prev) =>
          prev === latestPerspectives.length - 1 ? 0 : prev + 1,
        );
      }, 5000);

      autoHideRef.current = setTimeout(() => {
        handleCloseNotifications();
      }, 10000);
    }
    return () => {
      clearInterval(autoSlideRef.current);
      clearTimeout(autoHideRef.current);
    };
  }, [showNotifications, isDesktop, latestPerspectives.length]);

  const handleMouseEnter = () => {
    clearInterval(autoSlideRef.current);
    clearTimeout(autoHideRef.current);
  };

  const handleMouseLeave = () => {
    autoSlideRef.current = setInterval(() => {
      setCurrentNotificationIndex((prev) =>
        prev === latestPerspectives.length - 1 ? 0 : prev + 1,
      );
    }, 5000);
  };

  const handleCloseNotifications = () => {
    setShowNotifications(false);
  };

  const nextNotification = () => {
    setCurrentNotificationIndex((prev) =>
      prev === latestPerspectives.length - 1 ? 0 : prev + 1,
    );
  };

  const prevNotification = () => {
    setCurrentNotificationIndex((prev) =>
      prev === 0 ? latestPerspectives.length - 1 : prev - 1,
    );
  };

  const formatDate = (dateString) => {
    const options = { month: "long", day: "numeric", year: "numeric" };
    return new Date(dateString).toLocaleDateString("en-US", options);
  };

  if (!isDesktop) {
    return null;
  }

  return (
    <>
      {showNotifications && (
        <div
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          className="fixed right-4 sm:right-6 bottom-6 z-30 w-96 max-w-md animate-slideUp"
        >
          <div className="bg-gray-800 rounded-2xl shadow-2xl border-2 border-emerald-300/20 overflow-hidden backdrop-blur-sm">
            {/* Header */}
            <div className="bg-gradient-to-r from-emerald-500/20 to-sky-500/20 px-5 py-4 border-b border-white/10 flex items-center justify-between">
              <div className="flex items-center gap-3 min-w-0 flex-1">
                <div className="bg-gradient-to-br from-emerald-600 to-sky-600 p-2 rounded-lg flex-shrink-0">
                  <Lightbulb className="w-5 h-5 text-white" />
                </div>
                <div className="min-w-0 flex-1">
                  <h3 className="font-bold text-white text-lg truncate">
                    Latest Thoughts
                  </h3>
                  <p className="text-xs text-white/60">Fresh perspectives</p>
                </div>
              </div>
              <button
                onClick={handleCloseNotifications}
                className="p-2 hover:bg-white/10 rounded-lg transition-colors flex-shrink-0"
                aria-label="Close notifications"
              >
                <X className="w-5 h-5 text-white/70" />
              </button>
            </div>

            <div className="p-5">
              <div className="relative min-h-[140px]">
                {latestPerspectives.map((perspective, index) => (
                  <div
                    key={index}
                    className={`transition-all duration-500 ${
                      index === currentNotificationIndex
                        ? "opacity-100 translate-x-0"
                        : "opacity-0 absolute inset-0 translate-x-4 pointer-events-none"
                    }`}
                  >
                    <p className="text-white/90 leading-relaxed mb-4 text-base">
                      "{perspective.text}"
                    </p>
                    <p className="text-sm text-emerald-400 font-semibold">
                      {formatDate(perspective.date)}
                    </p>
                  </div>
                ))}
              </div>

              <div className="flex items-center justify-between mt-6 pt-4 border-t border-white/10 gap-3">
                <div className="flex gap-1.5 flex-shrink-0">
                  {latestPerspectives.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentNotificationIndex(index)}
                      className={`transition-all duration-300 rounded-full ${
                        index === currentNotificationIndex
                          ? "w-8 h-2 bg-gradient-to-r from-emerald-400 to-sky-400"
                          : "w-2 h-2 bg-white/30 hover:bg-white/50"
                      }`}
                      aria-label={`Go to notification ${index + 1}`}
                    />
                  ))}
                </div>

                <div className="flex gap-2 flex-shrink-0">
                  <button
                    onClick={prevNotification}
                    className="px-3 py-1.5 rounded-lg bg-white/10 text-white/70 text-sm font-semibold hover:bg-white/20 transition-colors"
                  >
                    Prev
                  </button>
                  <button
                    onClick={nextNotification}
                    className="px-3 py-1.5 rounded-lg bg-white/10 text-white/70 text-sm font-semibold hover:bg-white/20 transition-colors"
                  >
                    Next
                  </button>
                </div>
              </div>

              <a
                href="/perspective"
                className="mt-4 flex items-center justify-center gap-2 text-sm font-semibold text-emerald-400 hover:text-emerald-300 transition-colors group"
              >
                View all perspectives
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
        </div>
      )}

      <style>{`
        @keyframes slideUp {
          from { transform: translateY(100%); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
        .animate-slideUp { animation: slideUp 0.5s ease-out; }
        .animate-enter { animation: enter 0.3s ease-out; }
        .animate-leave { animation: leave 0.2s ease-in forwards; }
        @keyframes enter {
          from { transform: translateY(100%); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
        @keyframes leave {
          from { transform: translateY(0); opacity: 1; }
          to { transform: translateY(100%); opacity: 0; }
        }
      `}</style>
    </>
  );
};

export default Notify;
