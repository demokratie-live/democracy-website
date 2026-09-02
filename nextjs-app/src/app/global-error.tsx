"use client";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html lang="de">
      <body>
        <div className="min-h-screen flex items-center justify-center p-4 bg-gray-50">
          <div className="text-center max-w-md">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Schwerwiegender Fehler
            </h1>
            <p className="text-gray-600 mb-6">
              Es ist ein kritischer Fehler aufgetreten. Bitte laden Sie die
              Seite neu oder kontaktieren Sie uns, wenn das Problem weiterhin
              besteht.
            </p>
            <div className="flex gap-4 justify-center">
              <button
                onClick={reset}
                className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
              >
                Erneut versuchen
              </button>
              <button
                onClick={() => (window.location.href = "/")}
                className="px-6 py-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300 transition-colors"
              >
                Zur Startseite
              </button>
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
