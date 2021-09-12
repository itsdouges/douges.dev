import { useEffect, useState, useRef } from 'react';
import { createPortal } from 'react-dom';

interface PortalProps {
  children: React.ReactNode;
}

function Portal({ children }: PortalProps) {
  const [isClient, setIsClient] = useState(false);
  const portalContainerRef = useRef<HTMLElement>();

  useEffect(() => {
    let portalContainer = document.getElementById('ds-portal');
    if (!portalContainer) {
      portalContainer = document.createElement('div');
      portalContainer.id = 'ds-portal';
      document.body.appendChild(portalContainer);
    }

    portalContainerRef.current = portalContainer;

    setIsClient(true);
  }, []);

  return isClient && portalContainerRef.current
    ? createPortal(children, portalContainerRef.current)
    : null;
}

export default Portal;
