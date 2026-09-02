/**
 * Shared Styles for TOTP Components
 * 
 * Uses inline styles for compatibility with Payload CMS admin panel.
 */

export const styles = {
  // Container styles
  container: {
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#111827',
    padding: '1rem',
  },

  // Card styles
  card: {
    backgroundColor: '#1f2937',
    borderRadius: '0.5rem',
    boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
    padding: '2rem',
    maxWidth: '28rem',
    width: '100%',
  },

  // Header styles
  header: {
    textAlign: 'center' as const,
    marginBottom: '1.5rem',
  },

  iconContainer: {
    width: '4rem',
    height: '4rem',
    backgroundColor: '#2563eb',
    borderRadius: '9999px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    margin: '0 auto 1rem',
    fontSize: '1.875rem',
  },

  title: {
    fontSize: '1.5rem',
    fontWeight: 700,
    color: '#ffffff',
    margin: 0,
  },

  subtitle: {
    color: '#9ca3af',
    marginTop: '0.5rem',
    fontSize: '0.875rem',
  },

  userEmail: {
    color: '#6b7280',
    marginTop: '0.25rem',
    fontSize: '0.75rem',
  },

  // Message boxes
  errorBox: {
    marginBottom: '1rem',
    padding: '0.75rem',
    backgroundColor: 'rgba(127, 29, 29, 0.5)',
    border: '1px solid #ef4444',
    color: '#fca5a5',
    borderRadius: '0.25rem',
    fontSize: '0.875rem',
  },

  successBox: {
    marginBottom: '1rem',
    padding: '0.75rem',
    backgroundColor: 'rgba(22, 101, 52, 0.5)',
    border: '1px solid #22c55e',
    color: '#86efac',
    borderRadius: '0.25rem',
    fontSize: '0.875rem',
  },

  warningBox: {
    marginBottom: '1rem',
    padding: '0.75rem',
    backgroundColor: 'rgba(113, 63, 18, 0.5)',
    border: '1px solid #eab308',
    color: '#fde047',
    borderRadius: '0.25rem',
    fontSize: '0.875rem',
  },

  // Form styles
  formGroup: {
    marginBottom: '1rem',
  },

  formGroupLarge: {
    marginBottom: '1.5rem',
  },

  label: {
    display: 'block',
    fontSize: '0.875rem',
    fontWeight: 500,
    color: '#d1d5db',
    marginBottom: '0.5rem',
  },

  input: {
    width: '100%',
    padding: '0.75rem',
    backgroundColor: '#374151',
    border: '1px solid #4b5563',
    borderRadius: '0.25rem',
    color: '#ffffff',
    fontSize: '1rem',
    outline: 'none',
    boxSizing: 'border-box' as const,
  },

  inputCode: {
    width: '100%',
    padding: '1rem',
    backgroundColor: '#374151',
    border: '1px solid #4b5563',
    borderRadius: '0.25rem',
    color: '#ffffff',
    fontSize: '1.5rem',
    fontFamily: 'monospace',
    letterSpacing: '0.25em',
    textAlign: 'center' as const,
    outline: 'none',
    boxSizing: 'border-box' as const,
  },

  // Button styles
  button: {
    width: '100%',
    backgroundColor: '#2563eb',
    color: '#ffffff',
    padding: '0.75rem 1rem',
    borderRadius: '0.25rem',
    fontWeight: 500,
    border: 'none',
    cursor: 'pointer',
    fontSize: '1rem',
    transition: 'background-color 0.15s ease-in-out',
  },

  buttonGreen: {
    width: '100%',
    backgroundColor: '#16a34a',
    color: '#ffffff',
    padding: '0.75rem 1rem',
    borderRadius: '0.25rem',
    fontWeight: 500,
    border: 'none',
    cursor: 'pointer',
    fontSize: '1rem',
    transition: 'background-color 0.15s ease-in-out',
  },

  buttonSecondary: {
    width: '100%',
    backgroundColor: '#374151',
    color: '#d1d5db',
    padding: '0.75rem 1rem',
    borderRadius: '0.25rem',
    fontWeight: 500,
    border: 'none',
    cursor: 'pointer',
    fontSize: '1rem',
    transition: 'background-color 0.15s ease-in-out',
  },

  buttonDisabled: {
    opacity: 0.5,
    cursor: 'not-allowed',
  },

  // Link styles
  linkContainer: {
    marginTop: '1rem',
    textAlign: 'center' as const,
  },

  link: {
    fontSize: '0.875rem',
    color: '#60a5fa',
    textDecoration: 'none',
    background: 'none',
    border: 'none',
    cursor: 'pointer',
  },

  linkMuted: {
    fontSize: '0.875rem',
    color: '#6b7280',
    textDecoration: 'none',
    background: 'none',
    border: 'none',
    cursor: 'pointer',
  },

  // Footer styles
  footer: {
    marginTop: '2rem',
    paddingTop: '1.5rem',
    borderTop: '1px solid #374151',
    textAlign: 'center' as const,
  },

  footerText: {
    fontSize: '0.75rem',
    color: '#6b7280',
    margin: 0,
  },

  // QR Code styles
  qrContainer: {
    display: 'flex',
    justifyContent: 'center',
    marginBottom: '1rem',
  },

  qrCode: {
    width: '12rem',
    height: '12rem',
    backgroundColor: '#ffffff',
    padding: '0.5rem',
    borderRadius: '0.25rem',
  },

  // Manual code display
  manualCodeContainer: {
    backgroundColor: '#374151',
    padding: '0.75rem',
    borderRadius: '0.25rem',
    marginBottom: '1rem',
  },

  manualCodeLabel: {
    color: '#9ca3af',
    fontSize: '0.75rem',
    marginBottom: '0.5rem',
  },

  manualCode: {
    fontFamily: 'monospace',
    fontSize: '0.875rem',
    color: '#ffffff',
    textAlign: 'center' as const,
    letterSpacing: '0.1em',
  },

  // Backup codes grid
  backupCodesGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
    gap: '0.5rem',
    marginBottom: '1rem',
  },

  backupCode: {
    backgroundColor: '#374151',
    padding: '0.5rem',
    borderRadius: '0.25rem',
    fontFamily: 'monospace',
    fontSize: '0.875rem',
    textAlign: 'center' as const,
    color: '#ffffff',
  },

  // Loading state
  loading: {
    color: '#ffffff',
  },
};
