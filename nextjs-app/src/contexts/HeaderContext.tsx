'use client';

import * as React from 'react';

export type HeaderTheme = 'light' | 'dark';

interface HeaderContextType {
  theme: HeaderTheme;
  setTheme: (theme: HeaderTheme) => void;
}

const HeaderContext = React.createContext<HeaderContextType | undefined>(undefined);

export function HeaderProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = React.useState<HeaderTheme>('dark');

  return (
    <HeaderContext.Provider value={{ theme, setTheme }}>
      {children}
    </HeaderContext.Provider>
  );
}

export function useHeaderTheme() {
  const context = React.useContext(HeaderContext);
  if (context === undefined) {
    throw new Error('useHeaderTheme must be used within a HeaderProvider');
  }
  return context;
}

// Hook for pages to set their header theme
export function useSetHeaderTheme(theme: HeaderTheme) {
  const { setTheme } = useHeaderTheme();
  
  React.useEffect(() => {
    setTheme(theme);
    return () => setTheme('dark'); // Reset to default when leaving page
  }, [theme, setTheme]);
}
