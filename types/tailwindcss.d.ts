// types/tailwindcss.d.ts
declare module 'tailwindcss/lib/util/flattenColorPalette' {
    import { PluginAPI } from 'tailwindcss/types/config';
    export default function flattenColorPalette(colors: PluginAPI['theme']): Record<string, string>;
  }