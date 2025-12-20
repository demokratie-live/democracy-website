"use client";

import { useEffect } from "react";
import { Button } from "@/components/ui/Button";
import { Alert } from "@/components/ui/Alert";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error("Application error:", error);
  }, [error]);

  return (
    <div className="min-h-[60vh] flex items-center justify-center p-4">
      <div className="max-w-md w-full">
        <Alert variant="error" className="mb-4">
          <h2 className="text-lg font-semibold mb-2">
            Ein Fehler ist aufgetreten
          </h2>
          <p className="text-sm mb-4">
            Entschuldigung, es ist ein unerwarteter Fehler aufgetreten. Bitte
            versuchen Sie es erneut.
          </p>
          {process.env.NODE_ENV === "development" && (
            <details className="text-xs mt-2">
              <summary className="cursor-pointer">Fehlerdetails</summary>
              <pre className="mt-2 p-2 bg-gray-100 rounded overflow-auto">
                {error.message}
              </pre>
            </details>
          )}
        </Alert>
        <div className="flex gap-2">
          <Button onClick={reset} className="flex-1">
            Erneut versuchen
          </Button>
          <Button
            variant="outline"
            onClick={() => (window.location.href = "/")}
            className="flex-1"
          >
            Zur Startseite
          </Button>
        </div>
      </div>
    </div>
  );
}
