'use client';

import React, { useState } from 'react';
import { PageHeader } from '@/components/admin';
import { Button } from '@/components/ui/Button';

export default function ProfilePage() {
  const [activeTab, setActiveTab] = useState<'profile' | 'password' | 'preferences'>('profile');
  const [isSaving, setIsSaving] = useState(false);
  const [saveSuccess, setSaveSuccess] = useState(false);

  // Profile state
  const [name, setName] = useState('Admin User');
  const [email, setEmail] = useState('admin@democracy-deutschland.de');
  const [role] = useState('Administrator');
  const [bio, setBio] = useState('');

  // Password state
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  // Preferences state
  const [language, setLanguage] = useState('de');
  const [timezone, setTimezone] = useState('Europe/Berlin');
  const [twoFactorEnabled, setTwoFactorEnabled] = useState(false);

  const handleSave = async () => {
    setIsSaving(true);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setIsSaving(false);
    setSaveSuccess(true);
    setTimeout(() => setSaveSuccess(false), 3000);
  };

  const tabs = [
    { id: 'profile' as const, label: 'Profil' },
    { id: 'password' as const, label: 'Passwort ändern' },
    { id: 'preferences' as const, label: 'Einstellungen' },
  ];

  return (
    <div>
      <PageHeader
        title="Mein Profil"
        description="Verwalten Sie Ihre persönlichen Informationen und Einstellungen"
      />

      {saveSuccess && (
        <div className="mb-6 p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg flex items-center">
          <svg className="w-5 h-5 text-green-600 dark:text-green-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
          <span className="text-green-800 dark:text-green-200">Änderungen erfolgreich gespeichert!</span>
        </div>
      )}

      <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 overflow-hidden">
        {/* Profile Header */}
        <div className="bg-gradient-to-r from-[#4494d3] to-[#3a7fb8] p-6">
          <div className="flex items-center">
            <div className="w-20 h-20 rounded-full bg-white/20 flex items-center justify-center text-white text-3xl font-bold">
              {name.charAt(0).toUpperCase()}
            </div>
            <div className="ml-6">
              <h2 className="text-xl font-bold text-white">{name}</h2>
              <p className="text-white/80">{email}</p>
              <span className="inline-block mt-2 px-3 py-1 bg-white/20 text-white text-sm rounded-full">
                {role}
              </span>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="border-b border-gray-200 dark:border-gray-700">
          <nav className="flex">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-6 py-4 text-sm font-medium transition-colors ${
                  activeTab === tab.id
                    ? 'text-[#4494d3] border-b-2 border-[#4494d3]'
                    : 'text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </nav>
        </div>

        {/* Tab Content */}
        <div className="p-6">
          {activeTab === 'profile' && (
            <div className="space-y-6 max-w-2xl">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Name
                  </label>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-900 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#4494d3]"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    E-Mail
                  </label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-900 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#4494d3]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Rolle
                </label>
                <input
                  type="text"
                  value={role}
                  disabled
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-gray-50 dark:bg-gray-900/50 text-gray-500 dark:text-gray-400"
                />
                <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                  Rollen können nur von einem Super-Admin geändert werden.
                </p>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Profilbild
                </label>
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center text-gray-500 dark:text-gray-400 text-2xl font-bold">
                    {name.charAt(0).toUpperCase()}
                  </div>
                  <Button variant="outline" size="sm">
                    Bild hochladen
                  </Button>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Bio
                </label>
                <textarea
                  value={bio}
                  onChange={(e) => setBio(e.target.value)}
                  rows={4}
                  placeholder="Erzählen Sie etwas über sich..."
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-900 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#4494d3]"
                />
              </div>

              <div className="pt-4">
                <Button onClick={handleSave} disabled={isSaving}>
                  {isSaving ? 'Speichern...' : 'Profil speichern'}
                </Button>
              </div>
            </div>
          )}

          {activeTab === 'password' && (
            <div className="space-y-6 max-w-md">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Aktuelles Passwort
                </label>
                <input
                  type="password"
                  value={currentPassword}
                  onChange={(e) => setCurrentPassword(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-900 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#4494d3]"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Neues Passwort
                </label>
                <input
                  type="password"
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-900 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#4494d3]"
                />
                <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                  Mindestens 8 Zeichen, eine Zahl und ein Sonderzeichen
                </p>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Passwort bestätigen
                </label>
                <input
                  type="password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-900 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#4494d3]"
                />
              </div>

              <div className="pt-4">
                <Button 
                  onClick={handleSave} 
                  disabled={isSaving || !currentPassword || !newPassword || newPassword !== confirmPassword}
                >
                  {isSaving ? 'Speichern...' : 'Passwort ändern'}
                </Button>
              </div>
            </div>
          )}

          {activeTab === 'preferences' && (
            <div className="space-y-6 max-w-2xl">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Sprache
                  </label>
                  <select
                    value={language}
                    onChange={(e) => setLanguage(e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-900 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#4494d3]"
                  >
                    <option value="de">Deutsch</option>
                    <option value="en">English</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Zeitzone
                  </label>
                  <select
                    value={timezone}
                    onChange={(e) => setTimezone(e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-900 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#4494d3]"
                  >
                    <option value="Europe/Berlin">Berlin (MEZ/MESZ)</option>
                    <option value="Europe/Vienna">Wien (MEZ/MESZ)</option>
                    <option value="Europe/Zurich">Zürich (MEZ/MESZ)</option>
                  </select>
                </div>
              </div>

              <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
                <h4 className="font-medium text-gray-900 dark:text-white mb-4">Sicherheit</h4>
                
                <div className="flex items-center justify-between py-3">
                  <div>
                    <p className="font-medium text-gray-900 dark:text-white">Zwei-Faktor-Authentifizierung</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Zusätzliche Sicherheit für Ihr Konto</p>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      checked={twoFactorEnabled}
                      onChange={(e) => setTwoFactorEnabled(e.target.checked)}
                      className="sr-only peer"
                    />
                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-[#4494d3]/20 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#4494d3]"></div>
                  </label>
                </div>
              </div>

              <div className="pt-4">
                <Button onClick={handleSave} disabled={isSaving}>
                  {isSaving ? 'Speichern...' : 'Einstellungen speichern'}
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Account Info */}
      <div className="mt-6 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-6">
        <h3 className="font-semibold text-gray-900 dark:text-white mb-4">Kontoinformationen</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
          <div>
            <p className="text-gray-500 dark:text-gray-400">Konto erstellt</p>
            <p className="font-medium text-gray-900 dark:text-white">15. Januar 2024</p>
          </div>
          <div>
            <p className="text-gray-500 dark:text-gray-400">Letzte Anmeldung</p>
            <p className="font-medium text-gray-900 dark:text-white">Heute, 14:32 Uhr</p>
          </div>
          <div>
            <p className="text-gray-500 dark:text-gray-400">Anmeldungen (30 Tage)</p>
            <p className="font-medium text-gray-900 dark:text-white">23 Anmeldungen</p>
          </div>
        </div>
      </div>

      {/* Danger Zone */}
      <div className="mt-6 bg-red-50 dark:bg-red-900/10 rounded-lg border border-red-200 dark:border-red-800 p-6">
        <h3 className="font-semibold text-red-800 dark:text-red-400 mb-2">Gefahrenzone</h3>
        <p className="text-sm text-red-600 dark:text-red-400 mb-4">
          Diese Aktionen sind unwiderruflich. Bitte seien Sie vorsichtig.
        </p>
        <Button variant="outline" size="sm" className="border-red-300 text-red-600 hover:bg-red-100 dark:border-red-700 dark:text-red-400 dark:hover:bg-red-900/20">
          Konto deaktivieren
        </Button>
      </div>
    </div>
  );
}
