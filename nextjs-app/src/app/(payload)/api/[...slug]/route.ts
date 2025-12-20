/* THIS FILE WAS GENERATED AUTOMATICALLY BY PAYLOAD. */
import type { ServerFunctionClient } from 'payload';

import config from '@payload-config';
import { handleServerFunctions } from '@payloadcms/next/utilities';
import { importMap } from '../../importMap';

export const POST: ServerFunctionClient = (args) =>
  handleServerFunctions({
    ...args,
    config,
    importMap,
  });
