import { czechSpaces } from './rehype-cs.mjs';

// Česká typografie pro řetězce mimo Markdown (nadpisy, štítky, texty z CMS).
export const typo = (s?: string) => (s ? czechSpaces(s) : '');
