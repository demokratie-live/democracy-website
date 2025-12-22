/**
 * TOTP Plugin Configuration Resolver
 */

import type { TotpPluginConfig, ResolvedTotpConfig } from './types';
import { defaultLabels } from './labels';

/**
 * Resolves plugin configuration with defaults
 */
export function resolveConfig(config: TotpPluginConfig = {}): ResolvedTotpConfig {
  return {
    enabled: config.enabled ?? true,
    required: config.required ?? false,
    issuer: config.issuer ?? 'Payload CMS',
    backupCodesCount: config.backupCodesCount ?? 8,
    window: config.window ?? 1,
    adminUsersCollection: config.adminUsersCollection ?? 'admin-users',
    routes: {
      apiPrefix: config.routes?.apiPrefix ?? '/api/admin/totp',
      setupPage: config.routes?.setupPage ?? '/admin-setup-totp',
      verifyPage: config.routes?.verifyPage ?? '/admin-verify-totp',
      loginPage: config.routes?.loginPage ?? '/admin/login',
    },
    cookies: {
      name: config.cookies?.name ?? 'totp-verified',
      maxAge: config.cookies?.maxAge ?? 86400,
      secure: config.cookies?.secure ?? process.env.NODE_ENV === 'production',
      sameSite: config.cookies?.sameSite ?? 'lax',
    },
    labels: {
      ...defaultLabels,
      ...config.localization?.labels,
    },
  };
}

/**
 * Creates environment variable configuration
 */
export function createEnvConfig(): Partial<TotpPluginConfig> {
  return {
    enabled: process.env.TOTP_ENABLED !== 'false',
    required: process.env.TOTP_REQUIRED === 'true',
    issuer: process.env.TOTP_ISSUER,
    backupCodesCount: process.env.TOTP_BACKUP_CODES_COUNT
      ? parseInt(process.env.TOTP_BACKUP_CODES_COUNT, 10)
      : undefined,
    window: process.env.TOTP_WINDOW
      ? parseInt(process.env.TOTP_WINDOW, 10)
      : undefined,
  };
}

/**
 * Merges environment configuration with provided config
 */
export function mergeWithEnv(config: TotpPluginConfig = {}): TotpPluginConfig {
  const envConfig = createEnvConfig();
  return {
    ...envConfig,
    ...config,
    // Nested objects need special handling
    routes: {
      ...config.routes,
    },
    cookies: {
      ...config.cookies,
    },
    localization: {
      ...config.localization,
    },
  };
}
