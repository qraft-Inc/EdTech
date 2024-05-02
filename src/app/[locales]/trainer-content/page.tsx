"use client";
import { NextUIProvider } from "@nextui-org/react";
import { useCurrentLocale } from "next-i18n-router/client";
import i18nConfig from "../../../../i18nConfig";
import TranslationProvider from "@/providers/translation-provider";
import AdminLayout from "@/layouts/admin-layout";
import ContentLibrary from "@/modules/trainer/views/pages/content-library.page";
import initTranslations from "@/app/i18n";

const i18Namespaces = ["common", "trainer"];

export default async function Home() {
  const locale = useCurrentLocale(i18nConfig);
  const { t, resources } = await initTranslations(locale, i18Namespaces);
  return (
    <TranslationProvider
      locale={locale}
      resources={resources}
      namespaces={i18Namespaces}
    >
      <NextUIProvider>
        <AdminLayout child={<ContentLibrary />} />
      </NextUIProvider>
    </TranslationProvider>
  );
}
