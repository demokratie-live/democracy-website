import React from 'react';
import { cn } from '@/lib/utils';

interface StatsCardProps {
  title: string;
  value: string | number;
  change?: {
    value: number;
    type: 'increase' | 'decrease' | 'neutral';
  };
  icon?: React.ReactNode;
  className?: string;
}

export function StatsCard({ title, value, change, icon, className }: StatsCardProps) {
  return (
    <div className={cn(
      'bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700 shadow-sm',
      className
    )}>
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-medium text-gray-500 dark:text-gray-400">{title}</p>
          <p className="mt-2 text-3xl font-bold text-gray-900 dark:text-white">{value}</p>
          {change && (
            <div className="mt-2 flex items-center text-sm">
              {change.type === 'increase' && (
                <svg className="w-4 h-4 text-green-500 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
                </svg>
              )}
              {change.type === 'decrease' && (
                <svg className="w-4 h-4 text-red-500 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              )}
              <span className={cn(
                'font-medium',
                change.type === 'increase' && 'text-green-600 dark:text-green-400',
                change.type === 'decrease' && 'text-red-600 dark:text-red-400',
                change.type === 'neutral' && 'text-gray-600 dark:text-gray-400'
              )}>
                {change.value > 0 ? '+' : ''}{change.value}%
              </span>
              <span className="text-gray-500 dark:text-gray-400 ml-1">vs. letzten Monat</span>
            </div>
          )}
        </div>
        {icon && (
          <div className="p-3 rounded-xl" style={{ backgroundColor: 'rgba(68, 148, 211, 0.1)' }}>
            <div style={{ color: 'rgb(68, 148, 211)' }}>
              {icon}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

interface DataTableColumn<T> {
  key: keyof T | string;
  label: string;
  render?: (item: T) => React.ReactNode;
  sortable?: boolean;
  className?: string;
}

interface DataTableProps<T> {
  columns: DataTableColumn<T>[];
  data: T[];
  loading?: boolean;
  emptyMessage?: string;
  onRowClick?: (item: T) => void;
  keyExtractor?: (item: T) => string;
}

export function DataTable<T extends Record<string, unknown>>({
  columns,
  data,
  loading,
  emptyMessage = 'Keine Daten vorhanden',
  onRowClick,
  keyExtractor,
}: DataTableProps<T>) {
  if (loading) {
    return (
      <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 overflow-hidden">
        <div className="animate-pulse p-4">
          <div className="h-10 bg-gray-200 dark:bg-gray-700 rounded mb-4" />
          {[...Array(5)].map((_, i) => (
            <div key={i} className="h-12 bg-gray-100 dark:bg-gray-700/50 rounded mb-2" />
          ))}
        </div>
      </div>
    );
  }

  if (data.length === 0) {
    return (
      <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-12 text-center">
        <svg className="w-12 h-12 mx-auto text-gray-400 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" />
        </svg>
        <p className="text-gray-500 dark:text-gray-400">{emptyMessage}</p>
      </div>
    );
  }

  const getNestedValue = (obj: T, path: string): unknown => {
    return path.split('.').reduce((acc: unknown, part: string) => {
      if (acc && typeof acc === 'object' && part in acc) {
        return (acc as Record<string, unknown>)[part];
      }
      return undefined;
    }, obj);
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 overflow-hidden">
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
          <thead className="bg-gray-50 dark:bg-gray-700/50">
            <tr>
              {columns.map((column) => (
                <th
                  key={String(column.key)}
                  className={cn(
                    'px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider',
                    column.sortable && 'cursor-pointer hover:text-gray-700 dark:hover:text-gray-200',
                    column.className
                  )}
                >
                  {column.label}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
            {data.map((item, index) => (
              <tr
                key={keyExtractor ? keyExtractor(item) : index}
                className={cn(
                  'hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors',
                  onRowClick && 'cursor-pointer'
                )}
                onClick={() => onRowClick?.(item)}
              >
                {columns.map((column) => (
                  <td
                    key={String(column.key)}
                    className={cn(
                      'px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-gray-100',
                      column.className
                    )}
                  >
                    {column.render
                      ? column.render(item)
                      : String(getNestedValue(item, String(column.key)) ?? '-')}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

interface StatusBadgeProps {
  status: 'active' | 'inactive' | 'pending' | 'completed' | 'planned' | 'in-progress';
  className?: string;
}

const statusConfig = {
  active: { label: 'Aktiv', className: 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400' },
  inactive: { label: 'Inaktiv', className: 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300' },
  pending: { label: 'Ausstehend', className: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400' },
  completed: { label: 'Abgeschlossen', className: 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400' },
  planned: { label: 'Geplant', className: 'bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-400' },
  'in-progress': { label: 'In Bearbeitung', className: 'bg-orange-100 text-orange-800 dark:bg-orange-900/30 dark:text-orange-400' },
};

export function StatusBadge({ status, className }: StatusBadgeProps) {
  const config = statusConfig[status];
  return (
    <span className={cn(
      'inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium',
      config.className,
      className
    )}>
      {config.label}
    </span>
  );
}

interface ProgressBarProps {
  value: number;
  max: number;
  label?: string;
  showPercentage?: boolean;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export function ProgressBar({ value, max, label, showPercentage = true, size = 'md', className }: ProgressBarProps) {
  const percentage = Math.min(Math.round((value / max) * 100), 100);
  const heightClass = {
    sm: 'h-1.5',
    md: 'h-2.5',
    lg: 'h-4',
  }[size];

  return (
    <div className={className}>
      {(label || showPercentage) && (
        <div className="flex justify-between items-center mb-1">
          {label && <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{label}</span>}
          {showPercentage && <span className="text-sm text-gray-500 dark:text-gray-400">{percentage}%</span>}
        </div>
      )}
      <div className={cn('w-full bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden', heightClass)}>
        <div
          className={cn('rounded-full transition-all duration-500', heightClass)}
          style={{
            width: `${percentage}%`,
            backgroundColor: 'rgb(68, 148, 211)',
          }}
        />
      </div>
    </div>
  );
}

interface EmptyStateProps {
  icon?: React.ReactNode;
  title: string;
  description?: string;
  action?: React.ReactNode;
}

export function EmptyState({ icon, title, description, action }: EmptyStateProps) {
  return (
    <div className="text-center py-12">
      {icon && (
        <div className="mx-auto w-12 h-12 text-gray-400 mb-4">
          {icon}
        </div>
      )}
      <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-1">{title}</h3>
      {description && (
        <p className="text-gray-500 dark:text-gray-400 mb-4 max-w-sm mx-auto">{description}</p>
      )}
      {action}
    </div>
  );
}

interface ConfirmDialogProps {
  open: boolean;
  onClose: () => void;
  onConfirm: () => void;
  title: string;
  message: string;
  confirmLabel?: string;
  cancelLabel?: string;
  variant?: 'danger' | 'warning' | 'default';
  loading?: boolean;
}

export function ConfirmDialog({
  open,
  onClose,
  onConfirm,
  title,
  message,
  confirmLabel = 'Bestätigen',
  cancelLabel = 'Abbrechen',
  variant = 'default',
  loading,
}: ConfirmDialogProps) {
  if (!open) return null;

  const confirmButtonClass = {
    danger: 'bg-red-600 hover:bg-red-700 focus:ring-red-500',
    warning: 'bg-yellow-600 hover:bg-yellow-700 focus:ring-yellow-500',
    default: 'bg-blue-600 hover:bg-blue-700 focus:ring-blue-500',
  }[variant];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="fixed inset-0 bg-black/50" onClick={onClose} />
      <div className="relative bg-white dark:bg-gray-800 rounded-xl shadow-xl max-w-md w-full mx-4 p-6">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">{title}</h3>
        <p className="text-gray-600 dark:text-gray-400 mb-6">{message}</p>
        <div className="flex justify-end gap-3">
          <button
            onClick={onClose}
            disabled={loading}
            className="px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 bg-gray-100 dark:bg-gray-700 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
          >
            {cancelLabel}
          </button>
          <button
            onClick={onConfirm}
            disabled={loading}
            className={cn(
              'px-4 py-2 text-sm font-medium text-white rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2',
              confirmButtonClass,
              loading && 'opacity-50 cursor-not-allowed'
            )}
          >
            {loading ? 'Lädt...' : confirmLabel}
          </button>
        </div>
      </div>
    </div>
  );
}

const AdminComponents = {
  StatsCard,
  DataTable,
  StatusBadge,
  ProgressBar,
  EmptyState,
  ConfirmDialog,
};

export default AdminComponents;
