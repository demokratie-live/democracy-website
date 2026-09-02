'use client';

/**
 * TOTP Check Component for Payload CMS Admin
 * 
 * This component runs on the admin dashboard and checks if TOTP
 * verification is required. If so, it redirects to the TOTP verification page.
 */

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

export function TotpCheck() {
  const router = useRouter();
  const [checking, setChecking] = useState(true);

  useEffect(() => {
    const checkTotpStatus = async () => {
      try {
        // Get current user
        const meResponse = await fetch('/api/admin-users/me', {
          credentials: 'include',
        });
        
        if (!meResponse.ok) {
          setChecking(false);
          return;
        }

        const meData = await meResponse.json();
        if (!meData.user) {
          setChecking(false);
          return;
        }

        const userId = meData.user.id;

        // Check if already verified in this session
        const sessionVerified = sessionStorage.getItem(`totp_verified_${userId}`);
        if (sessionVerified) {
          setChecking(false);
          return;
        }

        // Check TOTP status
        const statusResponse = await fetch('/api/admin/totp/status', {
          credentials: 'include',
        });

        if (!statusResponse.ok) {
          setChecking(false);
          return;
        }

        const statusData = await statusResponse.json();

        if (statusData.success) {
          const { enabled, verified } = statusData.data;
          
          if (enabled && verified) {
            // TOTP is enabled and configured, but not verified in this session
            // Redirect to verification page
            router.push(`/admin-verify-totp?redirect=${encodeURIComponent(window.location.pathname)}`);
            return;
          }
          
          if (!enabled) {
            // TOTP not set up - check if user dismissed setup prompt
            const dismissedSetup = sessionStorage.getItem(`totp_setup_dismissed_${userId}`);
            if (!dismissedSetup) {
              // Optional: Redirect to setup page
              // router.push(`/admin-setup-totp?redirect=${encodeURIComponent(window.location.pathname)}&optional=true`);
            }
          }
        }
        
        setChecking(false);
      } catch (err) {
        console.error('TOTP check error:', err);
        setChecking(false);
      }
    };

    checkTotpStatus();
  }, [router]);

  // This component doesn't render anything visible
  // It just runs the check and redirects if needed
  if (checking) {
    return null;
  }

  return null;
}

export default TotpCheck;
