import React, { useEffect, useState, useMemo } from "react";
import { mylogo } from "../assets"; // Make sure this path is correct

/**
 * To use the custom animations, add them to your `tailwind.config.js` file.
 *
 * module.exports = {
 * // ... other configurations
 * theme: {
 * extend: {
 * keyframes: {
 * // Animation for the text cursor
 * blink: {
 * '0%, 100%': { opacity: 1 },
 * '50%': { opacity: 0 },
 * },
 * // Animation for the vertical scroll of the background
 * scrollVertical: {
 * '0%': { transform: 'translateY(-10%)' },
 * '100%': { transform: 'translateY(10%)' },
 * },
 * // A quick glitch effect for the completion text
 * glitch: {
 * '0%': { transform: 'translate(0)' },
 * '20%': { transform: 'translate(-3px, 3px)' },
 * '40%': { transform: 'translate(-3px, -3px)' },
 * '60%': { transform: 'translate(3px, 3px)' },
 * '80%': { transform: 'translate(3px, -3px)' },
 * '100%': { transform: 'translate(0)' },
 * }
 * },
 * animation: {
 * blink: 'blink 1s step-end infinite',
 * 'scroll-vertical': 'scrollVertical 20s linear infinite',
 * glitch: 'glitch 0.2s cubic-bezier(0.25, 0.46, 0.45, 0.94) both'
 * },
 * },
 * },
 * // ... other configurations
 * };
 */

const Loader = ({ onLoaded }) => {
  const [progress, setProgress] = useState(0);
  const [isComplete, setIsComplete] = useState(false);
  const [currentMessage, setCurrentMessage] = useState("Initializing...");

  // A list of fun, techy loading messages to cycle through
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

  // Effect for handling the progress bar and message cycling
  useEffect(() => {
    // Progress interval (aiming for 3 seconds)
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          return 100;
        }
        return prev + 1;
      });
    }, 30); // 100 steps * 30ms = 3000ms = 3 seconds

    // Interval to cycle through the loading messages
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

  // Effect to handle the completion and fade-out logic
  useEffect(() => {
    if (progress >= 100) {
      // Wait a moment so the user sees "Ready!" before fading out
      const completeTimer = setTimeout(() => {
        setIsComplete(true);
        // Notify parent component after the fade-out animation completes
        if (onLoaded) {
          setTimeout(onLoaded, 500); // Duration of the fade-out
        }
      }, 800);
      return () => clearTimeout(completeTimer);
    }
  }, [progress, onLoaded]);

  // Memoize the background to prevent re-generation on every render
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
      {/* Dynamic Matrix Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="w-full h-full text-green-400/20 font-mono text-xs leading-relaxed animate-scroll-vertical whitespace-pre-wrap break-all">
          {matrixBackground}
        </div>
      </div>

      {/* Darkening overlay for better contrast */}
      <div className="absolute inset-0 bg-primary/90" />

      {/* Main Content */}
      <div className="z-10 flex flex-col justify-center items-center">
        {/* Pulsing Logo with a more prominent glow */}
        <img
          src={mylogo}
          alt="logo"
          className="w-[100px] md:w-[140px] mb-8 animate-pulse drop-shadow-[0_0_25px_#00ff95]"
        />

        {/* Progress Bar */}
        <div className="w-[75%] max-w-xl h-3 bg-black/30 rounded-full overflow-hidden relative shadow-inner">
          <div
            className="h-full bg-gradient-to-r from-green-400 via-cyan-400 to-blue-500 transition-all duration-150 ease-linear"
            style={{ width: `${progress}%` }}
          />
          {/* Neon Glow effect for the progress bar */}
          <div
            className="absolute top-0 left-0 h-full drop-shadow-[0_0_8px_#33bbff] bg-cyan-300/40 blur-sm"
            style={{ width: `${progress}%` }}
          />
        </div>

        {/* Loading Text with Typing Cursor */}
        <div className="mt-5 text-green-400 font-mono tracking-widest text-sm md:text-base h-6">
          {progress < 100 ? (
            <p className="flex items-center">
              {currentMessage}
              <span className="animate-blink w-2 h-5 bg-green-400 ml-2" />
            </p>
          ) : (
            <p className="animate-glitch">{"<Ready! />"}</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Loader;