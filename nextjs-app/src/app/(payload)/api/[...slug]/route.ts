/* THIS FILE WAS GENERATED AUTOMATICALLY BY PAYLOAD. */
import type { ServerFunctionClient } from 'payload';

import config from '@payload-config';
import { REST_POST } from '@payloadcms/next/routes';
import { importMap } from '../../importMap';

export const POST: ServerFunctionClient = (args) =>
  REST_POST({
    ...args,
    config,
    importMap,
  });
