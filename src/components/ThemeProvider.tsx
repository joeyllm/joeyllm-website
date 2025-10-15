"use client";
import React, { useEffect } from "react";

export type ThemeName =
  | "blue-octopus"
  | "outback-orange"
  | "green-gold"
  | "bin-chicken"
  | "red-roo"
  | "wombat-brown"
  | "desert-ochre"
  | "golden-wattle"
  | string;

const colorThemes: Record<string, any> = {
  "blue-octopus": {
    name: "Blue Octopus",
    description: "Ocean depths and tentacles",
    cssVars: {
      "--primary-from": "14 165 233",
      "--primary-to": "37 99 235",
      "--text-from": "125 211 252",
      "--text-via": "147 197 253",
      "--text-to": "165 243 252",
      "--accent": "14 165 233",
      "--accent-glow": "14 165 233",
    },
  },
  "outback-orange": {
    name: "Outback Orange",
    description: "Desert sunset vibes",
    cssVars: {
      "--primary-from": "234 88 12",
      "--primary-to": "220 38 38",
      "--text-from": "254 215 170",
      "--text-via": "252 165 165",
      "--text-to": "253 186 116",
      "--accent": "234 88 12",
      "--accent-glow": "234 88 12",
    },
  },
  "green-gold": {
    name: "Green and Gold",
    description: "Australian Olympic colors",
    cssVars: {
      "--primary-from": "34 197 94",
      "--primary-to": "234 179 8",
      "--text-from": "187 247 208",
      "--text-via": "254 240 138",
      "--text-to": "134 239 172",
      "--accent": "34 197 94",
      "--accent-glow": "34 197 94",
    },
  },
  "bin-chicken": {
    name: "Bin Chicken",
    description: "Urban Ibis elegance",
    cssVars: {
      "--primary-from": "156 163 175",
      "--primary-to": "229 231 235",
      "--text-from": "243 244 246",
      "--text-via": "229 231 235",
      "--text-to": "209 213 219",
      "--accent": "148 163 184",
      "--accent-glow": "148 163 184",
    },
  },
  "red-roo": {
    name: "Red Roo",
    description: "Kangaroo country",
    cssVars: {
      "--primary-from": "185 28 28",
      "--primary-to": "220 38 38",
      "--text-from": "254 202 202",
      "--text-via": "252 165 165",
      "--text-to": "248 113 113",
      "--accent": "185 28 28",
      "--accent-glow": "185 28 28",
    },
  },
  "wombat-brown": {
    name: "Wombat Brown",
    description: "Earthy bush tones",
    cssVars: {
      "--primary-from": "92 44 8",
      "--primary-to": "217 119 6",
      "--text-from": "254 243 199",
      "--text-via": "253 230 138",
      "--text-to": "252 211 77",
      "--accent": "92 44 8",
      "--accent-glow": "92 44 8",
    },
  },
  "desert-ochre": {
    name: "Desert Ochre",
    description: "Great desert tan and stone",
    cssVars: {
      "--primary-from": "120 53 15",
      "--primary-to": "185 28 28",
      "--text-from": "254 243 199",
      "--text-via": "254 202 202",
      "--text-to": "253 230 138",
      "--accent": "120 53 15",
      "--accent-glow": "120 53 15",
    },
  },
  "golden-wattle": {
    name: "Golden Wattle",
    description: "National flower gold",
    cssVars: {
      "--primary-from": "217 119 6",
      "--primary-to": "250 204 21",
      "--text-from": "254 243 199",
      "--text-via": "254 240 138",
      "--text-to": "253 230 138",
      "--accent": "217 119 6",
      "--accent-glow": "217 119 6",
    },
  },
};

interface Props {
  theme: ThemeName;
  children: React.ReactNode;
}

export default function ThemeProvider({ theme, children }: Props) {
  useEffect(() => {
    const root = document.documentElement;
    const themeData = colorThemes[theme] || colorThemes["blue-octopus"];

    if (themeData && themeData.cssVars) {
      Object.entries(themeData.cssVars).forEach(([property, value]) => {
        try {
          root.style.setProperty(property, value as string);
        } catch (_) {}
      });
    }
  }, [theme]);

  return <>{children}</>;
}
