"use client";

import { useState, type FormEvent } from "react";
import { Send, CheckCircle, AlertCircle } from "lucide-react";

type FormStatus = "idle" | "sending" | "success" | "error";

export function ContactForm() {
  const [status, setStatus] = useState<FormStatus>("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});

  function validate(formData: FormData): Record<string, string> {
    const errs: Record<string, string> = {};
    const vorname = formData.get("vorname") as string;
    const nachname = formData.get("nachname") as string;
    const email = formData.get("email") as string;
    const nachricht = formData.get("nachricht") as string;

    if (!vorname || vorname.trim().length < 2) errs.vorname = "Bitte gib Deinen Vornamen ein.";
    if (!nachname || nachname.trim().length < 2) errs.nachname = "Bitte gib Deinen Nachnamen ein.";
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
      errs.email = "Bitte gib eine gültige E-Mail-Adresse ein.";
    if (!nachricht || nachricht.trim().length < 10)
      errs.nachricht = "Bitte schreibe mindestens 10 Zeichen.";

    return errs;
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const errs = validate(formData);

    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }

    setErrors({});
    setStatus("sending");

    const endpoint = process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT ?? "";

    if (!endpoint) {
      // Fallback: pre-fill a mailto draft so users can still reach us
      const body = encodeURIComponent(
        Array.from(formData.entries())
          .map(([k, v]) => `${k}: ${v}`)
          .join("\n"),
      );
      window.location.href = `mailto:contact@democracy-deutschland.de?subject=${encodeURIComponent(
        "Kontaktanfrage DEMOCRACY",
      )}&body=${body}`;
      setStatus("success");
      return;
    }

    try {
      const response = await fetch(endpoint, {
        method: "POST",
        body: formData,
        headers: { Accept: "application/json" },
      });

      if (response.ok) {
        setStatus("success");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="flex flex-col items-center gap-4 rounded-xl border border-accent-300 bg-accent-50 p-8 text-center">
        <CheckCircle className="h-12 w-12 text-accent-500" />
        <h3 className="text-xl font-semibold">Nachricht gesendet!</h3>
        <p className="text-muted-foreground">
          Vielen Dank für Deine Nachricht. Wir melden uns so schnell wie möglich bei Dir.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6" noValidate>
      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="vorname" className="mb-1 block text-sm font-medium">
            Vorname *
          </label>
          <input
            type="text"
            id="vorname"
            name="vorname"
            className={`w-full rounded-lg border px-4 py-2.5 text-sm transition-colors focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500/20 ${
              errors.vorname ? "border-danger" : "border-border"
            }`}
            placeholder="Dein Vorname"
          />
          {errors.vorname && <p className="mt-1 text-sm text-danger">{errors.vorname}</p>}
        </div>
        <div>
          <label htmlFor="nachname" className="mb-1 block text-sm font-medium">
            Nachname *
          </label>
          <input
            type="text"
            id="nachname"
            name="nachname"
            className={`w-full rounded-lg border px-4 py-2.5 text-sm transition-colors focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500/20 ${
              errors.nachname ? "border-danger" : "border-border"
            }`}
            placeholder="Dein Nachname"
          />
          {errors.nachname && <p className="mt-1 text-sm text-danger">{errors.nachname}</p>}
        </div>
      </div>

      <div>
        <label htmlFor="email" className="mb-1 block text-sm font-medium">
          E-Mail *
        </label>
        <input
          type="email"
          id="email"
          name="email"
          className={`w-full rounded-lg border px-4 py-2.5 text-sm transition-colors focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500/20 ${
            errors.email ? "border-danger" : "border-border"
          }`}
          placeholder="deine@email.de"
        />
        {errors.email && <p className="mt-1 text-sm text-danger">{errors.email}</p>}
      </div>

      <div>
        <label htmlFor="nachricht" className="mb-1 block text-sm font-medium">
          Nachricht *
        </label>
        <textarea
          id="nachricht"
          name="nachricht"
          rows={6}
          className={`w-full rounded-lg border px-4 py-2.5 text-sm transition-colors focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500/20 ${
            errors.nachricht ? "border-danger" : "border-border"
          }`}
          placeholder="Deine Nachricht..."
        />
        {errors.nachricht && <p className="mt-1 text-sm text-danger">{errors.nachricht}</p>}
      </div>

      {status === "error" && (
        <div className="flex items-center gap-2 rounded-lg bg-red-50 p-4 text-sm text-danger">
          <AlertCircle className="h-5 w-5 flex-shrink-0" />
          <span>
            Beim Senden ist ein Fehler aufgetreten. Bitte versuche es erneut oder schreibe uns
            direkt an contact@democracy-deutschland.de.
          </span>
        </div>
      )}

      <button
        type="submit"
        disabled={status === "sending"}
        className="inline-flex items-center gap-2 rounded-lg bg-primary-600 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-primary-700 disabled:opacity-50"
      >
        <Send className="h-4 w-4" />
        {status === "sending" ? "Wird gesendet..." : "Absenden"}
      </button>
    </form>
  );
}
