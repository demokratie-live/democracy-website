/* THIS FILE WAS GENERATED AUTOMATICALLY BY PAYLOAD. */
/* DO NOT MODIFY IT BECAUSE IT COULD BE REWRITTEN AT ANY TIME. */
import config from '@payload-config'
import { REST_DELETE, REST_GET, REST_OPTIONS, REST_PATCH, REST_POST } from '@payloadcms/next/routes'
import { importMap } from '../../(payload)/importMap'

export const GET = REST_GET(config, importMap)
export const POST = REST_POST(config, importMap)
export const DELETE = REST_DELETE(config, importMap)
export const PATCH = REST_PATCH(config, importMap)
export const OPTIONS = REST_OPTIONS(config)
