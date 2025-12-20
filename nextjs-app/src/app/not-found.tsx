'use client';

import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { useSetHeaderTheme } from "@/contexts/HeaderContext";

export default function NotFound() {
  useSetHeaderTheme('light');
  
  return (
    <div className="min-h-[60vh] flex items-center justify-center p-4 pt-20">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-gray-900 mb-4">404</h1>
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">
          Seite nicht gefunden
        </h2>
        <p className="text-gray-600 mb-8 max-w-md">
          Die von Ihnen gesuchte Seite existiert leider nicht oder wurde
          verschoben.
        </p>
        <div className="flex gap-4 justify-center">
          <Link href="/">
            <Button>Zur Startseite</Button>
          </Link>
          <Link href="/kontakt">
            <Button variant="outline">Kontakt</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
