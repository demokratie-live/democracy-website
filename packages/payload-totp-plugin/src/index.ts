/**
 * @democracy-deutschland/payload-totp-plugin
 * 
 * A Payload CMS plugin for adding TOTP (Time-based One-Time Password)
 * two-factor authentication to your admin panel.
 * 
 * @example
 * ```typescript
 * // payload.config.ts
 * import { totpPlugin } from '@democracy-deutschland/payload-totp-plugin';
 * 
 * export default buildConfig({
 *   plugins: [
 *     totpPlugin({
 *       enabled: true,
 *       required: true,
 *       issuer: 'My App',
 *     }),
 *   ],
 * });
 * ```
 */

import type { Config, Plugin } from 'payload';
import type { TotpPluginConfig, ResolvedTotpConfig } from './types';
import { resolveConfig } from './config';
import { totpFields } from './fields';

// Re-export all public APIs
export * from './types';
export * from './config';
export * from './core';
export * from './fields';
export * from './middleware';
export * from './handlers';
export * from './labels';
export { LoginPage, VerifyPage, SetupPage, styles } from './components';
export type { LoginPageProps, VerifyPageProps, SetupPageProps } from './components';

/**
 * Payload CMS TOTP Plugin
 * 
 * Adds TOTP two-factor authentication to your admin panel.
 * 
 * @param userConfig - Plugin configuration options
 * @returns Payload plugin function
 * 
 * @example Basic Usage
 * ```typescript
 * totpPlugin({
 *   enabled: true,
 *   issuer: 'My Application',
 * })
 * ```
 * 
 * @example Full Configuration
 * ```typescript
 * totpPlugin({
 *   enabled: true,
 *   required: true,
 *   issuer: 'My Application',
 *   adminUsersCollection: 'admin-users',
 *   routes: {
 *     apiPrefix: '/api/admin/totp',
 *     setupPage: '/admin-setup-totp',
 *     verifyPage: '/admin-verify-totp',
 *     loginPage: '/admin/login',
 *   },
 *   cookie: {
 *     name: 'totp-verified',
 *     maxAge: 86400,
 *   },
 *   labels: {
 *     de: {
 *       loginTitle: 'Admin-Login',
 *     },
 *   },
 * })
 * ```
 */
export function totpPlugin(userConfig: TotpPluginConfig = {}): Plugin {
  const config = resolveConfig(userConfig);

  return (incomingConfig: Config): Config => {
    // If plugin is disabled, return config unchanged
    if (!config.enabled) {
      return incomingConfig;
    }

    // Find and modify the admin users collection
    const collections = incomingConfig.collections?.map((collection) => {
      if (collection.slug === config.adminUsersCollection) {
        // Add TOTP fields to the collection
        return {
          ...collection,
          fields: [
            ...(collection.fields || []),
            ...totpFields,
          ],
        };
      }
      return collection;
    });

    // Return modified config
    return {
      ...incomingConfig,
      collections,
    };
  };
}

/**
 * Get the resolved configuration
 * Useful for accessing config values in your application
 */
export function getResolvedConfig(userConfig: TotpPluginConfig = {}): ResolvedTotpConfig {
  return resolveConfig(userConfig);
}

// Default export
export default totpPlugin;
