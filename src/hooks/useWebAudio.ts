import { useState, useEffect, useCallback, useRef } from "react";

const AUDIO_STORAGE_KEY = "spidey_portfolio_music_muted";
const BG_MUSIC_SRC = "/sunflower.mp3";

export function useWebAudio() {
  const [isMuted, setIsMuted] = useState<boolean>(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem(AUDIO_STORAGE_KEY);
      return saved !== null ? JSON.parse(saved) : true; // Default muted for browser policy
    }
    return true;
  });

  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const audioCtxRef = useRef<AudioContext | null>(null);
  const bgAudioRef = useRef<HTMLAudioElement | null>(null);

  // Initialize Background Audio Element
  useEffect(() => {
    if (typeof window === "undefined") return;

    const audio = new Audio(BG_MUSIC_SRC);
    audio.loop = true;
    audio.volume = 0.45; // Smooth comfortable volume level
    bgAudioRef.current = audio;

    const handleEnded = () => setIsPlaying(false);
    audio.addEventListener("ended", handleEnded);

    return () => {
      audio.removeEventListener("ended", handleEnded);
      audio.pause();
    };
  }, []);

  const getAudioContext = useCallback(() => {
    if (typeof window === "undefined") return null;
    if (!audioCtxRef.current) {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      if (AudioCtx) {
        audioCtxRef.current = new AudioCtx();
      }
    }
    if (audioCtxRef.current && audioCtxRef.current.state === "suspended") {
      audioCtxRef.current.resume();
    }
    return audioCtxRef.current;
  }, []);

  // Toggle Music Play/Pause & Mute
  const toggleMute = useCallback(() => {
    const audio = bgAudioRef.current;

    setIsMuted((prev) => {
      const nextMuted = !prev;
      if (typeof window !== "undefined") {
        localStorage.setItem(AUDIO_STORAGE_KEY, JSON.stringify(nextMuted));
      }

      if (audio) {
        if (nextMuted) {
          audio.pause();
          setIsPlaying(false);
        } else {
          audio.play()
            .then(() => setIsPlaying(true))
            .catch(() => {
              // Autoplay policy prevented playback, keep state consistent
              setIsPlaying(false);
            });
        }
      }
      return nextMuted;
    });
  }, []);

  // Web Shooter "THWIP!" sound synthesizer
  const playThwip = useCallback(() => {
    try {
      const ctx = getAudioContext();
      if (!ctx) return;

      const now = ctx.currentTime;
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.type = "sine";
      osc.frequency.setValueAtTime(1200, now);
      osc.frequency.exponentialRampToValueAtTime(150, now + 0.12);

      gain.gain.setValueAtTime(0.3, now);
      gain.gain.exponentialRampToValueAtTime(0.01, now + 0.12);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start(now);
      osc.stop(now + 0.12);
    } catch {
      // Ignore audio errors gracefully
    }
  }, [getAudioContext]);

  // Comic Click Sound
  const playClick = useCallback(() => {
    try {
      const ctx = getAudioContext();
      if (!ctx) return;

      const now = ctx.currentTime;
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.type = "triangle";
      osc.frequency.setValueAtTime(800, now);
      osc.frequency.exponentialRampToValueAtTime(400, now + 0.05);

      gain.gain.setValueAtTime(0.25, now);
      gain.gain.exponentialRampToValueAtTime(0.01, now + 0.05);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start(now);
      osc.stop(now + 0.05);
    } catch {
      // Graceful fallback
    }
  }, [getAudioContext]);

  // Spider-Sense Pulse Sound
  const playSensePulse = useCallback(() => {
    try {
      const ctx = getAudioContext();
      if (!ctx) return;

      const now = ctx.currentTime;
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.type = "sine";
      osc.frequency.setValueAtTime(440, now);
      osc.frequency.linearRampToValueAtTime(880, now + 0.15);
      osc.frequency.linearRampToValueAtTime(440, now + 0.3);

      gain.gain.setValueAtTime(0.15, now);
      gain.gain.exponentialRampToValueAtTime(0.01, now + 0.3);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start(now);
      osc.stop(now + 0.3);
    } catch {
      // Graceful fallback
    }
  }, [getAudioContext]);

  return {
    isMuted,
    isPlaying,
    toggleMute,
    playThwip,
    playClick,
    playSensePulse,
    trackInfo: {
      title: "Sunflower",
      artist: "Post Malone & Swae Lee",
      movie: "Into the Spider-Verse",
    },
  };
}
