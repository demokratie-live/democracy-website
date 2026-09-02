'use client';

import React, { useState, useEffect } from 'react';
import { AdminSidebar } from '@/components/admin/AdminSidebar';
import { AdminHeader } from '@/components/admin/AdminHeader';
import { cn } from '@/lib/utils';

interface AdminLayoutProps {
  children: React.ReactNode;
}

export default function AdminDashboardLayout({ children }: AdminLayoutProps) {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    // Check for saved theme preference or system preference
    const savedTheme = localStorage.getItem('admin-theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    const shouldBeDark = savedTheme === 'dark' || (!savedTheme && prefersDark);
    if (shouldBeDark) {
      document.documentElement.classList.add('dark');
    }
    // Use callback to avoid setState during render
    requestAnimationFrame(() => {
      setIsDarkMode(shouldBeDark);
    });
  }, []);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    if (!isDarkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('admin-theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('admin-theme', 'light');
    }
  };

  // Mock user - in production, this would come from auth context
  const user = {
    name: 'Admin User',
    email: 'admin@democracy-deutschland.de',
    role: 'Administrator',
  };

  return (
    <div className={cn('min-h-screen bg-gray-100 dark:bg-gray-900', isDarkMode && 'dark')}>
      <AdminSidebar 
        collapsed={sidebarCollapsed} 
        onToggle={() => setSidebarCollapsed(!sidebarCollapsed)} 
      />
      
      <div className={cn(
        'transition-all duration-300',
        sidebarCollapsed ? 'lg:ml-16' : 'lg:ml-64'
      )}>
        <AdminHeader 
          user={user} 
          onToggleDarkMode={toggleDarkMode}
          isDarkMode={isDarkMode}
        />
        
        <main className="p-4 lg:p-6">
          {children}
        </main>
      </div>
    </div>
  );
}
