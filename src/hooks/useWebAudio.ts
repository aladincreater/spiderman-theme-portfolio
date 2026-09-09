import { useState, useEffect, useCallback } from "react";

const AUDIO_STORAGE_KEY = "spidey_portfolio_music_muted";

// Singleton background audio element
let globalAudio: HTMLAudioElement | null = null;
let globalAudioCtx: AudioContext | null = null;
const listeners = new Set<() => void>();

let globalIsPlaying = false;
let globalIsMuted = true;

function getAudioSrc(): string {
  if (typeof window === "undefined") return "sunflower.mp3";
  const baseUrl = import.meta.env.BASE_URL || "./";
  const cleanBase = baseUrl.endsWith("/") ? baseUrl : `${baseUrl}/`;
  return `${cleanBase}sunflower.mp3`;
}

function initGlobalAudio() {
  if (typeof window === "undefined" || globalAudio) return;

  const src = getAudioSrc();
  globalAudio = new Audio(src);
  globalAudio.loop = true;
  globalAudio.volume = 0.5;
  globalAudio.preload = "auto";

  try {
    const saved = localStorage.getItem(AUDIO_STORAGE_KEY);
    if (saved !== null) {
      globalIsMuted = JSON.parse(saved);
    }
  } catch {
    globalIsMuted = true;
  }

  globalAudio.addEventListener("play", () => {
    globalIsPlaying = true;
    notifyListeners();
  });

  globalAudio.addEventListener("pause", () => {
    globalIsPlaying = false;
    notifyListeners();
  });

  globalAudio.addEventListener("ended", () => {
    globalIsPlaying = false;
    notifyListeners();
  });

  globalAudio.addEventListener("error", (e) => {
    console.error("Audio playback error:", e, globalAudio?.error);
    globalIsPlaying = false;
    notifyListeners();
  });
}

function notifyListeners() {
  listeners.forEach((listener) => listener());
}

function getGlobalAudioContext(): AudioContext | null {
  if (typeof window === "undefined") return null;
  if (!globalAudioCtx) {
    const AudioCtx =
      window.AudioContext ||
      (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
    if (AudioCtx) {
      globalAudioCtx = new AudioCtx();
    }
  }
  if (globalAudioCtx && globalAudioCtx.state === "suspended") {
    globalAudioCtx.resume().catch(() => {});
  }
  return globalAudioCtx;
}

export function useWebAudio() {
  const [, setTick] = useState(0);

  useEffect(() => {
    initGlobalAudio();
    const update = () => setTick((t) => t + 1);
    listeners.add(update);
    return () => {
      listeners.delete(update);
    };
  }, []);

  // Toggle Music Play/Pause & Mute
  const toggleMute = useCallback(() => {
    initGlobalAudio();
    const audio = globalAudio;
    if (!audio) return;

    if (globalIsPlaying) {
      audio.pause();
      globalIsMuted = true;
      globalIsPlaying = false;
      try {
        localStorage.setItem(AUDIO_STORAGE_KEY, JSON.stringify(true));
      } catch {}
      notifyListeners();
    } else {
      audio.currentTime = audio.currentTime || 0;
      audio.volume = 0.5;
      audio.muted = false;
      
      const playPromise = audio.play();
      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            globalIsMuted = false;
            globalIsPlaying = true;
            try {
              localStorage.setItem(AUDIO_STORAGE_KEY, JSON.stringify(false));
            } catch {}
            notifyListeners();
          })
          .catch((err) => {
            console.warn("Autoplay blocked or playback error:", err);
            globalIsPlaying = false;
            notifyListeners();
          });
      }
    }
  }, []);

  // Web Shooter "THWIP!" sound synthesizer
  const playThwip = useCallback(() => {
    try {
      const ctx = getGlobalAudioContext();
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
  }, []);

  // Comic Click Sound
  const playClick = useCallback(() => {
    try {
      const ctx = getGlobalAudioContext();
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
  }, []);

  // Spider-Sense Pulse Sound
  const playSensePulse = useCallback(() => {
    try {
      const ctx = getGlobalAudioContext();
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
  }, []);

  return {
    isMuted: globalIsMuted,
    isPlaying: globalIsPlaying,
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

