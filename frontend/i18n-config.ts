export const i18n = {
    defaultLocale: 'en',
    locales: ['en','es'],
    //, 'de', 'cs'
} as const;

export type Locale = typeof i18n['locales'][number];
