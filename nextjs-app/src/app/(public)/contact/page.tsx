'use client';

import * as React from 'react';
import { useSetHeaderTheme } from '@/contexts/HeaderContext';

export default function ContactPage() {
  useSetHeaderTheme('light');
  const [loading, setLoading] = React.useState(false);
  const [success, setSuccess] = React.useState(false);
  const [error, setError] = React.useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSuccess(false);

    const formData = new FormData(e.currentTarget);
    const data = {
      type: 'contact',
      vorname: formData.get('vorname'),
      nachname: formData.get('nachname'),
      email: formData.get('email'),
      message: formData.get('text'),
    };

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || 'Fehler beim Senden der Nachricht');
      }

      setSuccess(true);
      e.currentTarget.reset();
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Ein Fehler ist aufgetreten');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white pt-16">
      <div className="container mx-auto px-4 py-8">
        <div className="row">
          {/* Contact Information */}
          <div className="w-full text-center text-gray-800 leading-relaxed py-8">
            DEMOCRACY Deutschland e.V.<br />
            Am Klausberge 12<br />
            37075 Göttingen<br />
            Tel +49 - (0)176 - 47040213<br />
            contact@democracy-deutschland.de
          </div>

          {/* Contact Form */}
          <div className="w-full text-left" style={{ marginTop: '50px' }}>
            <form id="form" onSubmit={handleSubmit}>
              {success && (
                <div className="mb-4 p-4 bg-green-100 text-green-700 rounded">
                  Vielen Dank für Ihre Nachricht! Wir werden uns bald bei Ihnen melden.
                </div>
              )}
              
              {error && (
                <div className="mb-4 p-4 bg-red-100 text-red-700 rounded">
                  {error}
                </div>
              )}

              <div className="flex flex-wrap -mx-2">
                <div className="w-full md:w-1/3 px-2 mb-4">
                  <div className="form-group">
                    <input
                      id="vorname"
                      name="vorname"
                      type="text"
                      className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#4494d3] focus:border-transparent"
                      placeholder="Vorname"
                    />
                  </div>
                </div>
                <div className="w-full md:w-1/3 px-2 mb-4">
                  <div className="form-group">
                    <input
                      id="nachname"
                      name="nachname"
                      type="text"
                      className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#4494d3] focus:border-transparent"
                      placeholder="Nachname"
                    />
                  </div>
                </div>
                <div className="w-full md:w-1/3 px-2 mb-4">
                  <div className="form-group">
                    <input
                      id="email"
                      name="email"
                      type="email"
                      className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#4494d3] focus:border-transparent"
                      aria-describedby="emailHelp"
                      placeholder="Email"
                      required
                    />
                  </div>
                </div>
              </div>

              <div className="mb-4">
                <div className="form-group">
                  <textarea
                    className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#4494d3] focus:border-transparent resize-vertical"
                    id="text"
                    name="text"
                    rows={15}
                    placeholder="Deine Nachricht..."
                    required
                  />
                </div>
              </div>

              <div className="flex flex-wrap" style={{ marginBottom: '50px' }}>
                <div className="hidden lg:block lg:w-3/4"></div>
                <div className="w-full lg:w-1/4">
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full cursor-pointer bg-[#4494d3] hover:bg-[#3a82bd] text-white font-medium py-3 px-6 rounded transition-colors duration-200 flex items-center justify-center gap-2"
                    style={{ fontSize: 'large' }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                      className="w-5 h-5 fill-current"
                    >
                      <path d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z" />
                    </svg>
                    {loading ? 'Wird gesendet...' : 'Absenden!'}
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
