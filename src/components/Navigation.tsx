"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

const pages = [
  { id: "home", label: "Chat", route: "/" },
  {
    id: "opensource",
    label: "Open Source",
    route: "/opensource",
    subPages: [
      { id: "littlejoey", label: "LittleJoey", route: "/littlejoey" },
      { id: "magpie", label: "Magpie", route: "/magpie" },
    ],
  },
  {
    id: "community",
    label: "Community",
    route: "/community",
    subPages: [{ id: "events", label: "Events", route: "/events" }],
  },
  {
    id: "services",
    label: "Services",
    route: "/services",
    subPages: [
      { id: "datacleaning", label: "Data Cleaning", route: "/datacleaning" },
      { id: "aihosting", label: "AI Hosting", route: "/aihosting" },
      { id: "customai", label: "Custom AI", route: "/customai" },
      {
        id: "requestproposal",
        label: "Request Proposal",
        route: "/requestproposal",
      },
    ],
  },
  {
    id: "rag",
    label: "RAG",
    route: "/rag",
    subPages: [
      { id: "showroom", label: "Showroom", route: "/showroom" },
      { id: "toolsuite", label: "Tool Suite", route: "/toolsuite" },
      {
        id: "partnerprogram",
        label: "Partner Program",
        route: "/partnerprogram",
      },
    ],
  },
  {
    id: "news",
    label: "News",
    route: "/news",
    subPages: [
      { id: "newspage", label: "News Home", route: "/newspage" },
      { id: "articles", label: "Articles", route: "/articles" },
    ],
  },
  {
    id: "projects",
    label: "Projects",
    route: "/projects",
    subPages: [
      { id: "grantsearch", label: "Grant Search", route: "/grantsearch" },
      {
        id: "communityresources",
        label: "Community Resources",
        route: "/communityresources",
      },
      {
        id: "wellbeingagent",
        label: "Wellbeing Agent",
        route: "/wellbeingagent",
      },
      { id: "buzzby", label: "BuzzBy", route: "/buzzby" },
    ],
  },
  {
    id: "donations",
    label: "Donate",
    route: "/donations",
    subPages: [
      { id: "donatecard", label: "Card", route: "/donatecard" },
      { id: "donatecrypto", label: "Crypto", route: "/donatecrypto" },
      { id: "merch", label: "Merch", route: "/merch" },
    ],
  },
  { id: "partners", label: "Partners", route: "/partners" },
];

