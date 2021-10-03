import { useRef, useEffect } from 'react';

interface AudioProps {
  src: string;
  isMuted?: boolean;
}

let audioContext: AudioContext;

function Audio({ src, isMuted }: AudioProps) {
  const ref = useRef<HTMLAudioElement>(null);

  if (!audioContext) {
    audioContext = new AudioContext();
  }

  useEffect(() => {
    if (!ref.current) {
      return;
    }

    ref.current.play();
  }, []);

  return <audio muted={isMuted} preload="metadata" ref={ref} src={src} />;
}

export default Audio;
