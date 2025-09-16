import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Palette, Globe, ChevronRight, Monitor, Sun, Moon } from "lucide-react";

export function PreferencesSettings() {
  const [theme, setTheme] = useState("system");
  const [language, setLanguage] = useState("en");

  const themes = [
    { value: "light", label: "Light", icon: Sun },
    { value: "dark", label: "Dark", icon: Moon },
    { value: "system", label: "System", icon: Monitor }
  ];

  const languages = [
    { value: "en", label: "English", flag: "🇺🇸" },
    { value: "es", label: "Español", flag: "🇪🇸" },
    { value: "fr", label: "Français", flag: "🇫🇷" },
    { value: "de", label: "Deutsch", flag: "🇩🇪" },
    { value: "it", label: "Italiano", flag: "🇮🇹" },
    { value: "pt", label: "Português", flag: "🇵🇹" },
    { value: "ru", label: "Русский", flag: "🇷🇺" },
    { value: "ja", label: "日本語", flag: "🇯🇵" },
    { value: "ko", label: "한국어", flag: "🇰🇷" },
    { value: "zh", label: "中文", flag: "🇨🇳" }
  ];

  const currentLanguage = languages.find(lang => lang.value === language);
  const currentTheme = themes.find(t => t.value === theme);

  return (
    <div className="settings-card slide-up">
      <div className="settings-section">
        <h2 className="text-xl font-semibold text-foreground mb-4">Preferences</h2>
        
        {/* Theme Setting */}
        <div className="setting-item group">
          <div className="flex items-center gap-3">
            <Palette className="setting-item-icon" />
            <div>
              <h3 className="font-medium text-foreground">Theme</h3>
              <p className="text-sm text-muted-foreground flex items-center gap-2">
                {currentTheme && <currentTheme.icon className="w-3 h-3" />}
                {currentTheme?.label}
              </p>
            </div>
          </div>
          <Select value={theme} onValueChange={setTheme}>
            <SelectTrigger className="w-32 opacity-0 group-hover:opacity-100 transition-opacity border-input-border">
              <SelectValue />
            </SelectTrigger>
            <SelectContent className="bg-card border-card-border">
              {themes.map((themeOption) => (
                <SelectItem key={themeOption.value} value={themeOption.value} className="hover:bg-hover">
                  <div className="flex items-center gap-2">
                    <themeOption.icon className="w-4 h-4" />
                    {themeOption.label}
                  </div>
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Language Setting */}
        <div className="setting-item group">
          <div className="flex items-center gap-3">
            <Globe className="setting-item-icon" />
            <div>
              <h3 className="font-medium text-foreground">Language</h3>
              <p className="text-sm text-muted-foreground">
                {currentLanguage?.flag} {currentLanguage?.label}
              </p>
            </div>
          </div>
          <Select value={language} onValueChange={setLanguage}>
            <SelectTrigger className="w-40 opacity-0 group-hover:opacity-100 transition-opacity border-input-border">
              <SelectValue />
            </SelectTrigger>
            <SelectContent className="bg-card border-card-border max-h-60">
              {languages.map((lang) => (
                <SelectItem key={lang.value} value={lang.value} className="hover:bg-hover">
                  <div className="flex items-center gap-2">
                    <span>{lang.flag}</span>
                    {lang.label}
                  </div>
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>
    </div>
  );
}