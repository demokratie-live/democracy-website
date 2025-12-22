/**
 * TOTP Plugin Types
 */

export interface TotpPluginConfig {
  /**
   * Whether TOTP functionality is enabled globally
   * @default true
   */
  enabled?: boolean;

  /**
   * Whether TOTP is required for all admin users
   * @default false
   */
  required?: boolean;

  /**
   * Issuer name shown in authenticator apps
   * @default 'Payload CMS'
   */
  issuer?: string;

  /**
   * Number of backup codes to generate
   * @default 8
   */
  backupCodesCount?: number;

  /**
   * Token validity window (number of 30-second steps before/after to accept)
   * @default 1
   */
  window?: number;

  /**
   * The slug of the admin users collection
   * @default 'admin-users'
   */
  adminUsersCollection?: string;

  /**
   * Custom routes configuration
   */
  routes?: {
    /**
     * API route prefix for TOTP endpoints
     * @default '/api/admin/totp'
     */
    apiPrefix?: string;

    /**
     * Path for TOTP setup page
     * @default '/admin-setup-totp'
     */
    setupPage?: string;

    /**
     * Path for TOTP verify page
     * @default '/admin-verify-totp'
     */
    verifyPage?: string;

    /**
     * Path for admin login page
     * @default '/admin/login'
     */
    loginPage?: string;
  };

  /**
   * Cookie configuration
   */
  cookies?: {
    /**
     * Name of the TOTP verified cookie
     * @default 'totp-verified'
     */
    name?: string;

    /**
     * Cookie max age in seconds
     * @default 86400 (24 hours)
     */
    maxAge?: number;

    /**
     * Cookie secure flag
     * @default process.env.NODE_ENV === 'production'
     */
    secure?: boolean;

    /**
     * Cookie same site setting
     * @default 'lax'
     */
    sameSite?: 'strict' | 'lax' | 'none';
  };

  /**
   * Localization / i18n
   */
  localization?: {
    locale?: string;
    labels?: TotpLabels;
  };
}

export interface TotpLabels {
  // Login page
  loginTitle?: string;
  loginSubtitle?: string;
  loginButton?: string;
  loginLoading?: string;
  emailLabel?: string;
  passwordLabel?: string;
  forgotPasswordLink?: string;

  // Verify page
  verifyTitle?: string;
  verifySubtitle?: string;
  verifyButton?: string;
  verifyLoading?: string;
  codeLabel?: string;
  backupCodeLabel?: string;
  useBackupCode?: string;
  useAuthenticator?: string;
  logoutButton?: string;

  // Setup page
  setupTitle?: string;
  setupSubtitle?: string;
  scanQrCode?: string;
  manualCode?: string;
  verifySetup?: string;
  skipSetup?: string;
  setupComplete?: string;
  saveBackupCodes?: string;

  // Error messages
  invalidCredentials?: string;
  invalidCode?: string;
  networkError?: string;
  notAuthenticated?: string;

  // Success messages
  totpEnabled?: string;
  totpDisabled?: string;
  totpReset?: string;
}

export interface TotpUserFields {
  totp?: {
    enabled: boolean;
    secret: string | null;
    verified: boolean;
    backupCodes: string[] | null;
  };
}

export interface TotpMiddlewareConfig {
  enabled: boolean;
  required: boolean;
  cookieName: string;
  exemptRoutes: string[];
  verifyPagePath: string;
}

/**
 * Resolved configuration with all defaults applied
 */
export interface ResolvedTotpConfig {
  enabled: boolean;
  required: boolean;
  issuer: string;
  backupCodesCount: number;
  window: number;
  adminUsersCollection: string;
  routes: {
    apiPrefix: string;
    setupPage: string;
    verifyPage: string;
    loginPage: string;
  };
  cookies: {
    name: string;
    maxAge: number;
    secure: boolean;
    sameSite: 'strict' | 'lax' | 'none';
  };
  labels: Required<TotpLabels>;
}
