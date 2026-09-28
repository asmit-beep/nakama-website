"use client";

import { useCallback, useEffect, useRef, useState } from "react";

/**
 * Shared play / pause / seek / mute plumbing for the mock video players.
 * `onFrame` runs on a rAF loop while playing so the scrubber can be painted
 * imperatively without re-rendering React on every frame.
 */
export function useVideoTransport({
  initialPlaying,
  initialMuted = true,
  onFrame,
}: {
  initialPlaying: boolean;
  initialMuted?: boolean;
  onFrame: (video: HTMLVideoElement) => void;
}) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const seekerRef = useRef<HTMLDivElement>(null);
  const rafRef = useRef<number | null>(null);
  const [playing, setPlaying] = useState(initialPlaying);
  const [muted, setMuted] = useState(initialMuted);

  const paint = useCallback(() => {
    const video = videoRef.current;
    if (video) onFrame(video);
  }, [onFrame]);

  const stopLoop = useCallback(() => {
    if (rafRef.current) cancelAnimationFrame(rafRef.current);
    rafRef.current = null;
  }, []);

  const startLoop = useCallback(() => {
    stopLoop();
    const tick = () => {
      paint();
      rafRef.current = requestAnimationFrame(tick);
    };
    rafRef.current = requestAnimationFrame(tick);
  }, [paint, stopLoop]);

  useEffect(() => stopLoop, [stopLoop]);

  const togglePlay = useCallback(() => {
    const video = videoRef.current;
    if (!video) return;
    if (video.paused) video.play().catch(() => {});
    else video.pause();
  }, []);

  const toggleMute = useCallback(() => setMuted((m) => !m), []);

  const seekTo = useCallback(
    (clientX: number) => {
      const video = videoRef.current;
      const seeker = seekerRef.current;
      if (!video || !seeker || !video.duration) return;
      const rect = seeker.getBoundingClientRect();
      video.currentTime =
        Math.max(0, Math.min(1, (clientX - rect.left) / rect.width)) * video.duration;
      paint();
    },
    [paint],
  );

  const videoHandlers = {
    onPlay: useCallback(() => {
      setPlaying(true);
      startLoop();
    }, [startLoop]),
    onPause: useCallback(() => {
      setPlaying(false);
      stopLoop();
      paint();
    }, [paint, stopLoop]),
    onEnded: useCallback(() => {
      setPlaying(false);
      stopLoop();
      paint();
    }, [paint, stopLoop]),
    onLoadedMetadata: paint,
  };

  return {
    videoRef,
    seekerRef,
    playing,
    setPlaying,
    muted,
    setMuted,
    togglePlay,
    toggleMute,
    seekTo,
    paint,
    videoHandlers,
  };
}
