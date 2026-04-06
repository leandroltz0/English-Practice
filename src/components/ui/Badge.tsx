import React from 'react';

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: 'neutral' | 'success';
}

export const Badge: React.FC<BadgeProps> = ({ 
  children, 
  variant = 'neutral',
  className = '',
  ...props 
}) => {
  return (
    <span className={`badge badge--${variant} ${className}`} {...props}>
      {children}
    </span>
  );
};
