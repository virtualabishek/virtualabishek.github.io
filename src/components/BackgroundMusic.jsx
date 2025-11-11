import React, { useState, useRef, useEffect } from "react";
import { Play, Pause, Music } from "lucide-react";

const BackgroundMusic = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);
  const [currentSong, setCurrentSong] = useState(0);
  const [isMuted, setIsMuted] = useState(true);
  const [showPlayer, setShowPlayer] = useState(true);
  const [isMobile, setIsMobile] = useState(false);
  const playerRef = useRef(null);

  const songs = [
    {
      title: "Yellow",
      artist: "Coldplay",
      videoId: "yKNxeF4KMsY",
      startTime: 36,
    },
    {
      title: "Fix You",
      artist: "Coldplay",
      videoId: "k4V3Mo61fJM",
      startTime: 8,
    },
    {
      title: "Man Chari",
      artist: "Sushant Ghimire",
      videoId: "Svp2MXZOXpQ",
      startTime: 25,
    },
    {
      title: "Believer",
      artist: "Imagine Dragon",
      videoId: "snx5qGUtVi8",
      startTime: 21,
    },
    {
      title: "Kotha",
      artist: "Prashant Siwakoti",
      videoId: "AMSwIFy_aLI",
      startTime: 361,
    },
    {
      title: "Mama, I am coming home",
      artist: "Ozzy",
      videoId: "GL_SEtGA1ag",
      startTime: 14,
    },
    {
      title: "Believers",
      artist: "ImagineDragons",
      videoId: "Kx7B-XvmFtE",
      startTime: 4,
    },
    {
      title: "Urja",
      artist: "Elements",
      videoId: "txmLqITl1h8",
      startTime: 25,
    },
  ];

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    if (!window.YT) {
      const tag = document.createElement("script");
      tag.src = "https://www.youtube.com/iframe_api";
      const firstScriptTag = document.getElementsByTagName("script")[0];
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
      window.onYouTubeIframeAPIReady = createPlayer;
    } else if (!playerRef.current) {
      createPlayer();
    }
  }, []);

  const createPlayer = () => {
    if (playerRef.current) return;
    playerRef.current = new window.YT.Player("youtube-player", {
      height: "0",
      width: "0",
      videoId: songs[currentSong].videoId,
      playerVars: {
        autoplay: 0,
        controls: 0,
        disablekb: 1,
        fs: 0,
        modestbranding: 1,
        playsinline: 1,
        start: songs[currentSong].startTime,
      },
      events: {
        onReady: (event) => event.target.setVolume(isMuted ? 0 : 30),
        onStateChange: (event) => {
          const playerState = event.data;
          setIsPlaying(playerState === window.YT.PlayerState.PLAYING);
          if (playerState === window.YT.PlayerState.ENDED) nextSong();
        },
      },
    });
  };

  useEffect(() => {
    if (playerRef.current?.setVolume) {
      playerRef.current.setVolume(isMuted ? 0 : 30);
    }
  }, [isMuted]);

  useEffect(() => {
    if (!isPlaying) return;
    const songInterval = setInterval(nextSong, 50000);
    return () => clearInterval(songInterval);
  }, [isPlaying, currentSong]);

  useEffect(() => {
    if (!showPlayer) return;

    let hideTimeout;
    if (!hasInteracted) {
      hideTimeout = setTimeout(() => setShowPlayer(false), 7000);
    } else {
      if (!isPlaying) {
        hideTimeout = setTimeout(() => setShowPlayer(false), 2000);
      } else {
        hideTimeout = setTimeout(() => setShowPlayer(false), 3000);
      }
    }
    return () => clearTimeout(hideTimeout);
  }, [showPlayer, isPlaying, hasInteracted, currentSong]);

  const togglePlay = () => {
    if (!playerRef.current) return;
    if (!hasInteracted) {
      setHasInteracted(true);
      setIsMuted(false);
      playerRef.current.playVideo();
    } else if (isPlaying) {
      playerRef.current.pauseVideo();
    } else {
      playerRef.current.playVideo();
    }
  };

  const nextSong = () => {
    setCurrentSong((prev) => (prev + 1) % songs.length);
  };

  useEffect(() => {
    if (hasInteracted) {
      playerRef.current?.loadVideoById({
        videoId: songs[currentSong].videoId,
        startSeconds: songs[currentSong].startTime,
      });
    }
  }, [currentSong, hasInteracted]);

  return (
    <>
      <div id="youtube-player" style={{ display: "none" }}></div>

      <div
        className={`fixed z-50 bg-gray-800/90 backdrop-blur-xl rounded-2xl shadow-2xl border-2 border-emerald-300/20 overflow-hidden transition-all duration-500 ease-in-out ${
          isMobile
            ? "bottom-20 right-4 w-auto max-w-[85vw]"
            : "bottom-6 left-6 w-80"
        } ${
          showPlayer
            ? "translate-y-0 opacity-100"
            : "translate-y-full opacity-0 pointer-events-none"
        }`}
      >
        <div className="flex items-center justify-between gap-3 p-3">
          <div className="flex items-center gap-3 min-w-0 flex-1">
            <Music className="w-5 h-5 text-emerald-400 flex-shrink-0" />
            <div className="min-w-0 flex-1">
              <h3 className="font-bold text-white text-sm truncate">
                {hasInteracted
                  ? songs[currentSong].title
                  : "Vibe With Some Tunes!"}
              </h3>
              {hasInteracted && (
                <p className="text-xs text-white/60 truncate">
                  {songs[currentSong].artist}
                </p>
              )}
            </div>
          </div>

          <div className="flex-shrink-0">
            <button
              onClick={togglePlay}
              className={`bg-gradient-to-br from-emerald-500/80 to-sky-500/80 p-2.5 rounded-full transition-all duration-300 hover:scale-110 ${
                !hasInteracted && "animate-pop"
              }`}
              aria-label={isPlaying ? "Pause" : "Play"}
            >
              {isPlaying ? (
                <Pause className="w-5 h-5 text-white" />
              ) : (
                <Play className="w-5 h-5 text-white ml-px" />
              )}
            </button>
          </div>
        </div>
      </div>

      <button
        onClick={() => setShowPlayer(!showPlayer)}
        className={`fixed z-40 bg-gradient-to-br from-emerald-500 to-sky-500 p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 ${
          isMobile ? "bottom-20 right-4" : "bottom-6 left-6"
        } ${!showPlayer ? "animate-fadeIn" : "opacity-0 pointer-events-none"}`}
        aria-label="Toggle music player"
      >
        <Music className="w-5 h-5 text-white" />
        {isPlaying && (
          <span className="absolute -top-1 -right-1 flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
          </span>
        )}
      </button>

      <style>{`
        @keyframes pop {
          0%, 100% {
            transform: scale(1);
            box-shadow: 0 0 8px rgba(52, 211, 153, 0.3);
          }
          50% {
            transform: scale(1.1);
            box-shadow: 0 0 20px rgba(52, 211, 153, 0.7);
          }
        }
        .animate-pop {
          animation: pop 1.5s ease-in-out infinite;
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: scale(0.8); }
          to { opacity: 1; transform: scale(1); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.4s ease-out forwards;
        }
      `}</style>
    </>
  );
};

export default BackgroundMusic;
