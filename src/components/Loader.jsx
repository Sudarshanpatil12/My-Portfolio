import React, { useEffect, useState, useMemo } from "react";
import { mylogo } from "../assets"; // Make sure this path is correct

/**
 * Tailwind config additions:
 *
 * module.exports = {
 *   theme: {
 *     extend: {
 *       keyframes: {
 *         blink: {
 *           '0%, 100%': { opacity: 1 },
 *           '50%': { opacity: 0 },
 *         },
 *         scrollVertical: {
 *           '0%': { transform: 'translateY(-10%)' },
 *           '100%': { transform: 'translateY(10%)' },
 *         },
 *         glitch: {
 *           '0%': { transform: 'translate(0)' },
 *           '20%': { transform: 'translate(-3px, 3px)' },
 *           '40%': { transform: 'translate(-3px, -3px)' },
 *           '60%': { transform: 'translate(3px, 3px)' },
 *           '80%': { transform: 'translate(3px, -3px)' },
 *           '100%': { transform: 'translate(0)' },
 *         },
 *       },
 *       animation: {
 *         blink: 'blink 1s step-end infinite',
 *         'scroll-vertical': 'scrollVertical 20s linear infinite',
 *         glitch: 'glitch 0.2s cubic-bezier(0.25,0.46,0.45,0.94) both',
 *       },
 *     },
 *   },
 * };
 */

const Loader = ({ onLoaded }) => {
  const [progress, setProgress] = useState(0);
  const [isComplete, setIsComplete] = useState(false);
  const [currentMessage, setCurrentMessage] = useState("Initializing...");

  const loadingMessages = useMemo(
    () => [
      "Booting kernel...",
      "Loading system drivers...",
      "Establishing secure connection...",
      "Compiling quantum assets...",
      "Decompressing data streams...",
      "Reticulating splines...",
      "Finalizing interface...",
    ],
    []
  );

  useEffect(() => {
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          return 100;
        }
        return prev + 1;
      });
    }, 30);

    let messageIndex = 0;
    const messageInterval = setInterval(() => {
      messageIndex = (messageIndex + 1) % loadingMessages.length;
      setCurrentMessage(loadingMessages[messageIndex]);
    }, 650);

    return () => {
      clearInterval(progressInterval);
      clearInterval(messageInterval);
    };
  }, [loadingMessages]);

  useEffect(() => {
    if (progress >= 100) {
      const completeTimer = setTimeout(() => {
        setIsComplete(true);
        if (onLoaded) {
          setTimeout(onLoaded, 500);
        }
      }, 800);
      return () => clearTimeout(completeTimer);
    }
  }, [progress, onLoaded]);

  const matrixBackground = useMemo(() => {
    const chars = Array(2500)
      .fill(0)
      .map(() => (Math.random() > 0.5 ? "1" : "0"))
      .join(" ");
    return chars;
  }, []);

  return (
    <div
      className={`fixed inset-0 z-50 flex flex-col justify-center items-center bg-primary transition-opacity duration-500
      ${isComplete ? "opacity-0 pointer-events-none" : "opacity-100"}`}
    >
      {/* Matrix Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="w-full h-full text-green-400/20 font-mono text-xs leading-relaxed animate-scroll-vertical whitespace-pre-wrap break-all">
          {matrixBackground}
        </div>
      </div>

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-primary/90" />

      {/* Glow behind logo */}
      <div className="absolute flex items-center justify-center">
        <div className="w-[300px] h-[300px] bg-gradient-to-br from-[#6ac1ff] via-[#8aceff] to-white rounded-full blur-3xl opacity-30 animate-pulse" />
      </div>

      {/* Main Content */}
      <div className="z-10 flex flex-col justify-center items-center">
        {/* Logo */}
        <img
          src={mylogo}
          alt="logo"
          className="w-[100px] md:w-[140px] mb-8 relative z-10 drop-shadow-[0_0_30px_rgba(106,193,255,0.7)]"
        />

        {/* Progress Bar */}
        <div className="w-[75%] max-w-xl h-3 bg-black/30 rounded-full overflow-hidden relative shadow-inner">
          <div
            className="h-full bg-gradient-to-r from-[#6ac1ff] via-[#8aceff] to-white transition-all duration-150 ease-linear"
            style={{ width: `${progress}%` }}
          />
        </div>

        {/* Loading Text */}
        <div className="mt-5 font-mono tracking-widest text-sm md:text-base h-6">
          {progress < 100 ? (
            <p className="flex items-center bg-gradient-to-br from-[#6ac1ff] via-[#8aceff] to-white bg-clip-text text-transparent">
              {currentMessage}
              <span className="animate-blink w-2 h-5 bg-[#6ac1ff] ml-2" />
            </p>
          ) : (
            <p className="animate-glitch bg-gradient-to-br from-[#6ac1ff] via-[#8aceff] to-white bg-clip-text text-transparent">
              {"<Ready! />"}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Loader;
