import * as React from 'react';
import { cn } from '@/lib/utils';

export interface CheckboxProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

const Checkbox = React.forwardRef<HTMLInputElement, CheckboxProps>(
  ({ className, label, error, id, ...props }, ref) => {
    const checkboxId = id || `checkbox-${Math.random().toString(36).substr(2, 9)}`;
    
    return (
      <div className="flex items-start">
        <div className="flex items-center h-5">
          <input
            type="checkbox"
            id={checkboxId}
            className={cn(
              'h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2',
              error && 'border-red-500',
              className
            )}
            ref={ref}
            {...props}
          />
        </div>
        {label && (
          <div className="ml-3">
            <label htmlFor={checkboxId} className="text-sm text-gray-700">
              {label}
            </label>
            {error && (
              <p className="mt-1 text-sm text-red-600">{error}</p>
            )}
          </div>
        )}
      </div>
    );
  }
);
Checkbox.displayName = 'Checkbox';

export { Checkbox };
