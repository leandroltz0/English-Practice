import React from 'react';

interface SkeletonProps {
  width?: string;
  height?: string;
  variant?: 'text' | 'card' | 'circle' | 'bar';
  count?: number;
}

export const Skeleton: React.FC<SkeletonProps> = ({ width, height, variant = 'text', count = 1 }) => {
  return (
    <>
      {Array.from({ length: count }, (_, i) => (
        <div key={i} className={`skeleton skeleton--${variant}`} style={{ width, height }} aria-hidden="true" />
      ))}
    </>
  );
};

export const CardSkeleton: React.FC = () => (
  <div className="skeleton-card" aria-hidden="true">
    <Skeleton variant="bar" height="20px" width="60%" />
    <Skeleton variant="text" count={3} />
    <Skeleton variant="bar" height="36px" width="120px" />
  </div>
);

export const ListSkeleton: React.FC<{ rows?: number }> = ({ rows = 5 }) => (
  <div className="skeleton-list" aria-hidden="true">
    {Array.from({ length: rows }, (_, i) => (
      <div key={i} className="skeleton-list__row">
        <Skeleton variant="circle" width="40px" height="40px" />
        <div className="skeleton-list__text">
          <Skeleton variant="bar" height="16px" width="70%" />
          <Skeleton variant="text" width="50%" />
        </div>
      </div>
    ))}
  </div>
);
