'use client';

import * as React from 'react';
import { cn } from '@/lib/utils';

export interface ModalProps {
  open: boolean;
  onClose: () => void;
  title?: string;
  description?: string;
  children: React.ReactNode;
  className?: string;
}

const Modal: React.FC<ModalProps> = ({
  open,
  onClose,
  title,
  description,
  children,
  className,
}) => {
  React.useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    if (open) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/50"
        onClick={onClose}
        aria-hidden="true"
      />
      
      {/* Modal */}
      <div
        className={cn(
          'relative z-50 w-full max-w-lg max-h-[90vh] overflow-y-auto rounded-lg bg-white p-6 shadow-xl',
          className
        )}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-white transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
          <span className="sr-only">Schließen</span>
        </button>

        {/* Title */}
        {title && (
          <h2 className="text-lg font-semibold mb-2">{title}</h2>
        )}

        {/* Description */}
        {description && (
          <p className="text-sm text-gray-500 mb-4">{description}</p>
        )}

        {/* Content */}
        {children}
      </div>
    </div>
  );
};

export { Modal };
