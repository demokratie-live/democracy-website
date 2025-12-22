import { describe, it, expect } from 'vitest';
import { cn, formatCurrency, formatDate } from '@/lib/utils';

describe('cn (className merge utility)', () => {
  it('should merge class names', () => {
    expect(cn('foo', 'bar')).toBe('foo bar');
  });

  it('should handle conditional classes', () => {
    expect(cn('base', true && 'active', false && 'disabled')).toBe('base active');
  });

  it('should merge tailwind classes correctly', () => {
    expect(cn('px-2 py-1', 'px-4')).toBe('py-1 px-4');
  });

  it('should handle undefined and null values', () => {
    expect(cn('base', undefined, null, 'end')).toBe('base end');
  });

  it('should handle empty strings', () => {
    expect(cn('', 'foo', '')).toBe('foo');
  });

  it('should handle arrays', () => {
    expect(cn(['foo', 'bar'])).toBe('foo bar');
  });
});

describe('formatCurrency', () => {
  it('should format currency in German locale', () => {
    const result = formatCurrency(1000);
    expect(result).toMatch(/1[.\s]?000/);
    expect(result).toContain('€');
  });

  it('should format zero correctly', () => {
    const result = formatCurrency(0);
    expect(result).toContain('0');
    expect(result).toContain('€');
  });

  it('should format negative amounts', () => {
    const result = formatCurrency(-500);
    expect(result).toContain('500');
    expect(result).toContain('€');
  });

  it('should format large amounts', () => {
    const result = formatCurrency(1000000);
    expect(result).toMatch(/1[.\s]?000[.\s]?000/);
  });
});

describe('formatDate', () => {
  it('should format Date object correctly', () => {
    const date = new Date('2024-03-15');
    const result = formatDate(date);
    expect(result).toContain('15');
    expect(result).toContain('März');
    expect(result).toContain('2024');
  });

  it('should format ISO string correctly', () => {
    const result = formatDate('2024-12-25');
    expect(result).toContain('25');
    expect(result).toContain('Dezember');
    expect(result).toContain('2024');
  });

  it('should handle different months', () => {
    const januaryDate = new Date('2024-01-01');
    expect(formatDate(januaryDate)).toContain('Januar');

    const julyDate = new Date('2024-07-15');
    expect(formatDate(julyDate)).toContain('Juli');
  });
});
