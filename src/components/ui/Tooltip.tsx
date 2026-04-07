import React, { useState, useRef, useEffect } from 'react';

interface TooltipProps {
  content: string;
  children: React.ReactNode;
  delay?: number;
}

export const Tooltip: React.FC<TooltipProps> = ({ content, children, delay = 300 }) => {
  const [visible, setVisible] = useState(false);
  const timeoutRef = useRef<number | null>(null);
  const tooltipId = useRef(`tooltip-${Math.random().toString(36).slice(2, 9)}`);

  const show = () => { timeoutRef.current = window.setTimeout(() => setVisible(true), delay); };
  const hide = () => { if (timeoutRef.current) clearTimeout(timeoutRef.current); setVisible(false); };

  useEffect(() => () => { if (timeoutRef.current) clearTimeout(timeoutRef.current); }, []);

  return (
    <div className="tooltip-wrapper" onMouseEnter={show} onMouseLeave={hide} onFocus={show} onBlur={hide}>
      <div aria-describedby={visible ? tooltipId.current : undefined}>{children}</div>
      {visible && (
        <div id={tooltipId.current} className="tooltip" role="tooltip">
          {content}
          <div className="tooltip__arrow" />
        </div>
      )}
    </div>
  );
};