export default function Navigation() {
  const router = useRouter();
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [mobileOpenSub, setMobileOpenSub] = useState<string | null>(null);

  return (
    <header className="h-16 bg-white/8 backdrop-blur-xl border-b border-white/15 sticky top-0 z-50 shadow-lg shadow-black/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-full flex items-center">
        <div className="flex items-center gap-3 min-w-0">
          <button
            className="lg:hidden w-8 h-8 rounded-lg flex items-center justify-center hover:opacity-80 transition-all duration-200 z-50"
            onClick={() => setIsMobileOpen(!isMobileOpen)}
          >
            <div className="flex flex-col gap-1">
              <div className="w-3 h-0.5 bg-white/80 rounded" />
              <div className="w-3 h-0.5 bg-white/80 rounded" />
              <div className="w-3 h-0.5 bg-white/80 rounded" />
            </div>
          </button>

          <div className="hidden lg:flex w-8 h-8 rounded-lg items-center justify-center bg-gradient-to-r from-cyan-500 to-blue-600">
            <div className="w-4 h-4 bg-white/20 rounded-sm animate-pulse" />
          </div>

          <button
            onClick={() => router.push("/")}
            className="text-xl sm:text-2xl font-bold bg-clip-text text-transparent leading-tight hover:opacity-80 transition-opacity duration-200"
            style={{
              backgroundImage:
                "linear-gradient(to right, rgba(125,211,252,1), rgba(147,197,253,1))",
            }}
          >
            JoeyLLM
          </button>
        </div>

        <nav className="hidden lg:flex items-center gap-2 ml-6 relative">
          {pages.map((p) => (
            <div key={p.id} className="relative group">
              <button
                className="px-4 py-2 rounded-xl text-sm font-medium text-gray-300 hover:text-white hover:bg-white/10 transition-all duration-200 focus:outline-none"
                onClick={() => router.push(p.route)}
                aria-haspopup={p.subPages ? "menu" : undefined}
                aria-expanded={openDropdown === p.id}
                onKeyDown={(e) => {
                  if (
                    p.subPages &&
                    (e.key === "ArrowDown" ||
                      e.key === "Enter" ||
                      e.key === " ")
                  ) {
                    e.preventDefault();
                    setOpenDropdown(p.id);
                    // focus first submenu item
                    setTimeout(() => {
                      const first = document.querySelector(
                        `#submenu-${p.id} button`
                      );
                      (first as HTMLElement | null)?.focus();
                    }, 0);
                  }
                  if (e.key === "Escape") {
                    setOpenDropdown(null);
                  }
                }}
              >
                {p.label}
              </button>

              {p.subPages && (
                <div
                  id={`submenu-${p.id}`}
                  role="menu"
                  className={`absolute top-full left-0 mt-1 min-w-56 bg-black/95 backdrop-blur-xl border border-white/12 rounded-2xl shadow-2xl z-50 py-2 transform transition-all duration-150 pointer-events-auto
                      ${
                        openDropdown === p.id
                          ? "visible opacity-100 scale-100 translate-y-0"
                          : "invisible opacity-0 scale-95 translate-y-1"
                      }
                      group-hover:visible group-hover:opacity-100 group-hover:scale-100 group-hover:translate-y-0`}
                  onKeyDown={(e) => {
                    // Arrow navigation inside submenu
                    const items = Array.from(
                      document.querySelectorAll(`#submenu-${p.id} button`)
                    ) as HTMLElement[];
                    const idx = items.findIndex(
                      (el) => el === document.activeElement
                    );
                    if (e.key === "ArrowDown") {
                      e.preventDefault();
                      const next = items[(idx + 1) % items.length];
                      next?.focus();
                    } else if (e.key === "ArrowUp") {
                      e.preventDefault();
                      const prev =
                        items[(idx - 1 + items.length) % items.length];
                      prev?.focus();
                    } else if (e.key === "Escape") {
                      setOpenDropdown(null);
                    }
                  }}
                >
                  <div
                    className="absolute -top-2 left-6 w-3 h-3 bg-black/95 transform rotate-45 border-l border-t border-white/12"
                    aria-hidden
                  />
                  <div className="px-2 py-1">
                    {p.subPages.map((s) => (
                      <button
                        key={s.id}
                        role="menuitem"
                        className="w-full text-left px-4 py-2 text-sm text-gray-300 hover:text-white hover:bg-white/6 transition-colors duration-150 rounded"
                        onClick={() => {
                          if (s.route && s.route.startsWith("http")) {
                            window.open(s.route, "_blank");
                          } else {
                            router.push(s.route);
                          }
                          setOpenDropdown(null);
                        }}
                      >
                        {s.label}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </nav>

        <div className="flex-1" />

        <div className="flex items-center gap-3">
          <button
            onClick={() => router.push("/opensource")}
            className="px-3 py-1.5 rounded-lg text-sm font-medium text-gray-300 hover:text-white hover:bg-white/10 transition-all duration-200"
          >
            Sign in
          </button>
        </div>
      </div>

      {isMobileOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-black/95 backdrop-blur-xl border-b border-white/25 shadow-2xl z-40">
          <nav className="p-4 space-y-3">
            {pages.map((p) => (
              <div key={p.id}>
                <button
                  className="w-full text-left px-4 py-3 rounded-xl text-sm font-medium text-gray-300 hover:text-white hover:bg-white/10 transition-all duration-200 flex justify-between items-center focus:outline-none"
                  onClick={() => {
                    if (!p.subPages) {
                      router.push(p.route);
                      setIsMobileOpen(false);
                    } else {
                      setMobileOpenSub((prev) => (prev === p.id ? null : p.id));
                    }
                  }}
                  aria-expanded={mobileOpenSub === p.id}
                >
                  <span>{p.label}</span>
                  {p.subPages && (
                    <span className="text-xs text-gray-400">▾</span>
                  )}
                </button>

                {p.subPages && (
                  <div
                    className={`${
                      mobileOpenSub === p.id ? "block" : "hidden"
                    } ml-4 mt-2 space-y-1`}
                  >
                    {p.subPages.map((s) => (
                      <button
                        key={s.id}
                        className="block text-xs px-3 py-2 text-gray-300 hover:text-white transition-colors w-full text-left"
                        onClick={() => {
                          if (s.route && s.route.startsWith("http")) {
                            window.open(s.route, "_blank");
                          } else {
                            router.push(s.route);
                          }
                          setIsMobileOpen(false);
                          setMobileOpenSub(null);
                        }}
                      >
                        • {s.label}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
