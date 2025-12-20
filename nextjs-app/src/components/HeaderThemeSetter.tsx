'use client';

import { useSetHeaderTheme, HeaderTheme } from '@/contexts/HeaderContext';

interface HeaderThemeSetterProps {
  theme: HeaderTheme;
}

export default function HeaderThemeSetter({ theme }: HeaderThemeSetterProps) {
  useSetHeaderTheme(theme);
  return null;
}
