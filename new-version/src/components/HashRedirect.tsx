"use client";

import { useEffect } from "react";

const REDIRECT_MAP: Record<string, string> = {
  home: "/",
  about: "/ueber-uns",
  wahlometer: "/wahlometer",
  citizen: "/buerger",
  politicians: "/politiker",
  engineering: "/engineering",
  donate: "/spenden",
  faq: "/faq",
  press: "/presse",
  blog: "/blog",
  contact: "/kontakt",
  impressum: "/impressum",
  datenschutz: "/datenschutz",
  nutzungsbedingungen: "/nutzungsbedingungen",
};

export function HashRedirect() {
  useEffect(() => {
    const hash = window.location.hash;

    if (hash.startsWith("#!")) {
      const page = hash.replace("#!", "").split(";")[0];
      const target = REDIRECT_MAP[page];
      if (target) {
        window.location.replace(target);
      }
    }
  }, []);

  return null;
}
