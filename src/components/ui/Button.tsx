import React from 'react';
import { Loader2 } from 'lucide-react';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'outline';
  icon?: React.ReactNode;
  loading?: boolean;
}

export const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  icon, 
  className = '', 
  loading = false,
  disabled,
  ...props 
}) => {
  const isDisabled = disabled || loading;

  return (
    <button 
      className={`button button--${variant} ${loading ? 'button--loading' : ''} ${className}`}
      disabled={isDisabled}
      aria-busy={loading}
      {...props}
    >
      {loading ? <Loader2 size={18} className="button__spinner" /> : icon}
      {children}
    </button>
  );
};
