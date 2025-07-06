"use client";

import { useEffect, useState } from "react";

import FloatingNavbar from "@/components/floating-navbar";
import { content } from "@/lib/content";

export default function HomePage() {
  const [lang, setLang] = useState("id");
  const [currentContent, setCurrentContent] = useState(content.id);

  useEffect(() => {
    setCurrentContent(content[lang as keyof typeof content]);
  }, [lang]);

  return (
    <>
      <FloatingNavbar
        content={currentContent.nav}
        currentLang={lang}
        setLang={setLang}
      />
    </>
  );
}
