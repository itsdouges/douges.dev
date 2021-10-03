import { useRef, useEffect } from 'react';

interface AudioProps {
  src: string;
  isMuted?: boolean;
}

function Audio({ src, isMuted }: AudioProps) {
  const ref = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    if (!ref.current) {
      return;
    }

    if (isMuted) {
      ref.current.pause();
    } else {
      ref.current.play();
    }
  }, [src, isMuted]);

  return <audio key={src} muted={isMuted} preload="metadata" ref={ref} src={src} />;
}

export default Audio;
