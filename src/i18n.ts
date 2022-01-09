import { i18n } from "@lingui/core";
import { en, zh } from 'make-plural/plurals'

export const locales = {
  en: "English",
  zh: "简体中文",
};

export const defaultLocale = "en";

i18n.loadLocaleData({
  en: { plurals: en },
  zh: { plurals: zh },
})


export async function dynamicActivate(locale: string) {
  const { messages } = await import(`@lingui/loader!./locales/${locale}/messages.po`)
  i18n.load(locale, messages)
  i18n.activate(locale)
}
