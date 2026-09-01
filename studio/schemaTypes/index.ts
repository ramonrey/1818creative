import type { SchemaTypeDefinition } from 'sanity';

import { blockContent } from './blockContent';
import { post } from './post';

export const schemaTypes: SchemaTypeDefinition[] = [post, blockContent];
