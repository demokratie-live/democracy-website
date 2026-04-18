"use client";

import { useState, type FormEvent } from "react";
import { Send, CheckCircle, AlertCircle } from "lucide-react";

type FormStatus = "idle" | "sending" | "success" | "error";

// TODO: Endpoint konfigurieren, siehe new-version/TODOs.md
const BUG_REPORT_ENDPOINT = process.env.NEXT_PUBLIC_BUG_REPORT_ENDPOINT ?? "";

export function BugReportForm() {
  const [status, setStatus] = useState<FormStatus>("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});

  function validate(formData: FormData): Record<string, string> {
    const errs: Record<string, string> = {};
    const name = (formData.get("name") as string) ?? "";
    const email = (formData.get("email") as string) ?? "";
    const platform = (formData.get("platform") as string) ?? "";
    const version = (formData.get("version") as string) ?? "";
    const description = (formData.get("description") as string) ?? "";

    if (name.trim().length < 2) errs.name = "Bitte gib Deinen Namen ein.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
      errs.email = "Bitte gib eine gültige E-Mail-Adresse ein.";
    if (!platform) errs.platform = "Bitte wähle eine Plattform.";
    if (version.trim().length < 1) errs.version = "Bitte gib die App-Version an.";
    if (description.trim().length < 10)
      errs.description = "Bitte beschreibe den Fehler (min. 10 Zeichen).";

    return errs;
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    const errs = validate(formData);

    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }

    setErrors({});

    if (!BUG_REPORT_ENDPOINT) {
      // Fallback: open mailto with pre-filled data so users can still reach us
      const body = encodeURIComponent(
        Array.from(formData.entries())
          .filter(([k]) => k !== "screenshot")
          .map(([k, v]) => `${k}: ${v}`)
          .join("\n"),
      );
      window.location.href = `mailto:prototyping@democracy-deutschland.de?subject=${encodeURIComponent(
        "Bugreport DEMOCRACY App",
      )}&body=${body}`;
      setStatus("success");
      return;
    }

    setStatus("sending");
    try {
      const response = await fetch(BUG_REPORT_ENDPOINT, {
        method: "POST",
        body: formData,
        headers: { Accept: "application/json" },
      });
      setStatus(response.ok ? "success" : "error");
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="flex flex-col items-center gap-4 rounded-xl border border-accent-300 bg-accent-50 p-8 text-center">
        <CheckCircle className="h-12 w-12 text-accent-500" />
        <h3 className="text-xl font-semibold">Bugreport übermittelt!</h3>
        <p className="text-muted-foreground">
          Vielen Dank für Dein Feedback. Wir prüfen den Fehler so schnell wie möglich.
        </p>
      </div>
    );
  }

  const inputCls = (k: string) =>
    `w-full rounded-lg border px-4 py-2.5 text-sm transition-colors focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500/20 ${
      errors[k] ? "border-danger" : "border-border"
    }`;

  return (
    <form onSubmit={handleSubmit} className="space-y-6 text-left" noValidate>
      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="bug-name" className="mb-1 block text-sm font-medium">
            Name *
          </label>
          <input
            id="bug-name"
            name="name"
            type="text"
            className={inputCls("name")}
            placeholder="Dein Name"
          />
          {errors.name && <p className="mt-1 text-sm text-danger">{errors.name}</p>}
        </div>
        <div>
          <label htmlFor="bug-email" className="mb-1 block text-sm font-medium">
            E-Mail *
          </label>
          <input
            id="bug-email"
            name="email"
            type="email"
            className={inputCls("email")}
            placeholder="deine@email.de"
          />
          {errors.email && <p className="mt-1 text-sm text-danger">{errors.email}</p>}
        </div>
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="bug-platform" className="mb-1 block text-sm font-medium">
            Plattform *
          </label>
          <select id="bug-platform" name="platform" className={inputCls("platform")} defaultValue="">
            <option value="" disabled>
              Bitte wählen…
            </option>
            <option value="iOS">iOS</option>
            <option value="Android">Android</option>
            <option value="Web">Browser/Web</option>
          </select>
          {errors.platform && <p className="mt-1 text-sm text-danger">{errors.platform}</p>}
        </div>
        <div>
          <label htmlFor="bug-version" className="mb-1 block text-sm font-medium">
            App-Version *
          </label>
          <input
            id="bug-version"
            name="version"
            type="text"
            className={inputCls("version")}
            placeholder="z. B. 1.5.10"
          />
          {errors.version && <p className="mt-1 text-sm text-danger">{errors.version}</p>}
        </div>
      </div>

      <div>
        <label htmlFor="bug-description" className="mb-1 block text-sm font-medium">
          Beschreibung des Fehlers *
        </label>
        <textarea
          id="bug-description"
          name="description"
          rows={5}
          className={inputCls("description")}
          placeholder="Was ist passiert? Welche Schritte führen zum Fehler?"
        />
        {errors.description && <p className="mt-1 text-sm text-danger">{errors.description}</p>}
      </div>

      <div>
        <label htmlFor="bug-screenshot" className="mb-1 block text-sm font-medium">
          Screenshot (optional)
        </label>
        <input
          id="bug-screenshot"
          name="screenshot"
          type="file"
          accept="image/*"
          className="block w-full text-sm text-muted-foreground file:mr-4 file:rounded-lg file:border-0 file:bg-primary-50 file:px-4 file:py-2 file:text-sm file:font-medium file:text-primary-700 hover:file:bg-primary-100"
        />
      </div>

      {status === "error" && (
        <div className="flex items-center gap-2 rounded-lg bg-red-50 p-4 text-sm text-danger">
          <AlertCircle className="h-5 w-5 flex-shrink-0" />
          <span>
            Beim Senden ist ein Fehler aufgetreten. Bitte versuche es erneut oder schreibe direkt an
            prototyping@democracy-deutschland.de.
          </span>
        </div>
      )}

      <button
        type="submit"
        disabled={status === "sending"}
        className="inline-flex items-center gap-2 rounded-lg bg-primary-600 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-primary-700 disabled:opacity-50"
      >
        <Send className="h-4 w-4" />
        {status === "sending" ? "Wird gesendet..." : "Bug melden"}
      </button>
    </form>
  );
}
