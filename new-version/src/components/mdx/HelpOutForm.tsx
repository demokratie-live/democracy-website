"use client";

import { useState, type FormEvent } from "react";
import { Send, CheckCircle, AlertCircle } from "lucide-react";

type FormStatus = "idle" | "sending" | "success" | "error";

const ROLES = [
  "UI/UX-Designer",
  "Front-End-Developer",
  "Back-End-Developer",
  "Kryptograph",
  "Marketingstratege",
  "Redakteur",
  "Botschafter",
  "Andere",
];

// TODO: Endpoint konfigurieren, siehe new-version/TODOs.md
const HELP_OUT_ENDPOINT = process.env.NEXT_PUBLIC_HELP_OUT_ENDPOINT ?? "";

export function HelpOutForm() {
  const [status, setStatus] = useState<FormStatus>("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});

  function validate(formData: FormData): Record<string, string> {
    const errs: Record<string, string> = {};
    const name = (formData.get("name") as string) ?? "";
    const email = (formData.get("email") as string) ?? "";
    const role = (formData.get("role") as string) ?? "";
    const motivation = (formData.get("motivation") as string) ?? "";

    if (name.trim().length < 2) errs.name = "Bitte gib Deinen Namen ein.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
      errs.email = "Bitte gib eine gültige E-Mail-Adresse ein.";
    if (!role) errs.role = "Bitte wähle eine Rolle aus.";
    if (motivation.trim().length < 10)
      errs.motivation = "Bitte schreibe ein paar Sätze (min. 10 Zeichen).";

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

    if (!HELP_OUT_ENDPOINT) {
      const body = encodeURIComponent(
        Array.from(formData.entries())
          .map(([k, v]) => `${k}: ${v}`)
          .join("\n"),
      );
      window.location.href = `mailto:team@democracy-deutschland.de?subject=${encodeURIComponent(
        "Mithelfen bei DEMOCRACY",
      )}&body=${body}`;
      setStatus("success");
      return;
    }

    setStatus("sending");
    try {
      const response = await fetch(HELP_OUT_ENDPOINT, {
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
        <h3 className="text-xl font-semibold">Willkommen im Team!</h3>
        <p className="text-muted-foreground">
          Vielen Dank für Dein Interesse. Wir melden uns zeitnah bei Dir.
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
          <label htmlFor="help-name" className="mb-1 block text-sm font-medium">
            Name *
          </label>
          <input
            id="help-name"
            name="name"
            type="text"
            className={inputCls("name")}
            placeholder="Dein Name"
          />
          {errors.name && <p className="mt-1 text-sm text-danger">{errors.name}</p>}
        </div>
        <div>
          <label htmlFor="help-email" className="mb-1 block text-sm font-medium">
            E-Mail *
          </label>
          <input
            id="help-email"
            name="email"
            type="email"
            className={inputCls("email")}
            placeholder="deine@email.de"
          />
          {errors.email && <p className="mt-1 text-sm text-danger">{errors.email}</p>}
        </div>
      </div>

      <div>
        <label htmlFor="help-role" className="mb-1 block text-sm font-medium">
          Wie möchtest Du unterstützen? *
        </label>
        <select id="help-role" name="role" className={inputCls("role")} defaultValue="">
          <option value="" disabled>
            Bitte wählen…
          </option>
          {ROLES.map((role) => (
            <option key={role} value={role}>
              {role}
            </option>
          ))}
        </select>
        {errors.role && <p className="mt-1 text-sm text-danger">{errors.role}</p>}
      </div>

      <div>
        <label htmlFor="help-motivation" className="mb-1 block text-sm font-medium">
          Deine Motivation *
        </label>
        <textarea
          id="help-motivation"
          name="motivation"
          rows={5}
          className={inputCls("motivation")}
          placeholder="Warum möchtest Du DEMOCRACY unterstützen? Welche Fähigkeiten bringst Du mit?"
        />
        {errors.motivation && <p className="mt-1 text-sm text-danger">{errors.motivation}</p>}
      </div>

      {status === "error" && (
        <div className="flex items-center gap-2 rounded-lg bg-red-50 p-4 text-sm text-danger">
          <AlertCircle className="h-5 w-5 flex-shrink-0" />
          <span>
            Beim Senden ist ein Fehler aufgetreten. Bitte versuche es erneut oder schreibe direkt an
            team@democracy-deutschland.de.
          </span>
        </div>
      )}

      <button
        type="submit"
        disabled={status === "sending"}
        className="inline-flex items-center gap-2 rounded-lg bg-primary-600 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-primary-700 disabled:opacity-50"
      >
        <Send className="h-4 w-4" />
        {status === "sending" ? "Wird gesendet..." : "Jetzt mithelfen"}
      </button>
    </form>
  );
}
